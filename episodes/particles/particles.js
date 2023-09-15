// source https://codepen.io/Souleste/pen/wvvjZvx
// modified by Slavlend

$.fn.boom = function(e, offset) {
	if (offset == -20)
	{
		var colors = [
			'#5A3A3A',
			'#341A1A',
			'#611A1A',
			// '#FFD100',
			// '#FF9300',
			// '#FF7FA4'
		];
	}
	if (offset == 83)
	{
		var colors = [
			'#FF7E4E',
			'#FF5413',
			'#FF4646',
			// '#FFD100',
			// '#FF9300',
			// '#FF7FA4'
		];		
	}
	var shapes = [
		'<path class="circle" d="m 20 1 a 1 1 0 0 0 0 25 a 1 1 0 0 0 0 -25"></path>'
	];

	var btn = $(this);
	var group = [];
	var num = 20;

	for(i = 0; i < num; i++) {
		var randBG = Math.floor(Math.random() * colors.length);
		var getShape = Math.floor(Math.random() * shapes.length);
		var c = 5;
		var scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
		var x = Math.floor(Math.random() * (10 + 75)) + offset;
		var y = Math.floor(Math.random() * (10 + 75)) - 95;
		var sec = Math.floor(Math.random() * 1700) + 1000;
		var cir = $('<div class="cir"></div>');
		var shape = $('<svg class="shape">'+shapes[getShape]+'</svg>');
		
		shape.css({
			top: e.pageY - btn.offset(),
			left: e.pageX - btn.offset(),
			'transform': 'scale(0.'+scale+')',
			'transition': sec + 'ms',
			'fill': colors[randBG]
		});

		btn.siblings('.btn-particles').append(shape);

		group.push({shape: shape, x: x, y: y});
	}
	
	for (var a = 0; a < group.length; a++) {
		var shape = group[a].shape;
		var x = group[a].x, y = group[a].y;
		shape.css({
			left: x + 0,
			top: y + 0,
			'transform': 'scale(0)'
		});
	}
	
	setTimeout(function() {
		for (var b = 0; b < group.length; b++) {
			var shape = group[b].shape;
			shape.remove();
		}
		group = [];
	}, 2000);

}	

$(function() {
	$(document).on('click', '.btn', function(e) {
		$(this).boom(e, -20);
	});
	$(document).on('click', '.btn2', function(e) {
		$(this).boom(e, 83);
	});
});


