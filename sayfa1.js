/*
let btn = document.createElement("button");
document.querySelector("body").prepend(btn); // prepend en başa ekleme
btn.innerHTML = "Ekle";
btn.style.display = "flex"

let inp = document.createElement("input");
document.querySelector("button").appendChild(inp);
inp.type = "text"


const kokEtiket = document.querySelector("#root");


const fotograflar = [1, 10, 23, 45, 57, 78, 85];

fotograflar.forEach(yeniFotografEkle)  //her bir eleman için yeniFotografEkle fonksiyonu çalışsın

function yeniFotografEkle(fotografNo){
    let imgEtiketi = document.createElement("img");
    imgEtiketi.src = `https://lipsum.app/id/${fotografNo}/300x250`;
    kokEtiket.append(imgEtiketi);
}
/*
btn.addEventListener("click", ()=>{
    fotograflar.push(105);
    yeniFotografEkle(fotograflar[7]);
})
*/
/*
btn.addEventListener( 'click', 
    function(){
        let deneme = yeniFotografEkle(inp.value);
    } 

)
btn.after(inp);
inp.after(document.createElement("hr"))
*/

const kokEtiket = document.querySelector("#root")

const fotograflar = [ 1, 10, 23, 45, 57, 78, 85  ]

fotograflar.forEach( yeniFotografEkle ) //her bir eleman için yeniFotografEkle fn çalışsın

function yeniFotografEkle( fotografNo ) {
    let imgEtiketi = document.createElement("img")
    imgEtiketi.src = `https://lipsum.app/id/${fotografNo}/300x250`
    kokEtiket.append(imgEtiketi)
}

let butonEkle = document.createElement("button")
butonEkle.textContent = "+ Ekle"
// butonEkle.style.display = 'block'
butonEkle.style.width = '100px'
kokEtiket.prepend(butonEkle)

butonEkle.addEventListener( 'click', 
    function(){
        yeniFotografEkle(parseInt(inputFoto.value))
    } 

)

let inputFoto = document.createElement('input')
inputFoto.type = 'text'
butonEkle.after(inputFoto)

inputFoto.after(document.createElement("hr"))

