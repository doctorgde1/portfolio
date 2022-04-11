const background_img = document.querySelector('.background-image');
let i = 0;

function call()
{
   background_img.setAttribute('src', `images/background_${i}.jpg`);
   i++;
   if(i > 6)
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