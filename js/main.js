(function ($) {

	// ~~~~~~~~~~~~~~~~~~~~~~~~ Assign Slots ~~~~~~~~~~~~~~~~~~~~~~~~~//

	var slots = [
					["mon10", "mon11", "mon12", "mon1"],
					["tue10", "tue11", "tue12", "tue1"],
					["wed10", "wed11", "wed12", "wed1"],
					["thu10", "thu11", "thu12", "thu1"],
					];

	// list of days, then time slots per day, then people per time slot

	var json = [[["Nicholas Paul", "Max Larsen", "Guneesha Sawhney", "Sehee Park"], ["Cynthia Luan", "Shalandy Zhang", "Jackie Cai", "Hermes Ip"], ["Max Wang", "Samantha Fang", "Ellie Min", "Ryan Rashid"], ["Carl Qi", "Jeremy Mui", "Claire Yoon", "Kira Guo"]], [["Alan Dai", "Michelle Lin", "Yookyeong Kim"], ["Kristy Kao", "Brenton Law", "Junru Lyu", "Dylan Asprer"], ["Austin Kim", "Vincent Chiang", "Riddhi Bagadiaa"], ["Rena Song", "Stella Kim"]], [["Anthony Chen", "Zen Thunparkkul", "Emily Jin", "Kate Ngo"], ["Caroline Chen", "Kai Chen", "Jennie Kim", "Roger Zhang"], ["Alice Chen", "Carrington Park", "Henry Cheong", "Tiffany Chung"], ["Abby Tan", "Arash Nassirinia", "Ria Verma", "Rachit Pareek"]], [["Corey Gibbel", "James Tang", "Lucy Liu", "Charles Van"], ["Darren Kim", "Grace Chi", "Jessica Wang", "Lisa Son"], ["Jackie Hu", "Emily Zhu", "Conor Richard"], ["William Jiang", "Jessica Li", "Janathan Zhao"]]];		
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

	var hrefs = [$('.input_button').attr('href'), 'https://docs.google.com/forms/d/e/1FAIpQLSfpjEQZYNVwTj3U3LycqvpxaQKfOiuZ9NTwL7V1LxkXksCqCA/viewform?usp=sf_link'];
	$(window).on('resize', function() {
		$('.input_button').attr('href', function() {
			return hrefs[$(window).width() > 737 ? 0 : 1];
		});
	}).trigger('resize');


	var hrefxs = [$('.swap_button').attr('href'), 'https://goo.gl/forms/DuxofkysDX9ftS7q2'];
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
