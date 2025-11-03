document.addEventListener('DOMContentLoaded', function(){
    // Movimiento de las cajas de cada elemento 'article'
    var caja = document.getElementsByTagName('article');
    caja.addEventListener('mouseover', function(){
        this.style.transform = 'translateY(-10px)';
    })
    caja.addEventListener('mouseout', function(){
        this.style.transform = 'translateY(0)';
    })
});