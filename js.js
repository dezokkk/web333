let a = document.querySelector('#a')
let name =document.querySelector('#.name')
a.onclick = () => {
    a.classList.toggle('bx-x');
    
}
const sr = scrollReveal ({
    
    distance: '65px',
    duratian: 2600
  
})
sr.reveal('.')

 