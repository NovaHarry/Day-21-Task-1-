var maindiv = document.createElement('div');
maindiv.classList.add('maindiv','container-fluid','text-center','my-0' );
document.body.append(maindiv);

var subdiv = document.createElement('div');
subdiv.classList.add('subdiv');
maindiv.append(subdiv);

var header = document.createElement('div');
header.classList.add('header');
subdiv.append(header);

var headerimage = document.createElement('img');
headerimage.classList.add("img-fluid","headerimg");
headerimage.setAttribute('src',`./Header.png`);
header.append(headerimage);

var title = document.createElement('h2');
title.classList.add("title");
title.innerText = "ova";
header.append(title);

var rows = document.createElement('div');
rows.classList.add("row");
maindiv.append(rows);

var res = document.querySelector('select');


var searchbar = document.querySelector('.input-group');
subdiv.append(searchbar);

var searchvalue = document.querySelector('.searchbar');
var searchbutton = document.querySelector('.searchbutton');

searchbutton.addEventListener("click",(e)=>{
       
    function searchwords(){
     localStorage.setItem("resolution",res.value);
     localStorage.setItem("search",searchvalue.value);
     return false;
    }
    searchwords();
})

let categories = ["Wallpaper", "3D Renders", "Travel", "Nature", "Street Photography", "Experimental", "Textures & Patterns", "Animals", "Architecture & Interiors", "Fashion & Beauty", "Film", "Food & Drink", "People", "Spirituality", "Business & Work", "Athletics", "Health & Wellness", "Current Events", "Arts & Culture"];


for(let i of categories){

    var cols = document.createElement('div');
    cols.classList.add("col-lg-2","col-md-6",'cols');
    rows.append(cols);

    var cards = document.createElement('div');
    cards.classList.add("hg","my-2");
    cols.append(cards);

    var aTag = document.createElement('a');
    aTag.setAttribute("href", "./images.html");
    aTag.classList.add("aTag");
    aTag.innerText=i;
    cards.append(aTag);

    var image = document.createElement('img');
    image.classList.add("img-fluid","images");
    image.setAttribute('src',`./images/${i}.jpg`);
    aTag.appendChild(image);    

    aTag.addEventListener("click",(e)=>{
       
       function searchwords(){
        var btns = e.currentTarget.innerText;
        localStorage.setItem("resolution",res.value);
        localStorage.setItem("search",btns);
        return false;
       }
       searchwords();
       
    })
    

}

    