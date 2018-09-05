
$(document).ready(function(){
    $('.collapsible').collapsible();
  });

$(document).ready(function(){
	$('.sidenav').sidenav();
 });

  $(document).ready(function(){
    $('.parallax').parallax();
});

  $(document).ready(function(){
    $('.slider').slider();
});

 $(document).ready(function(){
 	$('#Servicos').click(function(){
 		if($("#subservicos").is(':visible')){
 			$("#subservicos").hide("slow")
 		}else{
 			$("#subservicos").show("slow")
 		}
 	});
 	
 	
 });