function footer() {
    const footer = document.getElementById ('content-footer'); 

    //Colmnas de contenedor 

    const footerContainer = document.createElement('div')
    footerContainer.classList.add('footer-container'); 
    footer.appendChild(footerContainer); 

    const columnas = [
        {
            tipo: 'logo',
            ruta: '../media/logo-negativo.svg'
        }, 

        //Enlaces Utiles
        {
            tipo: 'enlaces', 
            titulo:'Enlaces Útiles',
            enlaces: [
                {texto: 'Inicio', href: '#'}, 
                {texto: 'Nosotros', href: '#'}, 
                {texto: 'Catalogo', href: '#'}, 
                {texto: 'Contacto', href: '#'}, 
            ] 
        },

        //Enlaces Contacto 
        {
            tipo: 'enlaces', 
            titulo:'Contacto',
            enlaces: [
                {texto: '+54 9 000000000', href: '#'}, 
                {texto: 'blissclothes@gmail.com', href: '#'}, 
            ] 
        },

        //Enlaces Redes Sociales 
        {
            tipo: 'enlaces', 
            titulo:'Redes Sociales',
            enlaces: [
                {texto: 'Instagram', href: '#'}, 
                {texto: 'Facebook', href: '#'}, 
                {texto: 'Tiktok', href: '#'}, 
                {texto: 'Pinterest', href: '#'}, 
            ] 
        }
    ]; 

    columnas.forEach(columna => {
        const columnaDiv = document.createElement('div');
        columnaDiv.classList.add('footer-column');
        footerContainer.appendChild(columnaDiv);
    
        if (columna.tipo === 'logo') {
          crearLogo(columna, columnaDiv);
        } else if (columna.tipo === 'enlaces') {
          crearEnlaces(columna, columnaDiv);
        }
      });

      //logo 
    function crearLogo(column, columnaDiv){
        const logo = document.createElement('img'); 
        logo.src = column.ruta; 
        logo.alt = "Logo de PureBliss"; 
        columnaDiv.appendChild(logo); 
    }
    //Enlaces
    function crearEnlaces(column,columnaDiv){
        const h3 = document.createElement('h3'); 
        h3.textContent = column.titulo; 
        columnaDiv.appendChild(h3); 

        const ul = document.createElement('ul'); 

        column.enlaces.forEach(enlace => {
            const li = document.createElement('li'); 
            const a = document.createElement('a'); 
            a.href = enlace.href; 
            a.textContent = enlace.texto; 
            
            li.appendChild(a); 
            ul.appendChild(li); 
        }); 
        columnaDiv.appendChild(ul); 
    }
    const copyright = document.createElement('div');
    copyright.classList.add('footer-copyright')
    const text = document.createElement('p'); 
    copyright.appendChild(text); 
    text.textContent = "© 2025 PureBliss. Todos los derechos reservados"; 
    footer.appendChild(copyright); 
}


footer(); 