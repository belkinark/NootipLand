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
document.addEventListener("DOMContentLoaded", function(event){
	var widthWind = document.querySelector('body').offsetWidth;
	console.log(widthWind)
	if (widthWind <= 995){
		buy.classList.remove("col")
	}
});