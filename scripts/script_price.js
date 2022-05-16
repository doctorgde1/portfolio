const cursor = document.querySelector(".price-card__cursor");
const card = document.querySelectorAll(".price-card__link");


if(window.innerWidth > 900)
{
    card.forEach(element => {
        element.addEventListener("mousemove", (e) =>
        {
            let x = e.pageX;
            let y = e.pageY;
            
            cursor.style.top = y + "px";
            cursor.style.left = x + "px";
            cursor.style.display = "block";
        });
    });
    
    document.addEventListener("scroll", () =>
    {
        cursor.style.display = "none"; 
    });
    
    
    
    card.forEach(element => {
        element.style.cursor = "none";
        element.addEventListener("mouseout", ()=>
            {
                cursor.style.display = "none"; 
            });
    });
}