var tplHome1 = require('../templates/home1.string');

SPA.defineView('home1', {
  html: tplHome1,
//引入插件：table切换  和 avalon
  plugins:['delegated',{
    name:'avalon',
    options:function(vm){
      vm.livelist = [];
      //console.log(vm)
    }
  }],
  
 init :{
   vm :null,
   livelistArray:[],
 },
 
  bindEvents: {
    'beforeShow': function () {
      var that = this;
    // 获得vm对象
      that.vm = that.getVM();
      //console.log(that.vm)
      $.ajax({
        url: '/api/getLivelist.php',
        type: 'get',
        data:{
          rtype: 'origin'
        },
        success: function (rs) {
        	//console.log(rs)
        	//console.log(rs.data.content);
          that.livelistArray = rs.data.content;
          that.vm.livelist = rs.data.content;
        }
      });
    },

    'show': function () {
      var that = this;
    //seiper轮播
			var mySwiper1 = new Swiper('#guide-swiper', {
		        loop: true,
		        autoplay:1000,
				//分页器
						pagination: '.swiper-pagination'
		      });
//		  
//		  var scrollSize = 30;
//	      var myScroll = this.widgets.homeHotScroll;
//	      myScroll.scrollBy(0,-scrollSize);
//	
//	      myScroll.on('scroll',function(){
//	             var y = this.y,
//	             maxY = this.maxScrollY - y;
//	
//	
//	      });
//	      myScroll.on('scrollEnd',function(){
//	
//	        // if(this.y>= -scrollSize  && this.y<0){
//	        //   myScroll.scrollTo(0, -scrollSize);
//	        // }
//	         var maxY = this.maxScrollY-this.y;
//	         var self = this;
//	         if(maxY > -scrollSize && maxY<0){
//	             myScroll.scrollTo(0, self.maxScrollY + scrollSize);
//	         }else if (maxY >=0){
//	           $.ajax({
//	              //url:'/Aoaola1/mock/livelist-more.json',
//	              url:'/api/getLivelist.php',
//	               data:{
//	                 rtype:'more'
//	               },
//	               success:function(rs){
//	                
//	                    var newArray = that.livelistArray.concat(rs.data.content);
//	                    that.vm.livelist = newArray;
//	                    that.livelistArray = newArray;
//	               }
//	           });
//	
//	         }
//        })
    }
  }

});
