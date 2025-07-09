import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

export const CDN_LINKS = [
  'https://cdn.sdworx.com/ignite/styling/v0/0.0.1/website/all.css',
  'https://cdn.sdworx.com/ignite/visuals/v1/1.0.0/all.css'
];

export async function injectCDNLinks(projectPath: string): Promise<void> {
  const htmlFiles = ['index.html', 'public/index.html'];
  
  for (const htmlFile of htmlFiles) {
    const htmlPath = path.join(projectPath, htmlFile);
    
    if (await fs.pathExists(htmlPath)) {
      let content = await fs.readFile(htmlPath, 'utf-8');
      
      // Check if CDN links are already present
      const hasSparkUICDN = CDN_LINKS.some(link => content.includes(link));
      
      if (!hasSparkUICDN) {
        // Find the head tag and inject the CDN links
        const headCloseTag = '</head>';
        const headIndex = content.indexOf(headCloseTag);
        
        if (headIndex !== -1) {
          const cdnHTML = CDN_LINKS
            .map(link => `    <link rel="stylesheet" href="${link}" />`)
            .join('\n');
          
          content = content.slice(0, headIndex) + 
            `    <!-- SparkUI CDN -->\n${cdnHTML}\n\n  ` + 
            content.slice(headIndex);
          
          await fs.writeFile(htmlPath, content);
          console.log(chalk.green(`✓ Added SparkUI CDN links to ${htmlFile}`));
          return;
        }
      } else {
        console.log(chalk.yellow(`⚠ SparkUI CDN links already exist in ${htmlFile}`));
        return;
      }
    }
  }
  
  console.log(chalk.red('✗ Could not find index.html file to inject CDN links'));
}

export function generateHTMLTemplate(): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SparkUI Project</title>
    <!-- SparkUI CDN -->
${CDN_LINKS.map(link => `    <link rel="stylesheet" href="${link}" />`).join('\n')}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}