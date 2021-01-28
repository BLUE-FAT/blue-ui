function setFontSize(fontSize) {
  // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
  const scale =
    (document.documentElement.clientWidth || document.body.clientWidth) /
    1920;
  if (!scale) {
    return fontSize
  }
  // 设置页面根节点字体大小
  return fontSize * Math.min(scale, 3);
}

export default setFontSize