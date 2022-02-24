const aplicacion = document.querySelector('.contenedor')

const url = "http://10.100.107.113/xml"


let respuesta = new XMLHttpRequest();

respuesta.open('GET', url)
respuesta.send();

respuesta.onreadystatechange = function(){

    if(this.readyState === XMLHttpRequest.DONE && this.status === 200)
    {
        var datos = respuesta.responseXML
        var libros = datos.getElementsByTagName("book")

        var libros_array = [].slice.call(libros)

        //Ordenar array

        libros_array.sort(function(a,b)
        {

            if(a.getElementsByTagName("publish_date")[0].textContent > b.getElementsByTagName("publish_date")[0].textContent)
            {
                return 1;
            }
            if(a.getElementsByTagName("publish_date")[0].textContent < b.getElementsByTagName("publish_date")[0].textContent)
            {
                return -1;
            }
            return 0;
        })


        // Mostrar datos
        for(i = 0; i<libros_array.length; i++){

            var id_libro = libros_array[i].id
            var titulo = libros_array[i].getElementsByTagName("title")[0].textContent
            var descripcion = libros_array[i].getElementsByTagName("description")[0].textContent
            var genero = libros_array[i].getElementsByTagName("genre")[0].textContent
            var autor = libros_array[i].getElementsByTagName("author")[0].textContent
            var precio = libros_array[i].getElementsByTagName("price")[0].textContent
            var fecha_publicacion = libros_array[i].getElementsByTagName("publish_date")[0].textContent
            console.log(id_libro + ';' + titulo + ';' + descripcion + ';' + genero + ';' + autor + ';' + precio + ';' + fecha_publicacion  )
            
        }
    }

}
