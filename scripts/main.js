(function() {
	


	$('footer button').click(function() {
		var $this = $(this), 
				link = $('link'), 
				stylesheet = $this.data('file');
		console.log(stylesheet);
		link.attr('href', 'styles/' + stylesheet + '.css');
		$this
			.attr('disabled', 'disabled')
			.siblings('footer button')
				.removeAttr('disabled')
				.end();
		

		});
})();