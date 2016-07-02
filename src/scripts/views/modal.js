var tplModal=require('../templates/modal.string');

SPA.defineView('modal',{
	html: tplModal,	
	plugins: ['delegated'],
	bindActions: {
    'close': function () {
      this.hide();
    }
  }
})








