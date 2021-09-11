//Función que al hacer scroll agrega una clase al nav menu
 
window.addEventListener('scroll', function() {
    var header = document.getElementById('menu');
    /*var divPortfolio = document.getElementById('row-portfolio');
    var divNosotros = document.getElementById('row-nosotros');
    if(window.scrollY >= divPortfolio.offsetTop && window.scrollY < divNosotros.offsetTop){
      header.classList.add('color1');
    }else{
      if(window.scrollY >= divNosotros.offsetTop){
        header.classList.remove('color1');
        header.classList.add('color2');
      }else{
        header.classList.remove('color1');
        header.classList.remove('color2');
      }
    }*/
    if(window.scrollY > 0){
        header.classList.add('navbar-dark');
        header.classList.add('bg-dark');
    }else{
        header.classList.remove('navbar-dark');
        header.classList.remove('bg-dark');
    }
  })