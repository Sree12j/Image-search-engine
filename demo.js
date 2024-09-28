const accessKey="2du02aEQZrMvNSsZegeSIcQRLW_TCDfDmu068ZOml4w";

let searchForm=document.getElementById("searchform");

let searchBox=document.getElementById("searchbox");

let searchResult=document.getElementById("searchresult");

let showMore=document.getElementById("showmorebtn");

let keyWord="";

let  page=1;

async  function searchImages(){
    keyWord=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;

const response= await fetch(url);

const data=await response.json();

if(page===1){
    searchResult.innerHTML="";
}

const results =data.results;

results.map((results)=>{
    const image=document.createElement("img");
    image.src=results.urls.small;
    const  imageLink=document.createElement("a");
    imageLink.href=results.links.html;
    imageLink.target="_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
})

showMore.style.display="block";

}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showMore.addEventListener("click",(e)=>{
    e.preventDefault();
    page++;
    searchImages();
})