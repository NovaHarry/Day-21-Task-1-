var cont = document.querySelector('.container-fluid');

var cols = document.createElement('div');
cols.classList.add('cols','my-1');
cont.append(cols);

var subdiv = document.createElement('div');
subdiv.classList.add("sub1");
cont.append(subdiv);

var LoadMore = document.createElement('button');
LoadMore.classList.add("LoadMore");
LoadMore.innerText = "Load More";
subdiv.append(LoadMore);


var page = 1;
var resolution = localStorage.getItem("resolution");

for(let j = 1; j < 4; j++){
    
    var search = localStorage.getItem("search");
    
    let API_key = "p8pWL6LpXGvGQVPsU0q6VzRud5_88L6lACH-dEvD_zc";
    
    async function api(page_value){
    
        var url = `https://api.unsplash.com/search/photos/?query=${search}&page=${page_value-1}&per_page=10&client_id=${API_key}`;
        var v = fetch(url);
        var out1 = await v;
        var prom = out1.json();
        var output = await prom;

        var rows = document.createElement('div');
        rows.classList.add("rows");
        cols.append(rows);


        for(let i of output.results){

            var imgdiv = document.createElement('img');
            imgdiv.classList.add('imgdiv','img-fluid');
            imgdiv.setAttribute('src',`${i.urls.small}`);
            rows.append(imgdiv);
        }

        if(resolution == "Small"){
            for(let i of output.results){

                var imgdiv = document.createElement('img');
                imgdiv.classList.add('imgdiv','img-fluid');
                imgdiv.setAttribute('src',`${i.urls.small}`);
                rows.append(imgdiv);
            }
        }
        else if(resolution == "Regular"){
            for(let i of output.results){

                var imgdiv = document.createElement('img');
                imgdiv.classList.add('imgdiv','img-fluid');
                imgdiv.setAttribute('src',`${i.urls.regular}`);
                rows.append(imgdiv);
            }
        }
        else if(resolution == "Full"){
            for(let i of output.results){

                var imgdiv = document.createElement('img');
                imgdiv.classList.add('imgdiv','img-fluid');
                imgdiv.setAttribute('src',`${i.urls.full}`);
                rows.append(imgdiv);
            }
        }        
        
    }
    page++;
    api(page);


    LoadMore.addEventListener('click',(e)=>{
        page++;
        api(page);
    })
    
}
