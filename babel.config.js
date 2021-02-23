module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "blue-ui",
        libraryDirectory: "packages",
        styleLibraryDirectory: "packages/theme-chalk"
      }
    ]
  ]
};
