// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () {

	//$('.quantity').val('Put number!');

	$('.add-to-cart-button').click(function () {

		var quantity_text_box = $(this).siblings('.quantity');
		var value = quantity_text_box.val();

		var value_int = parseInt(value);
		var product_id = //Code here

		if (value_int > 0) {

			// Make AJAX call
			$.post('/store/add_cart', {

				quantity : value_int
				product_id : product_id

			});

		} else {
			alert(value + ' is not a number. Please type a number');

		}

	});
/*
$('.add-to-cart-button').mouseover(function () {

		alert('You are over me!');

	});
*/
});