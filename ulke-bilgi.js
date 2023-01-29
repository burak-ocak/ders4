const divIsim = document.querySelector("#isim");
const imgBayrak = document.querySelector("#bayrak");
const divBaskent = document.querySelector("#baskent");
const divYukleniyor = document.querySelector("#yukleniyor");
const selectUlke = document.querySelector("#selectUlke");

fetch("https://restcountries.com/v3.1/name/italy")
.then((yanit)=>yanit.json()) //API'den gelen JSON stringi js objesi veya arraye dönüştürülüyor
.then((bilgi)=>{
    setTimeout(() => {
        divYukleniyor.remove();
        console.log(bilgi)
        let ulkeObje = bilgi[0];
    
        divIsim.textContent = ulkeObje.name.common;
        imgBayrak.src = ulkeObje.flags.png;
        imgBayrak.style.maxWidth = "200px";
        divBaskent.textContent = "Ülkenin başkenti: " + ulkeObje.capital[0];
    }, 3000);
})

selectUlke.addEventListener("change", function(){
    veriCek()
})

function veriCek(ulkeAdi) {
    fetch("https://restcountries.com/v3.1/name/${ulkeAdi}")
.then((yanit)=>yanit.json()) //API'den gelen JSON stringi js objesi veya arraye dönüştürülüyor
.then((bilgi)=>{
    setTimeout(() => {
        divYukleniyor.remove();
        console.log(bilgi)
        let ulkeObje = bilgi[0];
    
        divIsim.textContent = ulkeObje.name.common;
        imgBayrak.src = ulkeObje.flags.png;
        imgBayrak.style.maxWidth = "200px";
        divBaskent.textContent = "Ülkenin başkenti: " + ulkeObje.capital[0];
    }, 3000);
})
}