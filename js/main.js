(function ($) {

	// ~~~~~~~~~~~~~~~~~~~~~~~~ Assign Slots ~~~~~~~~~~~~~~~~~~~~~~~~~//

	var slots = [
					["mon10", "mon11", "mon12", "mon1"],
					["tue10", "tue11", "tue12", "tue1"],
					["wed10", "wed11", "wed12", "wed1"],
					["thu10", "thu11", "thu12", "thu1"],
					];

	// list of days, then time slots per day, then people per time slot

	var json = [[["Lorenzo Dela Cruz", "Julia Lu", "Darren Kim"], ["Taylor Wang", "Rishi Modi", "Abby Tan"], ["Yusuf Yamani", "Carl Qi", "Eric Wang"], ["Corey Gibbel", "Ryan Chiem", "Mia Karimabadi"]], [["Anthony Chen", "Max Larsen", "Eunice Cheung"], ["Nancy Chen", "Chloe Lin", "Junru Lyu"], ["Alex Park AP", "Jiyi Jung", "Max Wang"], ["Austin Kim", "Zen Thunparkkul", "Chris Ding"]], [["Hermes Ip", "Simran Regmi", "Alice Chen"], ["Ankur Singh", "Raina Yang", "Claire Yoon"], ["William Jiang", "Bryan Huang", "Keilyn Yuzuki"], ["Alan Dai", "Alex Park", "Kristina Lee"]], [["Jackie Hu", "Amit Pampati", "Matthew Huang"], ["Shaylene Liao", "Ciecie Chen", "Gurshaan Bariana"], ["Timothy Huang", "Tiffany Vo", "Vincent Tantra"], ["Caroline Chen", "Jacqueline Cai", "Jacqueline Zhang"]]];
		$.each(json, function(i) { // loops through each day
		$.each(this, function(j) { // loops through each time slot in each day
			var slot = slots[i][j];
			var slotclass = "ul" + slot;
			var slotobject = $("td." + slot);
			var temp = $("<ul/>").addClass(slotclass).appendTo(slotobject);
			var ul = $("ul." + slotclass);
			$.each(this, function() { // loops through each person in each time slot
				var li = $("<li/>").appendTo(ul);
	    		var a = $("<a/>").text(this).appendTo(li);
			});
		});
	});

	var hrefs = [$('.input_button').attr('href'), 'https://goo.gl/forms/XYqYQY3BmUsDlzHE3'];
	$(window).on('resize', function() {
		$('.input_button').attr('href', function() {
			return hrefs[$(window).width() > 737 ? 0 : 1];
		});
	}).trigger('resize');


	var hrefxs = [$('.swap_button').attr('href'), 'https://goo.gl/forms/WpOHMm5Ls3tIeEOM2'];
	$(window).on('resize', function() {
		$('.swap_button').attr('href', function() {
			return hrefxs[$(window).width() > 737 ? 0 : 1];
		});
	}).trigger('resize');


	// ~~~~~~~~~~~~~~~~~~~~~~~~~ Hover Animation ~~~~~~~~~~~~~~~~~~~~~~~~//
	"use strict";
	$('.column100').on('mouseover',function(){
		// this grabs the table to find the appropriate style to use
		var width = $(window).width();
		if (width > 760) {
			var table1 = $(this).parent().parent().parent();
			var table2 = $(this).parent().parent();
			var verTable = $(table1).data('vertable')+"";
			var column = $(this).data('column') + "";

			$(table2).find("."+column).addClass('hov-column-'+ verTable);
			$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
		}
	});

	$('.column100').on('mouseout',function(){
		var width = $(window).width();
		if (width > 760) {
			var table1 = $(this).parent().parent().parent();
			var table2 = $(this).parent().parent();
			var verTable = $(table1).data('vertable')+"";
			var column = $(this).data('column') + "";

			$(table2).find("."+column).removeClass('hov-column-'+ verTable);
			$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
		}
	});


})(jQuery);
