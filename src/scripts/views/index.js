var tplIndex=require('../templates/index.string');

SPA.defineView('index', {
  html: tplIndex,
  plugins: ['delegated'],
  //lunbo
  bindEvents: {
    show: function () {
      var mySwiper = new Swiper('#guide-swiper', {
        loop: true,
        autoplay:1000,
		//分页器
				pagination: '.swiper-pagination'
      });
    }
  },

  // 定义子视图
 modules: [{
    name: 'content', // 子视图的名字，用作后边引用的句柄
    views: ['home1','search','warn','my'], // 定义子视图的列表数组
    defaultTag: 'home1', // 定义默认视图
    container: '.m-nav' // 子视图的容器
  }],


 	// 绑定tab事件
  bindActions: {
  	'tap.slide':function(e,data){
  		//console.log(e)
  		//console.log(data)
  		$(e.el).addClass('active').siblings().removeClass('active');
  		this.modules.content.launch(data.tag);
  	}
  }
});
