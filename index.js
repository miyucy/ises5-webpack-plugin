const Acorn = require("acorn");

class IsES5Plugin {
  constructor(options = {}) {
    this.options = {
      ecmaVersion: options.ecmaVersion || 5
    };
  }

  apply(compiler) {
    compiler.hooks.compilation.tap("IsES5Plugin", compilation => {
      compilation.hooks.afterOptimizeAssets.tap("IsES5Plugin", assets => {
        Object.keys(assets).forEach(chunkName => {
          if (chunkName.endsWith(".js")) {
            const cachedSource = assets[chunkName];
            const source = cachedSource.source();
            try {
              Acorn.parse(source, { ecmaVersion: this.options.ecmaVersion });
            } catch (err) {
              if (err instanceof SyntaxError) {
                compilation.errors.push(new IsES5Error(chunkName, err, source));
              } else {
                compilation.errors.push(err);
              }
            }
          }
        });
      });
    });
  }
}

class IsES5Error {
  constructor(chunkName, acornSyntaxError, source) {
    this.name = "IsES5Error";
    this.message = `${chunkName}: ${acornSyntaxError.message}`;
    this.details = this.generateDetails(source, acornSyntaxError.loc);
    this.err = acornSyntaxError;
  }

  generateDetails(source, loc) {
    const line = loc.line;
    const column = loc.column;
    const sourceLines = ["", ...source.split("\n"), ""];
    const results = [];

    if (line - 1 >= 0) {
      results.push(sourceLines[line - 1]);
    }
    results.push(sourceLines[line]);
    results.push("^".padStart(column + 1, " "));
    if (line + 1 < sourceLines.length) {
      results.push(sourceLines[line + 1]);
    }
    return results.join("\n");
  }
}

module.exports = IsES5Plugin;
