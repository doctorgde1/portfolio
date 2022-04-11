const background_img = document.querySelector('.background-image');
let i = 0;
let Orientation = "horizontal";

function call()
{
   if(window.innerHeight > window.innerWidth)
   {
       Orientation = "vertical";
   }
   else
   {
        Orientation = "horizontal";
   }
   background_img.setAttribute('src', `images/${Orientation}/background_${i}.jpg`);
   i++;
   if(i > 4)
   {
       i = 0;
   }
}


function loop()
{
    setTimeout(loop, 3000);
    call();
}

loop();