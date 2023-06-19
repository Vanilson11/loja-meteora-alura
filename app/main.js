const elementoMostrarNavbar = document.getElementById('mostraNavigation');

elementoMostrarNavbar.addEventListener("click", () => {
  const navigation = document.querySelector('.navigation');
  const elementoFechaNav = document.getElementById('fechaNav');
  navigation.style.visibility = 'visible';
  fechaNavbar(elementoFechaNav);
})

function fechaNavbar(elemento){
  elemento.addEventListener("click", () => {
    const navigation = document.querySelector('.navigation');
    const elementoFechaNav = document.getElementById('fechaNav');
    navigation.style.visibility = 'hidden';
  })
}