/* Fix_Height_In_Row by Krell1983.com*/
var Test_Height = 0;
var Max_Height = 0;

function Fix_Height_In_Row () {

$(".Fix_Grid_Height").each(function(){
   
    var Test_Height = 0;
    var Max_Height = 0; 
    
    //Test_DIV_Class = $(this).attr("class").split(' '); 
    //console.log(Test_DIV_Class);    
    //console.log('Max_Height:'+Max_Height);
    //console.log('Test_Height:'+Test_Height);
    
    $(this).find(".Fix_This_Height").each(function(){
      
        $(this).height('auto');
        Test_Height  = $(this).height();

        if(Max_Height < Test_Height){ Max_Height = Test_Height; }
        
        //Test_DIV_Class = $(this).attr("class").split(' ');
        //console.log(Test_DIV_Class);
        //console.log('Max_Height:'+Max_Height);
        //console.log('Test_Height:'+Test_Height);
        

    });
    
    
      $(this).find(".Fix_This_Height").each(function(){
          $(this).height(Max_Height);
      });

});

};


$(document).ready(function() {

    
$(window).resize(function() {
Fix_Height_In_Row ();
});
    
Fix_Height_In_Row ();
});



