$(function() {  


/*
 **********************
* Accordion
 **********************
*/

 

    var  sectionContent = $(section > p);
    	sectionTrigger = $(section > h2);

// hide subdetails on load:

      $(sectionContent).hide();
      



// give clicked subnav-link  activeNav class
  $(sectionTrigger).click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
  
});