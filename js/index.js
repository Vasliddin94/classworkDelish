ScrollReveal().reveal('section', {
  duration:2000,
  origin:'top',
  distance:'100px',
  scale:0.8
})

const showMenu=(toggleId, navId)=>{
  const toggle=document.getElementById(toggleId),
  nav=document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')


function changeTheme() {
  let button=document.getElementById('theme-button');
  let body=document.getElementById('body');
    button.addEventListener('click', ()=>{
      body.classList.toggle('dark');
    })
}
