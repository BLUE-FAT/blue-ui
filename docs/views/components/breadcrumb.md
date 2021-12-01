## Breadcrumb 面包屑

::: demo

```html
<template>
  <bl-breadcrumb :breadList="breadList" />
</template>
<script>
  export default {
    data() {
      return {
        breadList: [
          { name: "一级导航", to: "/" },
          { name: "二级导航", click: () => this.$router.push("/") }
        ]
      };
    }
  };
</script>
```

:::

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| breadList | name:名称 to:路由地址 click:function | Array |- | [] |
