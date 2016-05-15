$(function(){
	$('#contenedor img').on({
		mouseover: function(){
			$(this).css({
				'cursor': 'pointer',
				'border-color': 'red'
			});
		},
		mouseout: function(){
			$(this).css({
				'cursor': 'default',
				'border-color': 'grey'
			});
		},
		click: function(){
			var UrlImage = $(this).attr('src');
			$('#principal').fadeOut(300, function(){
				$(this).attr('src', UrlImage);
		}).fadeIn(300);
	}	
	});
	$('.open').click(function(){
		$('#bggaleria').fadeIn(300);
	});
	$('.close').click(function(){
		$('#bggaleria').fadeOut(300);
	});	
});
