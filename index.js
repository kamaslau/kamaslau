window.onload = () => {
  // 输出UserAgent
  const userAgent = navigator.userAgent
  document.getElementById('useragent').innerText =
    '快速测试信息 ' + '\r\n' + userAgent

  // 微信业务
  /*
  if (userAgent.indexOf('MicroMessenger') > -1) {
    document.getElementById('useragent').innerText += ' is_wechat'

    wechat_init()
  }
  */

  // 百度统计
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?505c5a119bad835c9abbcbae864276dc'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
}
    

    // 页首组件
    const Header = {
      data() {
        return {
          working: false,
          status_style: 'color:#90a4ae'
        }
      },

      mounted() {
        this.renew_status()

        setInterval(() => {
          // 每隔一分钟获取当前小时数，并相应更新页首电话号码部分中工作状态
          this.renew_status()
        }, 1000 * 60)
      },

      methods: {
        renew_status() {
          const hour = new Date().getHours()
          this.working = hour > 12 && hour < 24
          this.status_style = 'color:' + (this.working ? 'green' : '#90a4ae')
          //console.log(hour, this.working)
        }
      }
    }
Vue.createApp(Header).mount('#header')
    