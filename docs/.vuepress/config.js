module.exports = {
  base: "/blue-ui/",
  title: "Blue UI",
  description: "Blue UI",
  // head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        title: "开发指南",
        collapsable: false,
        children: ["views/guide/install.md", "views/guide/get-started.md"]
      },
      {
        title: "组件",
        collapsable: false,
        sidebarDepth: 0,
        children: ["views/components/container", "views/components/title", "views/components/echarts"]
      }
    ]
  },
  head: [
    ["script", { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" }]
  ],
  plugins: ["demo-block"]
};
