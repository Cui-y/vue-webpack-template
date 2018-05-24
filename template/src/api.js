/**
 * 将通信使用的API统一放在这里进行管理
 */

// 当生产环境下需要加前缀时

const prefix = window.__CONFIG__.apiPath
export default ((apis) => {
  return Object.keys(apis).reduce((copyObj, name) => {
    copyObj[name] = `${prefix}${apis[name]}`
    return copyObj
  }, {})
})({
  // 示例, 可以被删除
  'example': '/api/v1/example/info'
})
