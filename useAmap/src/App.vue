<template>
<div id="container"></div> 
</template>

<script>
export default {
  name: "App",
  data () {
    return {
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let map = new AMap.Map('container', {
        zoom:11,//地图范围级别
        center: [116.397428, 39.90923],//中心点坐标,
      });
      var marker = new AMap.Marker({
      position: new AMap.LngLat(116.39, 39.9),   
        // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: '北京'
      });

      // 将创建的点标记添加到已有的地图实例：
        map.add(marker);
    }
  }
}
</script>

<style lang="css" scoped>
  #container {width:600px; height: 600px; }  
</style>