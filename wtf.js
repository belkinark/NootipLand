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