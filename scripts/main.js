(function() {
	//Replace the current style sheet with the one that was selected
	$('footer button').click(function() {
		var $this = $(this), 
				stylesheet = $this.data('file'),
				change = $this.siblings('footer button').data('file'),
				link = $('link[href*="' + change + '"]');
		link.attr('href', 'styles/' + stylesheet + '.css');
		//Disable the button that was just selected, enable the opposite button
		$this
			.attr('disabled', 'disabled')
			.siblings('footer button')
				.removeAttr('disabled')
				.end();
		});
})();
