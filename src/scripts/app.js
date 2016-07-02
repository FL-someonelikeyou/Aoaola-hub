//引入类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
//require('./lib/iscroll-probe.js');
//引入views
require('./views/guide.js');
//require('./views/home.js');
require('./views/home1.js');
require('./views/my.js');
require('./views/search.js');
require('./views/warn.js');
require('./views/modal.js');
require('./views/index.js');

//设置引导页先显示
SPA.config({
  indexView: 'guide'
});
