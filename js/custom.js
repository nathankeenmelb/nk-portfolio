jQuery(document).ready(function(){
	jQuery('#code-ecommerce2').keyup(function() { 
		var quantity = jQuery("#quantity-ecommerce2").val(); 
		var price = jQuery("#item_price-ecommerce2").val(); 
		var total = quantity * price * 0.01; 
		jQuery("#total_price-ecommerce2").val(total); 
	}); 
});