
const getElement = (selector) => {
  const element = document.querySelector(selector)
  if(element) return element
  throw Error('Class name check name ${selector} ')
}
const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click',
() => {
  links.classList.toggle('show-links')
}
  
)
const date=getElement('#date')
const currentyear= new Date().getFullYear()
date.textContent=currentyear