$(".sideNav i").click(function(){
    $(".sideNavOpt").toggle(400);
     $(".instruction").toggle();
    $(".addNote, .delNote ").toggle();
})

/////////////////// hiding navbar //////////////////////////////////////////
   
$(window).scroll(function(){
    var wScrol = $(window).scrollTop();

if(wScrol>60)
    {
        $(".navy").fadeOut(200)
    }
    else
        {
             $(".navy").fadeIn(200)
        }
})

/////////////////////////////////////////////////////////////

$(".bgCol ul li").eq(1).css("backgroundColor","blue")
$(".bgCol ul li").eq(2).css("backgroundColor","yellow")
$(".bgCol ul li").eq(3).css("backgroundColor","green")

$(".fontCol ul li").eq(0).css("backgroundColor","black")
$(".fontCol ul li").eq(1).css("backgroundColor","gray")
$(".fontCol ul li").eq(2).css("backgroundColor","white")
$(".fontCol ul li").eq(3).css("backgroundColor","firebrick")

/////// Add new note ////////////////////

let x = ` <div class="note py-2 pl-2">
 <textarea ></textarea><span class=" myDel"><i class="far fa-times-circle"></i></span></div>`;
   
var notes = document.getElementsByClassName("note")
    
$(".addNote i").click(function () { 
    $('#myNote').append(x);
    $( ".note " ).draggable();
    
    $(".addNote i").each(function(){
    $(".myDel i").click(function(){
            $(this).parentsUntil($("#myNote")).remove();
         });
    });
    
  ///// making the active note on the top/////
    
var notes = document.getElementsByClassName("note");
    for(var i=0 ; i<notes.length ; i++)
        {
          notes[i].addEventListener("mousedown",function()
                                    {
          var current = document.getElementsByClassName("active");
                                   
               if(current.length >0)
                   {
   current[0].className = current[0].className.replace(" active", "");

                   }
          this.className += " active";
                                    }) 
            
        }
  
}); 

//customization the notes

$(".bgCol ul li").click(function(){
    let bg = $(this).css("backgroundColor")
    $("textarea").css("backgroundColor",bg)
})


$(".fontCol ul li").click(function(){
    let fonty = $(this).css("backgroundColor")
    $("textarea").css("color",fonty)
})