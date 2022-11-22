const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')(5000)/*İçerik butona bastığınız anda gösterilir veya gizlenir.*/
    input.focus()
})