export function isWxBrowser() {
  const ua = window.navigator.userAgent.toLowerCase()
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    return true
  }else{
    return false
  }
}
