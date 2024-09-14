let i = 0;

/**
 * @param condition {(file: string) => boolean}
 * @param plugin {import('postcss').Plugin}
 * @returns import('postcss').Plugin
 */
module.exports.conditionalPlugin = function (condition, plugin) {
    return {
        postcssPlugin: `conditional-${++i}-${plugin.postcssPlugin}`,
        prepare(result) {
            if (condition(result.opts.from)) {
                return 'prepare' in plugin ? {...plugin, ...plugin.prepare(result)} : plugin;
            }

            return {};
        },
    };
};
