//index.js
//获取应用实例

Page({
  data: {
    log:0,
    lat:0,
    conts:[],
    markers:[]   
  },
  
  onLoad: function () {
    var that=this;
    wx.getLocation({
      type:'gcj02',
      success: function(res) {
        that.setData({log:res.longitude,
        lat:res.latitude
        })
      },
    })
    wx.getSystemInfo({
      success: function(res) {
        var windowHeight=res.windowHeight;
        var windowWidth=res.windowWidth;
        that.setData({
          conts: [
            {
              id: 1,
              iconPath: '/images/scancode.png',
              position: {
                width: 165,
                height: 54,
                left: windowWidth / 2 - 164 / 2,
                top: windowHeight - 80
              },
              clickable: true
            },
            {
              id:2,
              iconPath:'/images/backloc.png',
              position:{
                width:24,
                height:24,
                left:12,
                top:windowHeight-36
              },
              clickable: true
            },
            {
              id: 3,
              iconPath: '/images/location.png',
              position: {
                width: 27,
                height: 34,
                left: windowWidth/2-13,
                top: windowHeight/2 - 34,
              },
              clickable: true
            },

            {
              id: 4,
              iconPath: '/images/addbike.png',
              position: {
                width: 30,
                height: 30,
                left: 13,
                top: 13,
              },
              clickable: true
            },

          ]
          
        })
      },
    })
    
    
  },
  controlTap:function(e){
    var cid=e.controlId;
    switch(cid){
      case 1:{
        //scancode
      }
      case 2:{
        this.mapCtx.moveToLocation()
      }
      case 3:{
        //nothing
      }
      case 4:{
        //addbike
        var that=this;
        var bikes=that.data.markers;
        this.mapCtx.getCenterLocation({
          success:function(res){
            bikes.push({
              iconPath: '/images/bikemark.png',
              width: 28,
              height: 28,
              longitude: res.longitude,
              latitude: res.latitude
            })
            that.setData({
              markers: bikes
            })
          }
        })
        
      }
    }
    
  },
  regionChange:function(e){
  },
  onReady:function(){
    this.mapCtx=wx.createMapContext("initMap");
  }
 
})
