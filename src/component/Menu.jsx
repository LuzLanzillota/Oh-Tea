import React, { useState } from "react";
import "./Menu.css";

const categories = [
    {
        title: "BUBBLE TEAM",
        products: [
            {
                id: 1,
                title: "Bubble Pistacho",
                description: "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.",
                image: "/images/menu/1.png",
            },
            {
                id: 2,
                title: "BubbleTea",
                description: "Un clásico taiwanés, esta bebida combina el robusto sabor del té Ceylon con la suavidad de la leche y la textura única de las perlas de tapioca, ofreciendo un equilibrio perfecto entre sabor y diversión.",
                image: "/images/menu/2.png",
            },
            {
                id: 3,
                title: "Bubble Jazmin",
                description: "Un clásico taiwanés, esta bebida combina el robusto sabor del té Ceylon con la suavidad de la leche y la textura única de las perlas de tapioca, ofreciendo un equilibrio perfecto entre sabor y diversión.",
                image: "/images/menu/3.png",
            },
            {
                id: 4,
                title: "Bubble Super Caramel",
                description: "Un sueño para los amantes del caramelo, combinando té Ceylon con dulce de leche y caramelo, junto con la cremosidad de la leche y la textura de las perlas de tapioca.",
                image: "/images/menu/4.png",
            },
            {
                id: 5,
                title: "Bubble Chocolate",
                description: "Este té Ceylon se transforma con la adición de chocolate, ofreciendo una bebida rica y reconfortante, perfectamente complementada con leche y perlas de tapioca para una experiencia deliciosa.",
                image: "/images/menu/5.png",
            },
            {
                id: 6,
                title: "Bubble Black Sugar Tea/Milk",
                description: "Una mezcla indulgente de té Ceylon y azúcar negra, rica en sabor a caramelo, unida a la suavidad de la leche y la textura masticable de las perlas de tapioca.",
                image: "/images/menu/6.png",
            },

        ],
    },
    {
        title: "FRUITY TEAM",
        products: [
            {
                id: 7,
                title: "Lychee green tea",
                description: "El dulce sabor del lychee se fusiona con el té Jazmín, creando una bebida ligera y fragante, que es tanto refrescante como deliciosamente dulce.",
                image: "/images/menu/7.png",
            },
            {
                id: 8,
                title: "Peach Lemon Tea",
                description: "El dulce sabor del durazno se une con la frescura del limón en té Jazmín, resultando en una bebida cítrica, dulce y refrescante.",
                image: "/images/menu/8.png",
            },
            {
                id: 9,
                title: "MultiBerry",
                description: "Un té Oolong ligeramente tostado se une con una mezcla de arándanos, frambuesa y frutilla, resultando en una bebida refrescante y llena de antioxidantes.",
                image: "/images/menu/9.png",
            },
            {
                id: 10,
                title: "Fresh Lemon",
                description: "La simplicidad del limón fresco combinado con té Ceylon crea una bebida revitalizante y llena de vitamina C, perfecta para un impulso de energía.",
                image: "/images/menu/10.png",
            },
            {
                id: 11,
                title: "Lemon Berry Boom 2.0",
                description: "Una combinación explosiva de limón, frutilla y menta en té Ceylon, realzada con perlas boom sabor arándano, para una bebida refrescante y con un toque divertido.",
                image: "/images/menu/11.png",
            },
            {
                id: 12,
                title: "Coco Mango Boom",
                description: "Bebida a base de mango en fruta con un concentrado de coco líquido y leche condensada. Va frozen y trae booms las cuales son unas perlas sabor yogurt que explotan o se deshacen en la boca.",
                image: "/images/menu/12.png",
            },
        ],
    },
    {
        title: "LATTE TEAM",
        products: [
            {
                id: 13,
                title: "Matcha Latte",
                description: "Un cremoso latte que combina el rico y té Matcha con leche, proporcionando una bebida llena de antioxidantes y sabor intenso.",
                image: "/images/menu/13.png",
            },
            {
                id: 14,
                title: "Frutilla latte",
                description: "Frutillas frescas mezcladas con leche para crear un latte dulce y refrescante, perfecto para los amantes de las bebidas frutales.",
                image: "/images/menu/14.png",
            },
            {
                id: 15,
                title: "Taro latte",
                description: "Una mezcla suave y ligeramente dulce de jugo de Taro con leche, ofreciendo una alternativa única y deliciosa al latte tradicional.",
                image: "/images/menu/15.png",
            },
        ],
    }, {
        title: "SHAKE SHAKE TEAM",
        products: [
            {
                id: 16,
                title: "Oreo Shake",
                description: "Una combinación indulgente de galletas Oreo, leche y chocolate, todo coronado con crema batida, creando un batido irresistible para los amantes del chocolate.",
                image: "/images/menu/16.png",
            },
            {
                id: 17,
                title: "Choco Berry Shake",
                description: "Un batido de chocolate blanco con frutillas frescas, mezclado con leche y rematado con crema batida, para un postre bebible y delicioso.",
                image: "/images/menu/17.png",
            },
        ],
    }, {
        title: "PURO TEAM",
        products: [
            {
                id: 18,
                title: "Ceylon Tea",
                description: "Puro té Ceylon, conocido por su aroma intenso y sabor rico, una bebida clásica que nunca pasa de moda.",
                image: "/images/menu/18.png",
            },
            {
                id: 19,
                title: "Jazmin Green Tea",
                description: "Té de Jazmín, ligero y aromático, ofrece un sabor suave y un aroma relajante, ideal para momentos de tranquilidad.",
                image: "/images/menu/19.png",
            },
        ],
    },
    {
        title: "SODA TEAM",
        products: [
            {
                id: 20,
                title: "Lychee soda",
                description: "El refrescante sabor del lychee se mezcla con soda para crear una bebida ligera y dulce, perfecta para un refresco de verano.",
                image: "/images/menu/20.png",
            },
            {
                id: 21,
                title: "Mango soda",
                description: "La dulzura del mango se une con la frescura de la soda, creando una bebida tropical y revitalizante, ideal para días soleados.",
                image: "/images/menu/21.png",
            },
        ],
    },
];

const Menu = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (product) => {
        setModalContent(product);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };

    return (
        <div className="menu-container">
            {categories.map((category, index) => (
                <div key={index} className="category">
                    <h2>{category.title}</h2>
                    <div className="products">
                        {category.products.map((product) => (
                            <div key={product.id} className="item" onClick={() => openModal(product)}>
                                <img src={product.image} alt={product.title} width="100" />
                                <p>{product.title}</p>
                                <button>Ver más</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Modal */}
            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>X</button>
                        <img src={modalContent.image} alt={modalContent.title} className="modal-img" />
                        <h2>{modalContent.title}</h2>
                        <p>{modalContent.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;

// function Menu() {
//     return (
//         // <div className="detail-container">
//         //     <h1>BUBBLE TEAM </h1>
//         //     <div className="container">

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\1.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Bubble Pistacho</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\2.png" alt="Bubble Pistacho" width="100" />
//         //             <p>BubbleTea</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\3.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Bubble Jazmin</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\4.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Bubble Super Caramel</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\5.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Bubble Chocolate</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\6.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Bubble Black Sugar Tea/Milk</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //     </div>


//         //     <h2>FRUITY TEAM</h2>
//         //     <div className="container">

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\7.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Lychee green tea</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\8.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Peach Lemon Tea</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\9.png" alt="Bubble Pistacho" width="100" />
//         //             <p>MultiBerry</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\10.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Fresh Lemon</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\11.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Lemon Berry Boom 2.0</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\12.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Coco Mango Boom</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //     </div>
//         //     <h2>LATTE TEAM </h2>
//         //     <div className="container">

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\13.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Matcha Latte</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\14.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Frutilla latte</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\15.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Taro latte</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //     </div>
//         //     <h2>SHAKE SHAKE TEAM</h2>
//         //     <div className="container">

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\16.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Oreo Shake</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\17.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Choco Berry Shake</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //     </div>
//         //     <h2>PURO TEAM</h2>
//         //     <div className="container">

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\18.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Ceylon Tea</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\19.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Jazmin Green Tea</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //     </div>
//         //     <h2>SODA TEAM</h2>
//         //     <div className="container">

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\20.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Lychee soda</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\21.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Mango soda</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //     </div>
//         //     <h2>COFFEE TEAM (By Lavazza)</h2>
//         //     <div className="container">

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\22.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Pistacho Coffee</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\23.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Mango Coffee</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\24.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Cafe Latte/Americano</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\25.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Black Sugar Coffee</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\26.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Espresso</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //     </div>
//         //     <h2>PASTELERÍA</h2>
//         //     <div className="container">

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\27.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Roll de Chocolate</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\28.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Muffin DDL</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\29.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Muffin Vegano</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\30.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Cookie Chip relleno de DDL</p>
//         //             <button>Ver más</button>
//         //         </div>

//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\31.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Roll de Pasas y Nuez</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\32.png" alt="Bubble Pistacho" width="100" />
//         //             <p>PoundCake Marmolado</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\33.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Croissant J&Q</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\34.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Twist de Limon</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\35.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Scone de Queso</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\36.png" alt="Bubble Pistacho" width="100" />
//         //             <p>Croque Monsieur</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //         <div className="item" onClick={() => openModal("Bubble Pistacho", "Esta bebida combina té de jazmín, leche cremosa, dulce de pistacho y perlas de tapioca, ofreciendo una experiencia refrescante y deliciosamente única.", "bubble_pistacho.jpg")}>
//         //             <img src=".\images\menu\37.png" alt="Bubble Pistacho" width="100" />
//         //             <p>PoundCake Limon y Arandanos</p>
//         //             <button>Ver más</button>
//         //         </div>
//         //     </div>
//         // </div>
//         <div></div>
//     );
// }


