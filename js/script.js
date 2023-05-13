let doc = document
let but = doc.querySelector('.r')
let but2 = doc.querySelector('.j')
let sec1 = doc.querySelector('.sec1')
let sec2 = doc.querySelector('.sec2')
let sec3 = doc.querySelector('.sec3')
let x1 = doc.querySelector('.i')
let x2 = doc.querySelector('.i3')
let input = doc.querySelectorAll('input')
but.onclick = () => {
    sec1.style.display = 'none'
    sec2.style.display = 'flex'
}
x2.onclick = () => {
    sec1.style.display = 'flex'
    sec2.style.display = 'none'

}
x1.onclick = () => {
    sec1.style.display = 'flex'
    sec3.style.display = 'none'
}
but2.onclick = (event) => {
    for (let i of input) {
        if (i.value != "") {
            sec2.style.display = 'none'
            sec3.style.display = 'flex'
        }
    }
    event.preventDefault()
    setTimeout(function () {
        sec1.style.display = 'flex'
        sec3.style.display = 'none'
    }, 3000)
}