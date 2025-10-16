'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('/trophy-removebg-preview.png', {
      destDir: 'assets',
    });

    // Concatenate all CSS files into addon.css at build time
    this.concatCSSFiles();
  },

  concatCSSFiles() {
    const stylesDir = path.join(__dirname, 'addon/styles');
    const addonCssPath = path.join(stylesDir, 'addon.css');

    const cssFiles = [
      'dropdown.css',
      'fly-in.css',
      'navbar.css',
      'player-card.css',
    ];

    // Start with existing addon.css content (without the @import statements)
    let existingContent = fs.readFileSync(addonCssPath, 'utf8');

    // Remove any @import statements
    existingContent = existingContent.replace(/@import.*?;/g, '').trim();

    let concatenatedCSS = existingContent + '\n\n';

    // Append content from other CSS files
    cssFiles.forEach((file) => {
      const filePath = path.join(stylesDir, file);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        concatenatedCSS += `/* === ${file} === */\n${content}\n\n`;
      }
    });

    fs.writeFileSync(addonCssPath, concatenatedCSS);
  },
};
