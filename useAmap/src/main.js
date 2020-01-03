import Vue from 'vue'
import App from './App'
import VueAMap from 'vue-amap'
Vue.config.productionTip = false
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '7950bdefb4f2e495a368ee0be378f975',  //之前在高德上申请的ID
  plugin: ['AMap.Geolocation','AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']  //地图需要使用的组件，根据实际情况可做增减
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
