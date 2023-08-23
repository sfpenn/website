const twig = require("@factorial/eleventy-plugin-twig");
const pluginPWA = require("eleventy-plugin-pwa-v2");

const twigOptions = {
  twig: {
    namespaces: {},
  },
  images: {},
  dir: {
    input: "src",
    output: "dist",
    watch: "src/**/*.{css,js,twig}",
  },
};

module.exports = (config) => {
  config.addPassthroughCopy({ 'public': './' })
  config.addPlugin(twig, twigOptions)
  config.addPlugin(pluginPWA)
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'twig',
  }
}
