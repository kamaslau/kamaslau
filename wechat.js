const weconfig = {
  appid: 'wx8102f428f22a5a56',
  appsecret: '520d7aecf5ee3260a0bfcb7c86a5bed5',
  nonceStr: 'jklj;afdojipagehzzv=',
  timestamp: parseInt(+new Date() / 1000),
}

// const wesdk = document.createElement('script')
// wesdk.src = 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js'
// document.getElementsByTagName('head')[0].appendChild(wesdk)

// 初始化微信业务
const wechat_init = async () => {

  // 获取access_token（必须通过服务端进行请求，且应进行缓存最高7200秒）
  const get_token = async () => {
    let api_url = 'https://api.imakp.liuyajie.com/wechat/access_token'
    let result = await api_request(
      api_url, {
        appid: weconfig.appid,
        appsecret: weconfig.appsecret
      }
    )
    return result['content']['access_token']
  }
  const access_token = await get_token()

  // 获取jsapi_ticket（必须通过服务端进行请求，且应进行缓存最高7200秒）
  const get_ticket = async () => {
    let api_url = 'https://api.imakp.liuyajie.com/wechat/jsapi_ticket'
    let result = await api_request(
      api_url, {
        appid: weconfig.appid,
        appsecret: weconfig.appsecret
      }
    )
    return result['content']['jsapi_ticket']
  }
  const jsapi_ticket = await get_ticket()

  // 计算签名
  let wesign = ''
  const wesign_params = {
    jsapi_ticket,
    noncestr: weconfig.nonceStr,
    timestamp: weconfig.timestamp,
    url: window.location.href.indexOf('#') > -1 ? window.location.href.slice(0, window.location.href.indexOf('#')) : window.location.href,
  }
  Object.keys(wesign_params).forEach((item, index) => {
    wesign += item + '=' + wesign_params[item]
    if (index < Object.keys(wesign_params).length - 1) wesign += '&'
  })
  wesign = sha1(wesign)

  // 注入配置
  wx.config({
    // 暂时关闭调试
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: weconfig.appid, // 必填，公众号的唯一标识
    nonceStr: weconfig.nonceStr, // 必填，生成签名的随机串
    timestamp: weconfig.timestamp, // 必填，生成签名的时间戳
    signature: wesign, // 必填，签名
    jsApiList: [
      'updateAppMessageShareData',
      'updateTimelineShareData'
    ] // 必填，需要使用的JS接口列表
  })

  // 具体微信业务
  wx.ready(function () {
    console.log('wx: ', wx)

    wx.updateAppMessageShareData({
      title: '刘亚杰',
      desc: '推荐一位技术专家，小程序、公众号、APP、网站、程序员猎头就找他！',
      link: 'https://www.liuyajie.com/',
      imgUrl: '/images/portrait.jpg',
      success: () => console.log('分享给朋友 设置成功')
    })

    wx.updateTimelineShareData({
      title: '刘亚杰',
      link: 'https://www.liuyajie.com/',
      imgUrl: '/images/portrait.jpg',
      success: () => console.log('分享给朋友 设置成功')
    })
  })

}