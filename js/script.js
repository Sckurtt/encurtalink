
var buttonLink = document.querySelector('.link-btn');
buttonLink.addEventListener('click', ()=>{
    var inputLink = document.querySelector('.input-link').value;
    var result = document.querySelector('.link-span');
    if(inputLink != ''){
        result.classList.toggle('hide');
    }
})