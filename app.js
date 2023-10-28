var app = new Vue({
    el: '#app',
    data: {
        presentacion: 'Bienvenido a mi portafolio personal. Soy un desarrollador web con experiencia en HTML, CSS, JavaScript y PHP. Me apasiona crear sitios web y aplicaciones que sean atractivos y fáciles de usar.',
        habilidades: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        proyectos: [
            {
                titulo: 'Proyecto 1',
                descripcion: 'Descripción del proyecto 1.'
            },
            {
                titulo: 'Proyecto 2',
                descripcion: 'Descripción del proyecto 2.'
            },
            {
                titulo: 'Proyecto 3',
                descripcion: 'Descripción del proyecto 3.'
            }
        ]
    }
});