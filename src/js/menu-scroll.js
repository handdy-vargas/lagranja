function hoverItem(visibleItem)
{
    for (var i=10; i > 0; i--)
    {
        let menuitem = $("#menu-"+i);
        let updatedSrc = "images/menu.png";
        if (visibleItem === i)
        {
            updatedSrc = "images/menuHover.png";
        }
        menuitem.attr("src", updatedSrc)
    }
}

function menuScroll()
{
    let scrollTop = document.documentElement.scrollTop;
    for (var i=10; i > 0; i--)
    {
        let container = $("#cont"+i);
        let offsetContainer = container.offset().top;
        let alturaContainer = container.height();
        if(offsetContainer - (alturaContainer/2) < scrollTop)
        {
            hoverItem(i);
            break;
        }
    }
}
window.addEventListener('scroll', menuScroll);