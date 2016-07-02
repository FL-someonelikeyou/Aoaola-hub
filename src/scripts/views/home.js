var tplHome = require('../templates/home.string');
SPA.defineView('home', {
  html: tplHome,
  //定义插件
  plugins: ['delegated',{
  	function(){
  		name:'avalon',
  		options:function(vm){
  			vm.more=[];
  		}
  	}
  }],
  //定义共有方法
  init:{
  	mySwiper:null,
  	//二维数组
//	FormatData:function(arr){
//		//console.log(arr);
//		var temArr=[];
//		for (var i=0;i<Math.ceil(arr.length/2);i++) {
//			temArr[i]=[];
//			temArr[i].push(arr[2*i]);
//			temArr[i].push(arr[2*i+1]);
//		}
//		return temArr;
//	}
  }
  //上拉加载更多
  bindEvents:{
  	'beforeShow':function(){
  		var that=this;
  		//获得vm对象
  		that.vm=that.getVM();
  		$.ajax({
  			type:'get',
  			url:'/Aoaola1/mock/livelist.json',
  			data:{
  				rtype:'refresh'
  			},
  			success:function(rs){
  				vm.more=rs.data.content;
//				vm.more=that.formatData(rs.data);
  			}
  		});
  	},
  	'show':function(){
  		
  	}
  }
});