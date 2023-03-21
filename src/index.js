const myNav = document.getElementById('header')

window.onscroll = () => {
  if(window.scrollY > window.innerHeight*.9){
    myNav.classList.add('scrolled')
  }else{
    myNav.classList.remove('scrolled')
  }
}