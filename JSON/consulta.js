const aplicacion = document.querySelector('.container')

const url = 'http://10.100.107.113/json'

const genero = 'Male';
const dominio = '.com'


fetch(url)
.then(respuesta => respuesta.json())
.then(respuesta => {
    respuesta.forEach(usuario => {
        if(usuario.email.includes(dominio) && usuario.gender.includes(genero))
        console.log(usuario.first_name + ';' + usuario.last_name + ';' + usuario.ip_address + ';' + usuario.email + ';' + usuario.password )
        
    });

    
 })


