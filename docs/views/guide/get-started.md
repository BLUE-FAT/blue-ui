---
title: "快速上手"
---

# 快速上手

```js
// 全局注册
import BlueUI from "blue-ui";
import "blue-ui/lib/blue-ui.css";
Vue.use(BlueUI);

// 按需注册
import { Button } from "blue-ui";
Vue.use(Button);
```

```vue
// 全局注册
<template>
  <div id="app">
    <bl-button type="primary">点击报名</-button>
  </div>
</template>

<script>
export default {};
</script>
```
