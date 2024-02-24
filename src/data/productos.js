const libros = [
    { id: 1, titulo: 'Orgullo y Prejuicio', precio: 5000, imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/46/6b/466b0b47e932561b186c56358acbe55e.jpg', categoria: 'Histórico' },
    { id: 2, titulo: 'Alicia en el País de las Maravillas', precio: 5700, imagen: 'https://cdn.edelvives.es/docs/catalogo/9793/imgs/original/118790_alicia_espejo_EDV.jpg', categoria: 'Fantasía' },
    { id: 3, titulo: 'Frankenstein', precio: 6000, imagen: 'https://acdn.mitiendanube.com/stores/001/005/721/products/773054-mla40180164532_122019-o-7458b567ab54b2c40015780814321182-640-01-498614a6621e06c0a916071874463263-480-0.jpg', categoria: 'Terror' },
    { id: 4, titulo: 'Harry Potter y la Piedra Filosofal', precio: 6500, imagen: 'https://contentv2.tap-commerce.com//cover/large/9789878000107_1.jpg?id_com=717', categoria: 'Fantasía' },
    { id: 5, titulo: 'Cien Años de Soledad', precio: 6200, imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg', categoria: 'Histórico' },
    { id: 6, titulo: 'Réplicas: Cuentos de Terror y otros relatos', precio: 7000, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjC7TGwzyCsj7RE2of87wilo-4oXk9szobtSZx6pmng&s', categoria: 'Terror' },
    { id: 7, titulo: 'Fantasía y terror en cuerno callado', precio: 6500, imagen: 'https://acdn.mitiendanube.com/stores/001/136/894/products/fantasia-y-terror1-a7437e45d63e948f8815853479947749-640-0.jpg', categoria: 'Terror' },
    { id: 8, titulo: 'El resplandor', precio: 7500, imagen: 'https://puntoed.com.ar/img/libros/1590-el-resplandor-20220513200507.jpg', categoria: 'Terror' },
    { id: 9, titulo: 'La cabaña', precio: 6000, imagen: 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/270/m_libros/269937_portada_la-cabana_natasha-preston_201802201202.jpg', categoria: 'Terror' },
    { id: 10, titulo: 'IT', precio: 7500, imagen: 'https://contentv2.tap-commerce.com/cover/large/9789877253191_1.jpg?id_com=1156', categoria: 'Terror' },
    { id: 11, titulo: 'Salamina', precio: 6000, imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/30/0c/300cb20dce8679935ec565234cd1f71d.jpg', categoria: 'Histórico' },
    { id: 12, titulo: 'Las puertas de Atenas', precio: 6500, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRapHKkZMubCv4aFU2iJRc3ZvrON7ANQXI3D9TjW5d9OA&s', categoria: 'Histórico'},
    { id: 13, titulo: 'Donde aúllan las colinas', precio: 6500, imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/12/34/12341fd18300da2cecaa2647fc895fb1.jpg', categoria: 'Histórico' },
    { id: 14, titulo: 'El médico', precio: 6500, imagen: 'https://noahgordon.com/wp-content/uploads/2017/08/el-medico.jpg', categoria: 'Histórico' },
    { id: 15, titulo: 'Los jardines de la luna', precio: 8500, imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/a4/ce/a4cec19df6d923cadcf13cb578d05573.jpg', categoria: 'Fantasía' },
    { id: 16, titulo: 'Las crónicas de Narnia: El león, la bruja y el armario', precio: 8000, imagen: 'https://www.librosdelaarena.com.ar/media/catalog/product/cache/e80a621ffa7c449d28b86999589a6b70/9/5/9507322280_9789507322280_2022-11-26_08_00_06.jpg', categoria: 'Fantasía' },
    { id: 17, titulo: 'El señor de los anillos: La comunidad del anillo', precio: 8500, imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/54/49/5449ba87a3e457a22dd6d0972b5c261e.jpg', categoria: 'Fantasía' },
  ];
  
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(libros);
      }, 500);
    });
  };
  
  export default libros;