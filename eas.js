let mainCont = document.querySelector(".mainContainer");
mainCont.style.display="flex";
let choice=16;
function createGrid(choice){
for (let i=0;i<choice;i++)
{ let smallCont = document.createElement("div");
    for (let j=0;j<choice;j++)
    {
        let smallDiv = document.createElement("div");
        smallDiv.style.width= 800/choice +"px";
        smallDiv.style.height= 800/choice + "px";
        smallDiv.style.border= "1px solid black";
        smallCont.appendChild(smallDiv);

        smallDiv.addEventListener('mouseover',(event)=>
        {
            smallDiv.style.background=colorMe();
        })

    }
    mainCont.appendChild(smallCont);
}
}
function colorMe(){
    let ran = Math.floor(Math.random() * 3);

    if(ran===0)
    {
        return "red";
    }
    else if (ran ===1)
    {
        return "blue";
    }
    else if (ran===2)
    {
        return "green";
    }

}
createGrid(choice);
let resButton = document.querySelector(".btn");
resButton.addEventListener('click',(event)=>
{   mainCont.innerHTML= "";
    let cchoice = prompt("No of squares per side:");
    createGrid(cchoice);
})