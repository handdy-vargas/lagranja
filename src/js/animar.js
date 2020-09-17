let animados = new Array();
animados[0] = {
    element: $(".texto-cont3"),
    animacion: "mostrarArriba"
}
animados[1] = {
    element: $(".texto-cont4"),
    animacion: "fadeIn"
}
animados[2] = {
    element: $(".texto-cont5"),
    animacion: "mostrarDerecha"
}
animados[3] = {
    element: $(".texto-cont7"),
    animacion: "mostrarIzquierda"
}

function mostrarScroll()
{
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animados.length; i++)
    {
        var animado = animados[i];
        let containerId = animado.element.closest(".container-fluid");
        let container = $(containerId);
        let alturaAnimado = container.offset().top;
        let alturaContainer = container.height();
        if(alturaAnimado - (alturaContainer/3) < scrollTop)
        {
            animado.element.css('opacity', '1');
            animado.element.addClass(animado.animacion);
        }
    }
}
window.addEventListener('scroll', mostrarScroll);