const tombol = document.getElementById('tombol')

tombol.addEventListener('click', () => {
  // alert('Ok')
  // document.body.classList.toggle('biru-muda')
  const r = Math.trunc(Math.random()*255)
  const g = Math.trunc(Math.random()*255)
  const b = Math.trunc(Math.random()*255)

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})