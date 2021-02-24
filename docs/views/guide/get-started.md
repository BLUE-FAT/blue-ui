---
title: "快速上手"
---

# 快速上手

### 完整引入

在 main.js 中写入：

```js
import BlueUI from "@blue_fat/blue-ui";
import "@blue_fat/blue-ui/lib/blue-ui.css";
Vue.use(BlueUI);
```

### 按需引入

首先，安装 babel-plugin-import：

```
npm install babel-plugin-import -D
```

然后，将 .babelrc 修改为：

```
{
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "@blue_fat/blue-ui",
        libraryDirectory: "packages",
        styleLibraryDirectory: "packages/theme-chalk"
      }
    ]
  ]
}

```

接下来，如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容：

```js
import { Title } from "@blue_fat/blue-ui";
Vue.use(Title);
```

### 使用方式

```vue
<template>
  <div id="app">
    <bl-title title="详情" />
  </div>
</template>
```
