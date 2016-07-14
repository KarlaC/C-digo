jQuery(
	function($) {
		/* tooltip*/
		$(".tooltip").tooltip();
		/* Pestañas*/
		$(".enlace_tabs").on("click",function(e){
			e.preventDefault();
			//tab 
			var idtab = $(this).attr("rel");
			$(".tabs").css("display","none");
			$("#tabs" + idtab).css("display","block");
			$(".enlace_tabs").removeClass('active');
			$("#enlace" + idtab).addClass("active");
		});

			$("#tabs1").css("display","block");
			$("#enlace1").addClass("active");



		/* Peliculas / sinopsis*/
		function fnMostrarSinopsis(e){
			e.preventDefault();
			var rel = $(this).attr("rel");
			$(".contenedor_peliculas").hide();
			$(".sinopsis").hide();
			$(".contenedor_sinopsis").show();
			$(".sinopsis[rel="+rel+"]").show();
		}

		function fnMostrarCartelera(e) {
			e.preventDefault();
			$(".contenedor_peliculas").show();
			$(".contenedor_sinopsis").hide();
		}

		$(".peliculas a.boton").on("click", fnMostrarSinopsis);
		$(".sinopsis a.boton").on("click", fnMostrarCartelera);	


	}
)
