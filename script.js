const mode = document.getElementById('mode_icon');
const ver = document.getElementById('olho')

mode.addEventListener('click', ()=>{
    const form = document.getElementById('form')
    if(mode.classList.contains('fa-moon')){
        mode.classList.add('fa-sun');
        mode.classList.remove('fa-moon');

        form.classList.add('dark')



        return;
    }


    form.classList.remove('dark')
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');

})


ver.addEventListener('click', ()=>{
    let visualizar = document.querySelector('#password')

    if(ver.classList.contains('fa-eye-slash')){
        ver.classList.remove('fa-eye-slash');
        ver.classList.add('fa-eye');
        visualizar.setAttribute('type','text')
        visualizar.style.width = '13.1vw'

        return;
    }


    ver.classList.add('fa-eye-slash');
    ver.classList.remove('fa-eye');
    visualizar.setAttribute('type','password')
    visualizar.style.width = '13vw'
    
})