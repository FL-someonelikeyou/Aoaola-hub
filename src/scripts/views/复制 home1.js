var tplHome1 = require('../templates/home1.string');
SPA.defineView('home1', {
  html: tplHome1,

  plugins:['delegated',{
    name:'avalon',
    options:function(vm){
      vm.livelist = [];
    }
  }],
 init :{
   vm :null,
   homeSwiper: null,
   homeHotSwiper: null,
   livelistArray:[],
   formatData: function(arr){
        var tempArr = [];
        for (var i= 0;i<Math.ceil(arr.length);i++){
            tempArr[i] = [];
            tempArr[i].push(arr[i]);
        }
        return tempArr;
      }
 },
  bindEvents:{
     'beforeShow': function () {
      var that = this;

      // 获得vm对象
      that.vm = that.getVM();

      $.ajax({
        url: '/api/getLivelist.php',
        type: 'get',
        data:{
          rtype: 'origin'
        },
        success: function (rs) {
        	console.log("1");
          that.livelistArray = rs.data;
          that.vm.livelist = rs.data;
        }
      });
    },
  'show':function(){
    var that = this;
    
		var mySwiper1 = new Swiper('#guide-swiper', {
		        loop: true,
		        autoplay:1000,
				//分页器
						pagination: '.swiper-pagination'
		      });
		    
  
    /*var scrollSize = 30;
          var myScroll = this.widgets.homeHotScroll;
          myScroll.scrollBy(0,-scrollSize);

          myScroll.on('scroll',function(){
                 var y = this.y,
                 maxY = this.maxScrollY - y;


          });
          myScroll.on('scrollEnd',function(){

            // if(this.y>= -scrollSize  && this.y<0){
            //   myScroll.scrollTo(0, -scrollSize);
            // }
             var maxY = this.maxScrollY-this.y;
             var self = this;
             if(maxY > -scrollSize && maxY<0){
                 myScroll.scrollTo(0, self.maxScrollY + scrollSize);
             }else if (maxY >=0){
               $.ajax({
                  url:'/Aoaola1/mock/livelist-more.json',
                  //  url:'/api/getLivelist.php',
                   data:{
                     rtype:'more'
                   },
                   success:function(rs){
                    
                        var newArray = that.livelistArray.concat(rs.data);
                        that.vm.livelist = newArray;
                        that.livelistArray = newArray;
                   }
               });

             }



          })*/



  }



















}

});
