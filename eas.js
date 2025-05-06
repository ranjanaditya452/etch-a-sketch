let mainCont = document.querySelector(".mainContainer");

for (let i=0;i<16;i++)
{ let smallCont = document.createElement("div");
    for (let j=0;j<16;j++)
    {
        let smallDiv = document.createElement("div");
        smallCont.append(smallDiv);
    }
    mainCont.append(smallCont);
}
