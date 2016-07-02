var tplWarn = require('../templates/warn.string');

SPA.defineView('warn', {
	html: tplWarn,
	//绑定tab切换插件
	plugins: ['delegated'],

	//初始化一些数据,定义一些共用的
	init: {
		mySwiper: null
	},

	//tab切换
	bindActions: {
		'warn.slide': function(e, data) {
			//console.log(e)
			//console.log(data)
			//变class颜色
			$(e.el).addClass('active').siblings().removeClass('active');
			this.mySwiper.slideTo($(e.el).index());
		},
		//模态窗
		'modal':function(){
			SPA.open('modal',{
				ani:{
					name:'actionSheet',
					distance:-1
				}
			})
		}

	},

	//swiper切换
	bindEvents: {
		show: function() {
			this.mySwiper = new Swiper('#warn-swiper', {
				loop: false,
				onSlideChangeStart: function(swiper) {
					var index = swiper.activeIndex;
					var $lis = $('section ul li');
					$lis.eq(index).addClass('active').siblings().removeClass('active');
				}
			})
		}
	}
	


});















//SPA.defineView('home',{
//	html: tblHome,
//	plugins: ['delegated'], 
//	init: {
//		mySwiper:null
//	},
//	bindActions: {
//	    'active': function (e) {
//	    	//console.log(e)
//	        // 视图切换
//	        $(e.el).addClass('active').siblings().removeClass('active');//变色
//	    	 this.mySwiper.slideTo($(e.el).index());//切换
//		}
//	},
//	bindEvents: {
//  'show': function () {
////  	var mySwiper = new Swiper ('#swiper', {
////			    loop: true,
////			    autoplay: 3000,
////			    // 如果需要分页器
////			    pagination: '.swiper-pagination'
////		   });  
//	    this.mySwiper = new Swiper('#sectSwiper', {
//	        loop: false,
//	        onSlideChangeStart: function (swiper) {
//	          var index = swiper.activeIndex;
//	          var $lis = $('.home nav li');
//	          $lis.eq(index).addClass('active').siblings().removeClass('active');
//	        }
//	      })
// 		}
//	}
//});
