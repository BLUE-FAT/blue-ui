## Container 布局容器

基础用法
::: demo

```html
<template>
  <bl-container title="详情"> 正文 </bl-container>
</template>
```

:::

取消标记
::: demo

```html
<template>
  <bl-container title="详情" :mark="false"> 正文 </bl-container>
</template>
```

:::

带面包屑
::: demo

```html
<template>
  <bl-container title="详情">
    <template #crumb>
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    正文
  </bl-container>
</template>
```

:::

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| title | 标题名称 | string | - | - |
| mark | 标记是否显示 | boolean |- | true |

<font size=5>插槽</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| default | 正文内容 | any | - | - |
| crumb | 面包屑 | string |- | - |
