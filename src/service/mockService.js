const productosApi= [
    {
        id: 1,
        title: "Camiseta titular Argentina 2022",
        category: "Camiseta",
        stock: 10,
        imgurl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/02f90f6570a148c1a136af7300dc1ac4_9366/Camiseta_titular_Argentina_3_estrellas_2022_Blanco_IB3593_21_model.jpg",
        detail: "Camiseta titular Argentina 2022, con 3 estrellas",
        price: 16999,
    },
    {
        id: 2,
        title: "Camiseta suplente Argentina 2022",
        category: "Camiseta",
        stock: 10,
        imgurl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6843bdc18ddc41ff880eaef90100912d_9366/Camiseta_Alternativa_de_Juego_Argentina_22_Azul_HB9214_01_laydown.jpg",
        detail: "Camiseta suplente Argentina 2022, con 3 estrellas.",
        price: 25999,
    }, 
    {
        id: 3,
        title: "Camiseta Argentina 86",
        category: "Camiseta",
        stock: 15,
        imgurl: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-argentina-le-coq-sportif-oficial-86-aniversario-410020l20337l94-1.jpg",
        detail: "Camiseta titular Argentina 86.",
        price: 16999,
    }, 
    {
        id: 4,
        title: "Camiseta titular Banfield 2022",
        category: "Camiseta",
        stock: 10,
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_814013-MLA49536915262_032022-W.jpg",
        detail: "La camiseta titular de Banfield para la temporada 2022. Presenta una de las combinaciones tradicionales del club: bastones verdiblancos.",
        price: 14500,
    }, 
    {
        id: 5,
        title: "Camiseta Estudiantes Blanca Olan",
        category: "Camiseta",
        stock: 5,
        imgurl: "http://http2.mlstatic.com/D_845817-MLA45378632374_032021-O.jpg",
        detail: "Camiseta de Estudiantes. Año: 1994-1997.",
        price: 11000,
    }, 
    {
        id: 6,
        title: "Camiseta Retro Real Betis",
        category: "Camiseta",
        stock: 4,
        imgurl: "https://cf.shopee.cl/file/d5fb5c42ba6531d76fbad8b3ac88b3da",
        detail: "Camiseta retro de futbol. Equipo: Real Betis. Año: 1995-1997",
        price: 12900,
    }, 
    {
        id: 7,
        title: "Camiseta Juventus retro titular",
        category: "Camiseta",
        stock: 20,
        imgurl: "https://cf.shopee.cl/file/d6fda9a4917cb404c65a912f2584d29e",
        detail: "Camiseta Juventus retro titular Zidane. Año: 1998",
        price: 15500,
    }, 
    {
        id: 8,
        title: "Camiseta River retro titular",
        category: "Camiseta",
        stock: 10,
        imgurl: "https://www.oldfootballshirts.com/img/shirts/530/thumbs/football_shirt_1704_1_375x500x1.jpg",
        detail: "Camiseta River titular. Año: 1986",
        price: 16999,
    }, 
    {
        id: 9,
        title: "Campera Italia 2021 Azul ",
        category: "Campera",
        stock: 2,
        imgurl: "https://d2r9epyceweg5n.cloudfront.net/stores/001/003/657/products/camperaitalia11-c926d2202611783f2316297456339230-480-0.jpeg",
        detail: "Campera Italia. Año: 2021",
        price: 16000,
    }, 
    {
        id: 10,
        title: "Campera Argentina Negra",
        category: "Campera",
        stock: 5,
        imgurl: "https://http2.mlstatic.com/D_821533-MLA48424107174_122021-O.webp",
        detail: "Campera de Argentina negra con celeste. Año: 2009 - 2010",
        price: 16999,
    }, 
    {
        id: 11,
        title: "Short Argentina Maradona",
        category: "Short",
        stock: 10,
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_610332-MLA49952918642_052022-W.jpg",
        detail: "Short argentina, maradona Nº 10. Año: 1986",
        price: 12000,
    }, 
    {
        id: 12,
        title: "Short Real Betis Blanco y Verde",
        category: "Short",
        stock: 10,
        imgurl: "https://images.classicfootballshirts.co.uk/pub/media/catalog/product/8/0/8032067743097-1_k7ixurcry8tz72ba.jpg",
        detail: "Short Real Betis. Color blanco y verde. Año: 2019-2020",
        price: 11500,
    }, 
    ]

const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productosApi);
        }, 2000);
    });
};
  
const getClothes = (idURL) => {
    return new Promise((resolve, reject) => {
        const reqItem = productosApi.find((item) => {
            return item.id === parseInt(idURL);
    });
        setTimeout(() => {
            if (reqItem) resolve(reqItem);
            else reject("No se encontró el producto");
        }, 2000);
    });
};
  
const getClotheByCategory = (categoryURL) => {
    return new Promise((resolve, reject) => {
        let reqItems = productosApi.filter((item) => item.category === categoryURL);
        setTimeout(() => {
            resolve(reqItems);
        }, 2000);
    });
};


export default obtenerProductos;

export { getClothes, getClotheByCategory };
