document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById("page-preloader");
		if( !preloader.classList.contains("done") )
		{
			preloader.classList.add("done")
		}
	}, 100);
}
let boton = document.querySelector(".boton")
boton.onclick = () => {
	window.open('https://www.donationalerts.com/r/nootipland', 'Сайт оплаты', 'width=600,height=900, top='+((screen.height-900)/2)+',left='+((screen.width-600)/2));
};

let buy = document.querySelector("div[adapt]")
let disp1 = document.querySelector("div[adapt-2]")
let disp2 = document.querySelector("div[adapt-3]")
let disp3 = document.querySelector("div[adapt-4]")
let vd1 = document.querySelector("div[vd-1]")
let vd2 = document.querySelector("div[vd-2]")
let vd3 = document.querySelector("div[vd-3]")
document.addEventListener("DOMContentLoaded", function(event){
	var widthWind = document.querySelector('body').offsetWidth;
	console.log(widthWind)
	if (widthWind <= 995){
		buy.classList.remove("col")
		disp1.classList.remove("col-5")
		disp2.classList.remove("col-5")
		disp3.classList.remove("col-5")
		document.querySelectorAll('h1').forEach(h1 => h1.remove());
	}
});