import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import glob from 'glob';
import { Compilation, Compiler } from 'webpack';

type Options = {
  js: string[];
  css: string[];
  dirPaths: string[];
};

class UpdateHashHtmlWebpackPlugin {
  js: string[] = [];
  css: string[] = [];
  options: Options = {
    js: [],
    css: [],
    dirPaths: [],
  };

  constructor(options: Options) {
    this.options = options;
  }

  apply(compiler: Compiler): void {
    compiler.hooks.compilation.tap('UpdateHashHtmlWebpackPlugin', (compilation: Compilation): void => {
      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync('filterFiles', (data, cb) => {
        this.js = data.assets.js;
        this.css = data.assets.css;

        if (this.options.dirPaths) {
          for (const dirPath of this.options.dirPaths) {
            const jsFilesInDir = glob.sync(dirPath + '/*.js');
            for (const jsFileInDir of jsFilesInDir) {
              this.js.push(path.basename(jsFileInDir));
            }
            const cssFilesInDir = glob.sync(dirPath + '/*.css');
            for (const cssFileInDir of cssFilesInDir) {
              this.css.push(path.basename(cssFileInDir));
            }
          }
        }

        const js: string[] = [];
        const css: string[] = [];

        for (const i of data.assets.js) {
          if (!/\w+\.\w+\.hot-update.\w+/.test(i)) continue;
          js.push(i);
        }

        for (const i of data.assets.css) {
          if (!/\w+\.\w+\.hot-update.\w+/.test(i)) continue;
          css.push(i);
        }

        data.assets.js = js;
        data.assets.css = css;

        cb(null, data);
      });

      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'updateHash', // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          console.log('UpdateHashHtmlWebpackPlugin.updateHash');
          // Manipulate the content
          let html = data.html;

          if (this.options.js.length > 0) {
            for (const i of this.options.js) {
              html = this.replaceHash(html, this.js, i);
            }
          }

          if (this.options.css.length > 0) {
            for (const i of this.options.css) {
              html = this.replaceHash(html, this.css, i);
            }
          }

          data.html = html;
          // Tell webpack to move on
          cb(null, data);
        }
      );
    });
  }

  replaceHash(html: string, files: string[], fileName: string): string {
    let regexpData = fileName.replace(/\./g, '\\.');
    regexpData = regexpData.replace(/\*/g, '.+');
    regexpData = `(${regexpData})$`;
    const regexp = new RegExp(regexpData);
    const file = files.find((i) => regexp.test(i));
    if (file !== undefined) {
      const matches = file.match(regexp);
      if (matches !== null) html = html.replace(fileName, matches[1]);
    }
    return html;
  }
}

export default UpdateHashHtmlWebpackPlugin;
