var icons = document.querySelectorAll(".fa-solid");
var answers = document.querySelectorAll(".answers");
for(let icon of icons)
{
    icon.addEventListener("click",(e)=>
    {
        let selected = e.target.parentNode;
        console.log(selected);
        let sib=selected.nextElementSibling;
        console.log(sib);
        sib.classList.toggle("displayblock");
        icon.classList.toggle("fa-arrow-up");
    })
}