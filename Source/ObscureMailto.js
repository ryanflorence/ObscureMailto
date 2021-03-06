var ObscureMailto = new Class({
	
	Implements: Options,
	
		options: {
			selector: 'a[href=mailto:]',
			at: '{at}',
			dot: '{dot}'
		},
	
	initialize: function(options){
		this.setOptions(options);
		this.links = $$(this.options.selector);
		this.links.each(function(link,index){
			var oldText = link.get('text');
			var newText = oldText.replace(this.options.at,'@').replace(this.options.dot,'.');
			link.set('text',newText).set('href','mailto:' + newText);
		}.bind(this));
	}
	
});