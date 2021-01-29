module.exports = {
  base: "/blue-ui/",
  title: "Blue UI",
  description: "Blue UI",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        title: "开发指南",
        collapsable: true,
        children: ["views/guide/install.md", "views/guide/get-started.md"]
      },
      {
        title: "组件",
        collapsable: true,
        children: ["views/components/basic/"]
      }
    ]
  }
};
