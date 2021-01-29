## Button 按钮

::: demo

```html
<template>
  <bl-button type="success">按钮</bl-button>
</template>
<script>
  export default {
    data() {
      return {};
    }
  };
</script>
```

:::

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type | 按钮类型 | string |primary, info, success, warning, danger | - |
| disabled | 按钮是否禁用 | boolean |- | false |
| icon | 按钮上图标名称 | string |- | - |
| icon-position | 图标在按钮的左右位置 | string|left, right | - |
| loading | 显示加载中图标 | boolean |- | false |
