(function() {
	$('footer button').click(function() {
		var $this = $(this), 
				stylesheet = $this.data('file'),
				change = $this.siblings('footer button').data('file'),
				link = $('link[href*="' + change + '"]');
		link.attr('href', 'styles/' + stylesheet + '.css');
		$this
			.attr('disabled', 'disabled')
			.siblings('footer button')
				.removeAttr('disabled')
				.end();
		});
})();
