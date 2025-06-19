const URL="https://dog.ceo/api/breeds/image/random/3";

const btn=document.querySelector("#btn");
const img=document.querySelector("#img");

function getImage(){
    fetch(URL)
    .then((res)=>{
        return res.json();;
    }).then((data)=>{
        for(let i in data.message)
        {
        //console.log(data.message[i]);
        img.src=data.message[i];
        }
    })
}

btn.addEventListener("click",()=>{
    getImage();
})