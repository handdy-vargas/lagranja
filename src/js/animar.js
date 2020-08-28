let animado = document.querySelectorAll(".animado");

function mostrarScroll()
{
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++)
    {
        //let alturaAnimado = animado[i].offsettop;
        let alturaAnimado = 300;
        if(alturaAnimado - 100 < scrollTop)
        {
            animado[i].style.opacity = 1;
        }
    }
}
window.addEventListener('scroll', mostrarScroll);