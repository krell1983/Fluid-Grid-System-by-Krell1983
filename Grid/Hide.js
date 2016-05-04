// old file from old version ingnore this ;).

$(document).ready(function() {
  
$( "h1 .Arrow_Up" ).hide();
$( "h1 .Arrow_Down" ).show();

$( "h1" ).click(function() {	
$(this).parent().find(".Hide").slideToggle(500);	

$(this).find(".Arrow_Up").slideToggle(0);
$(this).find(".Arrow_Down").slideToggle(0);

});        
    
});



var Total_Screen_Width=0;

/******SHOW*HIDE*PARTS******/
function ScreenTest (){       
    Total_Screen_Width =  window.innerWidth;

    if(Total_Screen_Width<600){ 
    
    $('.Menu_Block').hide(0);  
    $('.Menu_BG').hide(0);  
    $('.Mobile_Menu').show(0);
   
    }  

    
    if(Total_Screen_Width>=600){ 
    
    $('.Menu_Block').show(0);  
    $('.Menu_BG').show(0);  
    $('.Mobile_Menu').hide(0);
   
    }
   
    
    
}



$(document).ready(function(){

       $('.Mobile_Menu').click(function(){
        $('.Menu_BG').slideToggle(100); 
       });

ScreenTest ();
    $(window).resize(function() {
        ScreenTest ();
       
    }); 


  



});