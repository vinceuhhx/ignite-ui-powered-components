import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const CDN_LINKS = [
  '<link rel="stylesheet" href="https://cdn.sdworx.com/ignite/styling/v0/0.0.1/website/all.css" />',
  '<link rel="stylesheet" href="https://cdn.sdworx.com/ignite/visuals/v1/1.0.0/all.css" />'
];

export async function injectCDNLinks() {
  const possibleHtmlFiles = [
    path.join(process.cwd(), 'index.html'),
    path.join(process.cwd(), 'public', 'index.html'),
    path.join(process.cwd(), 'src', 'index.html')
  ];
  
  let htmlFile: string | null = null;
  
  // Find the HTML file
  for (const file of possibleHtmlFiles) {
    if (await fs.pathExists(file)) {
      htmlFile = file;
      break;
    }
  }
  
  if (!htmlFile) {
    console.warn(chalk.yellow('Warning: No HTML file found. CDN links not injected.'));
    console.log(chalk.blue('Please manually add these CDN links to your HTML file:'));
    CDN_LINKS.forEach(link => console.log(chalk.gray(`  ${link}`)));
    return;
  }
  
  let htmlContent = await fs.readFile(htmlFile, 'utf-8');
  
  // Check if CDN links already exist
  const hasIgniteStyling = htmlContent.includes('cdn.sdworx.com/ignite/styling');
  const hasIgniteVisuals = htmlContent.includes('cdn.sdworx.com/ignite/visuals');
  
  if (hasIgniteStyling && hasIgniteVisuals) {
    console.log(chalk.blue('CDN links already present in HTML file.'));
    return;
  }
  
  // Add CDN links to the head section
  const headEndIndex = htmlContent.indexOf('</head>');
  if (headEndIndex === -1) {
    console.warn(chalk.yellow('Warning: Could not find </head> tag. CDN links not injected.'));
    return;
  }
  
  const linksToAdd = CDN_LINKS.filter(link => {
    if (link.includes('styling') && hasIgniteStyling) return false;
    if (link.includes('visuals') && hasIgniteVisuals) return false;
    return true;
  });
  
  if (linksToAdd.length === 0) {
    return;
  }
  
  const cdnLinksHtml = '  ' + linksToAdd.join('\n  ') + '\n  ';
  
  htmlContent = 
    htmlContent.slice(0, headEndIndex) +
    cdnLinksHtml +
    htmlContent.slice(headEndIndex);
  
  await fs.writeFile(htmlFile, htmlContent);
  
  console.log(chalk.green(`✅ CDN links injected into ${path.relative(process.cwd(), htmlFile)}`));
}