function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  const img = document.querySelector('#profile img')
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Imagem do Mayk Brito sorrindo e usando óculos escuro, Jaqueta escura e camisa preta, com um fundo gradiente entre lilás e azul')
  } else {
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Imagem do Mayk Brito sorrindo e usando óculos, Jaqueta escura e camisa preta, com um fundo gradiente entre lilás e azul')
  }
}

