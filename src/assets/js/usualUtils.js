/**
 * 注入js文件
 * @param {url} String 地址
 */
export function injectScript(url) {
  return new Promise((ret, rej) => {
    let fileSdk = document.createElement("script");
    fileSdk.type = "text/javascript";
    fileSdk.src = url;
    document.body.appendChild(fileSdk);

    fileSdk.onload = fileSdk.onreadystatechange = function () {
      if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
        ret(true);
      } else {
        rej(false);
      }
      fileSdk.onload = fileSdk.onreadystatechange = null;
    }
  })
}
/**
 * 【共用方法】设置cookie
 */
export function setCookie(name, value, hours) {
  var exp = new Date();
  exp.setTime(exp.getTime() + hours * 60 * 60 * 1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
/**
 * 【共用方法】读取cookie
 */
export function getCookie(name) {
  let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (document.cookie.match(reg)) {
    let arr = document.cookie.match(reg);
    return unescape(arr[2]);
  } else {
    return null;
  }
}
/**
 * 【共用方法】删除cookie
 */
export function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if(cval != null)
    document.cookie= name + "=" + cval + ";expires=" + exp.toGMTString();
}
