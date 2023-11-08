const products = [
    {
        id: '1',
        name:'Royal Canin',
        price: 25450,
        category: 'Alimentos',
        img:'https://cdn.royalcanin-weshare-online.io/1j8-73ABRYZmsWpck2u6/v9/ar-l-producto-mini-adult-size-health-nutrition-seco',
        stock: 10,
        description : 'Alimento Royal Canin Mini Adulto'
    },
    {
        id: '2',
        name:'Old Prince',
        price: 27950,
        category: 'Alimentos',
        img:'https://puppis.vteximg.com.br/arquivos/ids/170771-1000-1000/148048.png?v=637191143944500000',
        stock: 15,
        description : 'Alimento Old Prince Novel Cordero y Arroz Perro Adulto Mediano y Grande - 15+3 Kg'
    },
    {
        id: '3',
        name:'Pro Plan',
        price: 37590,
        category: 'Alimentos',
        img:'https://drovenort.com.ar/wp-content/uploads/2023/09/7613287119575_1.png',
        stock: 20,
        description : 'Alimento Pro Plan para Perro Adulto Mediano - 15+3Kg'
    },
    {
        id: '4',
        name:'Cancat',
        price:  2750,
        category: 'Accesorios',
        img:'https://http2.mlstatic.com/D_NQ_NP_737504-MLU71336471718_082023-O.webp',
        stock: 12,
        description : 'Bolsas Eco Cancat - 50 Unidades'
    },
    {
        id: '5',
        name:'Cancat',
        price: 9450,
        category: 'Accesorios',
        img:'https://puppis.vteximg.com.br/arquivos/ids/186244-1000-1000/200937.jpg?v=637852786434070000',
        stock: 10,
        description : 'Piedras Sanitarias Silica Cancat Brisas Frescas - 3,8 Lt'
    },
    {
        id: '6',
        name:'Pedigree',
        price: 805,
        category: 'Snack',
        img:'https://www.pedigree.com.ar/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf1506/files/2022-10/7896029052341.1.png',
        stock: 10,
        description : 'Dentastix Pedigree Razas Pequeñas'
    },
    {
        id: '7',
        name:'Credelio',
        price: 10650,
        category: 'Salud',
        img:'https://cdnx.jumpseller.com/espacio-pet1/image/15434704/resize/640/640?1697468859',
        stock: 10,
        description : 'Antipulgas Y Garrapatas Credelio 3 Comprimidos'
    },
    {
        id: '8',
        name:'Nexgard',
        price: 7550,
        category: 'Salud',
        img:'https://maxipet.cl/wp-content/uploads/2022/10/NEXGARD-SPECTRA-36-A-75K.jpeg',
        stock: 10,
        description : 'Nexgard Spectra Para Perros - 3,6 a 7,5 Kg'
    },
    {
        id: '9',
        name:'Golden Breeze',
        price: 7050,
        category: 'Higiene',
        img:'https://http2.mlstatic.com/D_NQ_NP_813633-MLA53528936001_012023-O.webp',
        stock: 8,
        description : 'Paños Golden Breeze 60x50 Cm'
    },    
    {
        id: '10',
        name:'Golden Breeze - Carbon Pad',
        price: 14150,
        category: 'Higiene',
        img:'https://puppis.vteximg.com.br/arquivos/ids/194628-1000-1000/259987.jpg?v=638301483211070000',
        stock: 16,
        description : 'Paños Sanitarios Golden Breeze Carbón Activado 80x60 Cm - 30 Unid'
    },
    {
        id: '11',
        name:'Guante Le Salon',
        price: 8190,
        category: 'Higiene',
        img:'https://static.wixstatic.com/media/fd8c39_1a4bf32c6e18434fa2d1767b91e7f852~mv2.webp',
        stock: 5,
        description : 'Guante para Cepillar Le Salon Essentials'
    },
    {
        id: '12',
        name:'Pelota De Rugby  Can Cat',
        price: 9250,
        category: 'Salud',
        img:'https://cancat.com.ar/wp-content/uploads/2020/06/Dental-Rugby-Ball-11-CM.png',
        stock: 10,
        description : 'Juguete antistress diseñado para perros con dientes fuertes. El pique relaja a tu mascota y la textura y el material relajan los dientes y las encías, previniendo el sarro y estimulando el hábito saludable de masticar.'
    },
]


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })  
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}