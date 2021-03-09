/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - whether the config is for a plugin command or an asset
 **/
module.exports = function(config, isPluginCommand) {
    /** you can change config here **/
    devtool: false;
}