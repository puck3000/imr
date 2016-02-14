$(function() {  


/*
 **********************
* Accordion
 **********************
*/

 

	var  sectionContent = $("section > article");
		sectionTrigger = $("section > h2");

// hide subdetails on load:

	$(sectionContent).hide();
	      
// give clicked subnav-link  activeNav class
	$(sectionTrigger).click(function(e) {
		e.preventDefault();
		$(this).next().slideToggle();

	});
	  



});
