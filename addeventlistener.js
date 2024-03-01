
/* document.querySelectorAll("button").addEventListener("click",clicked); 
       here above we are not using () after the name of function .
                   ---> If we add it then before we click the button , itself the alert msg will be printed. 
                   ---> But here we wanted to happen action when the button is clicked .
                   ---> So we should not add () after function 
                   

function clicked()
{
    alert("You have clicked me");
}
*/
var noColors= document.querySelectorAll(" .paint").length;
for(var i=0;i<noColors;i++)
{
    document.querySelectorAll(" .paint")[i].addEventListener("click",function()
    {
        // alert("You have Clicked me");
        var audio=new Audio("ausiomp3.mp3");
        audio.play();
    });
}