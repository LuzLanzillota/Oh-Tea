import { Link } from "react-router-dom";
import "./Menu.css";
import Footer from "./Footer";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import Carrusel from "./Carrusel";
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
    {
        title: "COFFEE TEAM (By Lavazza)",
        products: [
            {
                id: 22,
                title: "Pistacho Coffee",
                description: "Un café con leche y dulce de pistacho es una mezcla deliciosa de café suave y cremosa leche, realzada con el sabor único y ligeramente dulce del pistacho.",
                image: "/images/menu/22.png",
            },
            {
                id: 23,
                title: "Mango Coffee",
                description: "Una fusión atrevida de mango, leche y café, que combina lo tropical con lo clásico para una experiencia de sabor única.",
                image: "/images/menu/23.png",
            },
            {
                id: 24,
                title: "Cafe Latte/Americano",
                description: "Es un café simple sin azúcar.",
                image: "/images/menu/24.png",
            },
            {
                id: 25,
                title: "Black Sugar Coffee",
                description: "La riqueza del azúcar negra se une al café y la leche, ofreciendo una versión moderna y deliciosa de un café clásico.",
                image: "/images/menu/25.png",
            },
            {
                id: 26,
                title: "Espresso",
                description: "Es un shot de café puro.",
                image: "/images/menu/26.png",
            },
        ],
    },
    {
        title: "PASTELERÍA",
        products: [
            {
                id: 27,
                title: "Roll de Chocolate",
                description: "Dulce pancito enrrollado horneado y relleno de chocolate.",
                image: "/images/menu/27.png",
            },
            {
                id: 28,
                title: "Muffin DDL",
                description: "Muffin de vainilla con chips de chocolate y relleno de dulce de leche.",
                image: "/images/menu/28.png",
            },
            {
                id: 29,
                title: "Muffin Vegano",
                description: "Muffin vegano con relleno de manzana cubierto de nueces.",
                image: "/images/menu/29.png",
            },
            {
                id: 30,
                title: "Cookie Chip relleno de DDL",
                description: "Galleta rellena de dulce de leche con chips de chocolate.",
                image: "/images/menu/30.png",
            },
            {
                id: 31,
                title: "Roll de Pasas y Nuez",
                description: "Dulce pancito enrrollado relleno de pasas cubierto de nueces.",
                image: "/images/menu/31.png",
            },
            {
                id: 32,
                title: "PoundCake Marmolado",
                description: "Dulce y tentador postre que combina lo mejor de dos mundos: el rico sabor a chocolate y la suavidad de la vainilla en cada mordisco.",
                image: "/images/menu/32.png",
            },
            {
                id: 33,
                title: "Croissant J&Q",
                description: "Es un Croissant con jamon y queso, se lo sirve caliente y tostado para una mejor experiencia en su sabor.",
                image: "/images/menu/33.png",
            },
            {
                id: 34,
                title: "Twist de Limon",
                description: "Esponjoso pan de limon con semillas",
                image: "/images/menu/34.png",
            },
            {
                id: 35,
                title: "Scone de Queso",
                description: "Panecillos de manteca y queso.",
                image: "/images/menu/35.png",
            },
            {
                id: 36,
                title: "Croque Monsieur",
                description: "Gran tostado de jamon y queso cubierto de queso derretido.",
                image: "/images/menu/36.png",
            },
            {
                id: 37,
                title: "PoundCake Limon y Arandanos",
                description: "Un budín de limón relleno de arándanos es una deliciosa combinación de sabores frescos y cítricos. El suave y húmedo budín de limón se complementa perfectamente con los arándanos jugosos y llenos de sabor, creando una experiencia dulce y refrescante en cada bocado. Es un postre encantador que deleitará a cualquier amante de los cítricos y los frutos rojos.",
                image: "/images/menu/37.png",
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
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (showLoader) {
        return <Loader />;
    }

    return (
        <>
            <div>
                {/* <Carrusel /> */}
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
                <Footer />
            </div></>
    );
};

export default Menu;
