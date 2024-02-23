const libros = [
            { id: 1, titulo: 'Orgullo y Prejuicio', precio: 5000, imagen: orgullo,  categoria: 'Histórico'},
            { id: 2, titulo: 'Alicia en el País de las Maravillas', precio: 5700, imagen: alicia, categoria: 'Fantasía' },
            { id: 3, titulo: 'Frankenstein', precio: 6000, imagen: frankestein, categoria: 'Terror' },
            { id: 4, titulo: 'Harry Potter y la Piedra Filosofal', precio: 6500, imagen: HarryPotter1, categoria: 'Fantasía' },
            { id: 5, titulo: 'Cien Años de Soledad', precio: 6200, imagen: CienAnosSoledad, categoria: 'Histórico' },
            { id: 6, titulo: 'Réplicas: Cuentos de Terror y otros relatos', precio: 7000, imagen: replicas, categoria: 'Terror' },
            { id: 7, titulo: 'Fantasía y terror en cuerno callado', precio: 6500, imagen: fantasia, categoria: 'Terror' },
            { id: 8, titulo: 'El resplandor', precio: 7500, imagen: resplandor, categoria: 'Terror' },
            { id: 9, titulo: 'La cabaña', precio: 6000, imagen: cabaña, categoria: 'Terror' },
            { id: 10, titulo: 'IT', precio: 7500, imagen: it, categoria: 'Terror' },
            { id: 11, titulo: 'Salamina', precio: 6000, imagen: salamina, categoria: 'Histórico' },
            { id: 12, titulo: 'Las puertas de Atenas', precio: 6500, imagen: LasPuertasDeAtenas, categoria: 'Histórico'},
            { id: 13, titulo: 'Donde aúllan las colinas', precio: 6500, imagen: colinas, categoria: 'Histórico' },
            { id: 14, titulo: 'El médico', precio: 6500, imagen: medico, categoria: 'Histórico' },
            { id: 15, titulo: 'Los jardines de la luna', precio: 8500, imagen: jardines, categoria: 'Fantasía' },
            { id: 16, titulo: 'Las crónicas de Narnia: El león, la bruja y el armario', precio: 8000, imagen: narnia, categoria: 'Fantasía' },
            { id: 17, titulo: 'El señor de los anillos: La comunidad del anillo', precio: 8500, imagen: comunidad, categoria: 'Fantasía' },
        ];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(libros)
        }, 500)
    })
}