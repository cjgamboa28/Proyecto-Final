const articulos = [
    {
        imagen: 'assets/cardio/art1.png',
        id: 1,
        nombre: "Banda Caminadora Flashy 2.0",
        categoria: "Cardio",
        medidas: "P: 123.5 cm. A: 146.6 cm. A: 70.5 cm.",
        precio: "$" + 1000000,
        descripcion: "Caminadora electrónica Sportfitness ideal para tu entrenamiento cardiovascular.",
        garantia: "1 año",
        marca: "Sportfitness",
        peso: "50 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/cardio/art2.png',
        id: 2,
        nombre: "Bicicleta Spinning Magnética",
        categoria: "Cardio",
        medidas: "P: 110 cm. A: 48 cm. A: 98 cm.",
        precio: "$"+ 1500000,
        descripcion: "Bicicletas spinning de resistencia magnética Sportfitness ideal para tu entrenamiento cardiovascular. ",
        garantia: "1 año",
        marca: "Sportfitness",
        peso: "70 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/cardio/art3.png',
        id: 3,
        nombre: "Elíptica con Ventilador",
        categoria: "Cardio",
        medidas: "P: 90 cm. A: 156 cm. A: 63 cm.",
        precio: "$" + 2500000,
        descripcion: "Elípticas Sportfitness ideal para tu entrenamiento cardiovascular.",
        garantia: "6 meses",
        marca: "Sportfitness",
        peso: "60 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/cardio/art4.png',
        id: 4,
        nombre: "Recumbent Parma-M",
        categoria: "Cardio",
        medidas: "P: 170 cm. A: 66 cm. A: 108 cm.",
        precio: "$" + 3800000,
        descripcion: "Bicicleta Recumbent Sportfitness ideal para tu entrenamiento cardiovascular.",
        garantia: "6 meses",
        marca: "Sportfitness",
        peso: "50 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/cardio/art5.png',
        id: 5,
        nombre: "Bicicleta Air Bike Darwing",
        categoria: "Cardio",
        medidas: "P: 120 cm. A: 130 cm. A: 65 cm.",
        precio: "$" + 4913600,
        descripcion: "La Bicicleta Air Bike Darwin Sportfitness tiene la ventaja de que trabaja el tren inferior y superior.",
        garantia: "1 año",
        marca: "Sportfitness",
        peso: "60 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/cardio/art6.png',
        id: 6,
        nombre: "Bicicleta Spinning Monza",
        categoria: "Cardio",
        medidas: "P: 123.5 cm. A: 146.6 cm. A: 70.5 cm.",
        precio: "$" + 2465600,
        descripcion: "Es perfecto para los que buscan ejercicio con bajo riesgo de lesión.",
        garantia: "6 meses",
        marca: "Xebex",
        peso: "60 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/cardio/art7.png',
        id: 7,
        nombre: "Elíptica Derby",
        categoria: "Cardio",
        medidas: "P: 105 cm. A: 58 cm. A: 168 cm.",
        precio: "$" + 1427900,
        descripcion: "La Elíptica Derby Xebex tiene la ventaja de tener un diseño compacto, perfecta para el hogar.",
        garantia: "1 año",
        marca: "Xebex",
        peso: "50 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/cardio/art8.png',
        id: 8,
        nombre: "Bicicleta Estática Mini Bike Alice",
        categoria: "Cardio",
        medidas: "P: 50.2 cm. A: 40.5 cm. A: 29 cm.",
        precio: "$" + 2888600,
        descripcion: "Caminadora electrónica Xebex ideal para tu entrenamiento cardiovascular.",
        garantia: "3 meses",
        marca: "Xebex",
        peso: "60 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/cardio/art9.png',
        id: 9,
        nombre: "Banda Caminadora Amiems 2.0",
        categoria: "Cardio",
        medidas: "P: 145 cm. A: 68 cm. A: 144 cm.",
        precio: "$" + 1785600,
        descripcion: "Los beneficios de las caminadoras incluyen el fortalecimiento de piernas, incrementar tu energía, y prevención de enfermedades.",
        garantia: "1 año",
        marca: "Xebex",
        peso: "50 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/cardio/art10.png',
        id: 10,
        nombre: "Escalera Eléctrica Swansea",
        categoria: "Cardio",
        medidas: "P: 145 cm. A: 88 cm. A: 214 cm.",
        precio: "$" + 9873600,
        descripcion: "La Escalera Eléctrica Swansea Xebe tiene la ventaja de tener una estructura de alta resistencia para un alto trafico. ",
        garantia: "1 año",
        marca: "Xebex",
        peso: "50 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/funcional/art11.png',
        id: 11,
        nombre: "Vallas para Salto",
        categoria: "Funcional",
        medidas: "Valla: A: 55 cm. A: 32 cm.",
        precio: "$" + 1118600,
        descripcion: "Las Vallas de Salto Sportfitness son el accesorio ideal para mejorar tu velocidad, agilidad y explosividad en cualquier deporte o actividad física.",
        garantia: "3 meses",
        marca: "Sportfitness",
        peso: "1 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/funcional/art12.png',
        id: 12,
        nombre: "Lazo para Saltar Cuero",
        categoria: "Funcional",
        medidas: "L: 274 cm. Grosor: 5 mm.",
        precio: "$" + 2750600,
        descripcion: "Los lazos de salto Sportfitness son un implemento deportivo con muchos beneficios.",
        garantia: "1 año",
        marca: "Sportfitness",
        peso: "1 kg",
        stock: "Disponible",
    },
    {
        imagen: 'assets/funcional/art13.png',
        id: 13,
        nombre: "Rueda Abdominal",
        categoria: "Funcional",
        medidas: "L: 14 cm. A: 29 cm. A: 12 cm.",
        precio: "$" + 4154600,
        descripcion: " Los beneficios de la rueda abdominal es fortalecer el Core, aumentar equilibrio y resistencia.",
        garantia: "3 meses",
        marca: "Sportfitness",
        peso: "2 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/funcional/art14.png',
        id: 14,
        nombre: "Balón Medicinal con Agarre",
        categoria: "Funcional",
        medidas: "Diámetro 30 cm (7 kg).",
        precio: "$" + 5252600,
        descripcion: " Los beneficios de balones medicinales incluyen incremento de fuerza, mejora el equilibrio, coordinación y velocidad.",
        garantia: "6 meses",
        marca: "Sportfitness",
        peso: "7 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/funcional/art15.png',
        id: 15,
        nombre: "Steps Aeróbicos Ajustable",
        categoria: "Funcional",
        medidas: "L: 120 cm. A: 32 cm. A: 21 y 35 cm.",
        precio: "$" + 8592600,
        descripcion: "Steps Sportfitness ideal para entrenamiento funcional y cardiovascular.",
        garantia: "6 meses",
        marca: "Sportfitness",
        peso: "10 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/funcional/art16.png',
        id: 16,
        nombre: "Anillas en Resina Gimnasia Olímpica",
        categoria: "Funcional",
        medidas: "D I: 17.7cmd. D E: 23,5 cm.",
        precio: "$" + 6592900,
        descripcion: "Es perfecto para los que buscan ejercicio con bajo riesgo de lesión.",
        garantia: "3 meses",
        marca: "Xebex",
        peso: "1 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/funcional/art17.png',
        id: 17,
        nombre: "Máscara de Simulación de Altura",
        categoria: "Funcional",
        medidas: " M: Largo 52, P 8cm",
        precio: "$" + 7552900,
        descripcion: "Simulación de entrenamiento en una mayor altura.",
        garantia: "3 meses",
        marca: "Xebex",
        peso: "1 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/funcional/art18.png',
        id: 18,
        nombre: "Cronómetro Deportivo Plus",
        categoria: "Funcional",
        medidas: "A: 10cm. A: 15 cm",
        precio: "$" + 8485900,
        descripcion: "Almacena y recupera hasta 8/30/60 vueltas y tiempo fraccionado.",
        garantia: "3 meses",
        marca: "Xebex",
        peso: "1 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/funcional/art19.png',
        id: 19,
        nombre: "Aros de Agilidad Hexagonales",
        categoria: "Funcional",
        medidas: " L; 55 cm. A; 50 cm.",
        precio: "$" + 8858600,
        descripcion: "Los beneficios de las caminadoras incluyen el fortalecimiento de piernas, incrementar tu energía, y prevención de enfermedades.",
        garantia: "3 meses",
        marca: "Xebex",
        peso: "1 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/funcional/art20.png',
        id: 20,
        nombre: "Multi-Step Inflable",
        categoria: "Funcional",
        medidas: "L: 116 cm. A: 44.5 cm",
        precio: "$" + 6778600,
        descripcion: "El Multi-Step Inflable es ideal para el fortalecimiento del equilibrio y la estabilidad física, al igual que es útil para realizar ejercicios para el fortalecimiento cardiovascular.",
        garantia: "1 año",
        marca: "Xebex",
        peso: "5 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/fuerza/art21.png',
        id: 21,
        nombre: "Kit de Mancuernas 23 KG",
        categoria: "Fuerza",
        medidas: "Lamina de 50 cm por 4 cm",
        precio: "$" + 4617600,
        descripcion: "Los kits de pesas Athletic son una solución perfecta para tener un par de mancuernas que se ajustan a tus necesidades. ",
        garantia: "1 año",
        marca: "Athletic",
        peso: "1 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/fuerza/art22.png',
        id: 22,
        nombre: "Chaleco de Pesas 10KG",
        categoria: "Fuerza",
        medidas: " Talla única.",
        precio: "$" + 1791200,
        descripcion: "Los chalecos son un elemento de entrenamiento muy versátil ideal para rutinas funcionales.",
        garantia: "6 meses",
        marca: "Athletic",
        peso: "10 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/fuerza/art23.png',
        id: 23,
        nombre: "Multifuncional Trainer Inspire",
        categoria: "Fuerza",
        medidas: "61” de ancho x 89” de profundidad",
        precio: "$" + 2491600,
        descripcion: "Integra barras olímpicas y pilas de peso, eliminando la necesidad de placas de peso olímpicas.”",
        garantia: "1 año",
        marca: "Athletic",
        peso: "800 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/fuerza/art24.png',
        id: 24,
        nombre: "Hand Grip Ajustable",
        categoria: "Fuerza",
        medidas: " Largo: 15 cm. Ancho: 10 cm.",
        precio: "$" + 2000000,
        descripcion: "Ideal para el fortalecimiento de los antebrazos, ademas de aumentar la fuerza agarre.",
        garantia: "3 meses",
        marca: "Athletic",
        peso: "1 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/fuerza/art25.png',
        id: 25,
        nombre: "Soporte Abdomen/Dominadas, Fondos",
        categoria: "Fuerza",
        medidas: "L: 136cm. A: 218cm. A: 112cm",
        precio: "$" + 1009600,
        descripcion: "Uso doméstico e institucional",
        garantia: "1 año",
        marca: "Athletic",
        peso: "70 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/fuerza/art26.png',
        id: 26,
        nombre: "Mancuerna 52.5 LB Ajustables",
        categoria: "Fuerza",
        medidas: " Largo; 55 cm. Ancho; 50 cm.",
        precio: "$" + 6150600,
        descripcion: "Las pesas Spri ajustables son una solución perfecta para tener una mancuerna que se ajusta a tus necesidades. ",
        garantia: "6 meses",
        marca: "Spri",
        peso: "25 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/fuerza/art27.png',
        id: 27,
        nombre: "Set Body Pump",
        categoria: "Fuerza",
        medidas: "1 barra en acero de 30 x 13 cm.",
        precio: "$" + 8860019,
        descripcion: "El Set Body Pump es ideal para aumentar masa muscular, tonificar y para bajar de peso. ",
        garantia: "3 meses",
        marca: "Spri",
        peso: "1 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/fuerza/art28.png',
        id: 28,
        nombre: "Banco Multifuncional Delux",
        categoria: "Fuerza",
        medidas: " P: 134 cm. A: 130 cm. A: 60 cm.",
        precio: "$" + 9000000,
        descripcion: "Banco de ejercicio UFC ideal para entrenamiento muscular. ",
        garantia: "6 meses",
        marca: "Spri",
        peso: "30 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/fuerza/art29.png',
        id: 29,
        nombre: "Sandbag 10KG Negro/Verde",
        categoria: "Fuerza",
        medidas: " Largo; 56 cm. Diámetro; 22 cm.",
        precio: "$" + 2145600,
        descripcion: "Bolsa de poder Spri son un implemento para ejercicios de fuerza y entrenamiento muscular.",
        garantia: "6 meses",
        marca: "Spri",
        peso: "10 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/fuerza/art30.png',
        id: 30,
        nombre: "Pesas Rusas Premium",
        categoria: "Fuerza",
        medidas: " Largo: 30 cm. Ancho: 15 cm.",
        precio: "$" + 6745900,
        descripcion: "La pesa rusa o kettlebell son un implemento muy dinámico debido a su diseño.",
        garantia: "1 año",
        marca: "Spri",
        peso: "20 kg",
        stock: "Disponible"
    },
    {  
        imagen: 'assets/yoga/art31.png',
        id: 31,
        nombre: "Mat Profesional Yoga Negro",
        categoria: "Yoga",
        medidas: " L: 1.83 cm. A: 68 cm. E: 0.5 cm",
        precio: "$" + 1594500,
        descripcion: "Los Mat de Yoga Addi son un implemento esencial para un entrenamiento de yoga y pilates.",
        garantia: "6 meses",
        marca: "Addi",
        peso: "1 kg",
        stock: "Disponible"
    },
    { 
        imagen: 'assets/yoga/art32.png',
        id: 32,
        nombre: "Kit para Fitness Azul",
        categoria: "Yoga",
        medidas: "Balon 55 cm. mat de L: 1.83 cm.",
        precio: "$" + 800000,
        descripcion: "Con una combinación versátil, este kit ofrece todo lo necesario para entrenar tu cuerpo, mejorar tu resistencia y alcanzar tus metas.",
        garantia: "6 meses",
        marca: "Addi",
        peso: "5 kg",
        stock: "Disponible"
    },
    {
        imagen: 'assets/yoga/art33.png',
        id: 33,
        nombre: "Kit para Fitness Rosado",
        categoria: "Yoga",
        medidas: "Balon 55 cm. mat de L: 1.83 cm.",
        precio: "$" + 5608900,
        descripcion: "Con una combinación versátil, este kit ofrece todo lo necesario para entrenar tu cuerpo, mejorar tu resistencia y alcanzar tus metas.",
        garantia: "6 meses",
        marca: "Addi",
        peso: "5 kg",
        stock: "Disponible"
    },
    {  
        imagen: 'assets/yoga/art34.png',
        id: 34,
        nombre: "Cubo de Yoga Azul",
        categoria: "Yoga",
        medidas: "L: 23 cm. A: 8 cm. A: 15.5 cm.",
        precio: "$" + 3542900,
        descripcion: "Cubos de Yoga Addi ideales para adaptar posturas.",
        garantia: "6 meses",
        marca: "Addi",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/yoga/art35.png',
        id: 35,
        nombre: "Kit 5 en 1 Tonificación",
        categoria: "Yoga",
        medidas: " B. 55 cm. B. m. 40 cm.",
        precio: "$" + 10560045,
        descripcion: "Kit economico para que puedas realizar lo que mas te gusta.",
        garantia: "6 meses",
        marca: "Addi",
        peso: "5 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/yoga/art36.png',
        id: 36,
        nombre: "Balón de Látex con Agarre Azul",
        categoria: "Yoga",
        medidas: "Diámetro: 55 cm.",
        precio: "$" + 2558600,
        descripcion: "El Fitball es un implemento muy versátil usado en muchos tipos de entrenamientos. ",
        garantia: "6 meses",
        marca: "Addi",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/yoga/art37.png',
        id: 37,
        nombre: "Cubo de Yoga Morado",
        categoria: "Yoga",
        medidas: "L: 23 cm. A: 8 cm. A: 15.5 cm.",
        precio: "$" + 3000000,
        descripcion: "Cubos de Yoga Addi ideales para adaptar posturas.",
        garantia: "6 meses",
        marca: "Addi",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/yoga/art38.png',
        id: 38,
        nombre: "Bola Fitball de Gimnasia Rojo",
        categoria: "Yoga",
        medidas: " Diámetro: 55 cm.",
        precio: "$" + 4538600,
        descripcion: "La Fitball es un implemento muy versátil usado en muchos tipos de entrenamientos. ",
        garantia: "6 meses",
        marca: "Addi",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/yoga/art39.png',
        id: 39,
        nombre: "Banda Elástica Para Yoga",
        categoria: "Yoga",
        medidas: " Largo: 83 cm. Ancho: 5 cm.",
        precio: "$" + 4900451,
        descripcion: "Banda elástica Addi especial para practicar yoga.",
        garantia: "3 meses",
        marca: "Addi",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/yoga/art40.png',
        id: 40,
        nombre: "Bola Fitball de Gimnasia Morado",
        categoria: "Yoga",
        medidas: " Diámetro: 55 cm.",
        precio: "$" + 7528600,
        descripcion: "La Fitball es un implemento muy versátil usado en muchos tipos de entrenamientos.",
        garantia: "6 meses",
        marca: "Addi",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/boxeo_mma/art41.png',
        id: 41,
        nombre: "Guantes Boxeo UFC",
        categoria: "Boxeo/MMA",
        medidas: " Talla: Única",
        precio: "$" + 5164500,
        descripcion: "Los Guantes de Boxeo son un implemento esencial ya que son reglamentarios para el uso de los combatientes. ",
        garantia: "3 meses",
        marca: "Sportfitness",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/boxeo_mma/art42.png',
        id: 42,
        nombre: "Guantes MMA",
        categoria: "Boxeo/MMA",
        medidas: "S/M",
        precio: "$" + 9451900,
        descripcion: "Guantes para artes marciales mixtas.",
        garantia: "3 meses",
        marca: "Sportfitness",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/boxeo_mma/art43.png',
        id: 43,
        nombre: "Protector de Cuerpo Pro UFC",
        categoria: "Boxeo/MMA",
        medidas: "75 cm.",
        precio: "$" + 8223900,
        descripcion: "Para MMA.",
        garantia: "6 meses",
        marca: "Sportfitness",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/boxeo_mma/art44.png',
        id: 44,
        nombre: "Saco de Boxeo 23 KG",
        categoria: "Boxeo/MMA",
        medidas: " Largo: 85 cm. Diámetro: 30.5 cm.",
        precio: "$" + 7389600,
        descripcion: "La bolsa de boxeo es ideal pata entrenar boxeo, MMA o muay thai de forma versátil.",
        garantia: "1 año",
        marca: "Sportfitness",
        peso: "23 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/boxeo_mma/art45.png',
        id: 45,
        nombre: "Saco de Boxeo de Piso",
        categoria: "Boxeo/MMA",
        medidas: " Alto: 170 cm. Diámetro: 58 cm.",
        precio: "$" + 11334600,
        descripcion: "La Bolsa de Boxeo te permite entrenar boxeo, MMA o muay thai de forma versátil.",
        garantia: "1 año",
        marca: "Sportfitness",
        peso: "500 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/boxeo_mma/art46.png',
        id: 46,
        nombre: "Pera de Velocidad Negra/Roja UFC",
        categoria: "Boxeo/MMA",
        medidas: " 25.4x17.8 CM.",
        precio: "$" + 7660450,
        descripcion: "Bolsa o pera de velocidad de Boxeo.",
        garantia: "3 meses",
        marca: "Sportfitness",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/boxeo_mma/art47.png',
        id: 47,
        nombre: "Golpeadores de Mano con Malla",
        categoria: "Boxeo/MMA",
        medidas: "Talla: única.",
        precio: "$" + 5196900,
        descripcion: "Bolsa de poder Spri son un implemento para ejercicios de fuerza y entrenamiento muscular.",
        garantia: "6 meses",
        marca: "Sportfitness",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/boxeo_mma/art48.png',
        id: 48,
        nombre: "Máscara Protectora",
        categoria: "Boxeo/MMA",
        medidas: " M/L.",
        precio: "$" + 7489600,
        descripcion: "Te protegera de fuertes traumatismos en tu entrenamiento",
        garantia: "6 meses",
        marca: "Sportfitness",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/boxeo_mma/art49.png',
        id: 49,
        nombre: "Golpeadores de Mano",
        categoria: "Boxeo/MMA",
        medidas: " Talla: Única.",
        precio: "$" + 6000000,
        descripcion: "El golpeador de mano Sportfitness es el accesorio ideal para mejorar tus habilidades de boxeo y artes marciales. ",
        garantia: "6 meses",
        marca: "Sportfitness",
        peso: "1 kg",
        stock: "Disponible"
    },{ 
        imagen: 'assets/boxeo_mma/art50.png',
        id: 50,
        nombre: "Guantes Boxeo 14OZ",
        categoria: "Boxeo/MMA",
        medidas: " Talla: Única.",
        precio: "$" + 7430900,
        descripcion: "Los Guantes de Boxeo son un implemento esencial ya que son reglamentarios para el uso de los combatientes.",
        garantia: "6 meses",
        marca: "Sportfitness",
        peso: "1 kg",
        stock: "Disponible"
    },
];

const numElementos = articulos.length;
const elemenPorPagina = 10;
let pag = 1;
let totalPaginas = Math.ceil(numElementos / elemenPorPagina);
let pagInicio = (pag - 1) * 10;
let result = [];
let dataFiltered = articulos;
let imageElement = document.getElementById("image");
let idElement = document.getElementById("id");
let nameElement = document.getElementById("nombre");
let cateElement = document.getElementById("categoria");
let mediElement = document.getElementById("medidas");
let precioElement = document.getElementById("precio");
let bannerElement = document.getElementById('banner');

function actualizarInterfaz(muestra, index) {
    const imageElement = document.getElementById(`image${index}`);
    const idElement = document.getElementById(`id${index}`);
    const nameElement = document.getElementById(`nombre${index}`);
    const cateElement = document.getElementById(`categoria${index}`);
    const mediElement = document.getElementById(`medidas${index}`);
    const precioElement = document.getElementById(`precio${index}`);

    imageElement.src = muestra.imagen;
    idElement.textContent = 'ID: '+ muestra.id;
    nameElement.textContent = 'Nombre: ' +  muestra.nombre;
    cateElement.textContent = 'Categoria: ' +  muestra.categoria;
    mediElement.textContent = 'Medidas: ' +  muestra.medidas;
    precioElement.textContent = 'Precio: ' +  muestra.precio;
}

function mostrarElementos() {
    const listaProductos = document.querySelector('.lista__productos');
    result = [];
    
    if (pag === 1) {
        
        document.getElementById('btn_anterior').classList.add("btn_disabled");
        document.getElementById('btn_anterior').disabled = true;
    }

    for (let i = pagInicio; i < pagInicio + elemenPorPagina; i++) {
        const muestra = articulos[i]; 
        result.push(muestra);

      actualizarInterfaz(muestra, i % elemenPorPagina);
    }
    document.getElementById('currentPage').textContent = pag;

}

function siguiente() {
    if (pag < totalPaginas) {
        pag++;
        pagInicio = (pag - 1) * elemenPorPagina;
        mostrarElementos();

        
        document.getElementById('btn_anterior').classList.remove("btn_disabled");
        document.getElementById('btn_anterior').disabled = false;

        
        if (pag === totalPaginas) {
            document.getElementById('btn_siguiente').classList.add("btn_disabled");
            document.getElementById('btn_siguiente').disabled = true;
        }
    } else {
        
        document.getElementById('btn_siguiente').classList.add("btn_disabled");
        document.getElementById('btn_siguiente').disabled = true;
    }
}

function anterior() {
    if (pag === 1) {
        
        document.getElementById('btn_anterior').classList.add("btn_disabled");
        document.getElementById('btn_anterior').disabled = true;
    } else {
        pag--;
        pagInicio = (pag - 1) * elemenPorPagina;
        mostrarElementos();

        
        document.getElementById('btn_siguiente').classList.remove("btn_disabled");
        document.getElementById('btn_siguiente').disabled = false;
    }
}

function filtrarCategoria(categoriaSeleccionada, data){
    const resultCategoria = [];
    for (let i = 0; i < data.length; i++) {
        const muestra = data[i];
        if (muestra.categoria === categoriaSeleccionada) {
            resultCategoria.push(muestra);
        }
    }
    return resultCategoria
}

function filtrarPrecio(valorActivo, data){
    let resultPrecio = [];
    switch (valorActivo) {
        case "rango1":
            resultPrecio = data.filter(producto => parseFloat(producto.precio.replace(/\D/g, '')) <= 2000000);
            break;

        case "rango2":
            resultPrecio = data.filter(producto => parseFloat(producto.precio.replace(/\D/g, '')) > 2000000 && parseFloat(producto.precio.replace(/\D/g, '')) <= 4000000);
            break;

        case "rango3":
            resultPrecio = data.filter(producto => parseFloat(producto.precio.replace(/\D/g, '')) > 4000000 && parseFloat(producto.precio.replace(/\D/g, '')) <= 6000000);
            break;

        case "rango4":
           resultPrecio = data.filter(producto => parseFloat(producto.precio.replace(/\D/g, '')) > 6000000 && parseFloat(producto.precio.replace(/\D/g, '')) <= 8000000);
            break;

        case "rango5":
            resultPrecio = data.filter(producto => parseFloat(producto.precio.replace(/\D/g, '')) > 8000000);
            break;

        default:
            console.log("Error en el rango");
            break;
    }
    return resultPrecio
}
function renderElementsFiltered(data) {
    for (let i = pagInicio; i < pagInicio + elemenPorPagina; i++) {
        const muestra = data[i];
        if (muestra) {
            actualizarInterfaz(muestra, i % elemenPorPagina);
        }
    }
}

function cleanItemData() {
    for (let i = 0; i < 10; i++) {
        const muestra = {
            imagen: 'assets/empty.jpg',
            id: '',
            nombre: '',
            categoria: '',
            medidas: '',
            precio: '',
        }
        actualizarInterfaz(muestra, i % 10);
    }
}

function filtrarProductos(){
    const categoriaSeleccionada = document.getElementById("categor").value;
    const prices = document.getElementsByName('preciofilter');
    let valueChecked = "";
    for (let i = 0; i < prices.length; i++) {
        if (prices[i].checked) valueChecked = prices[i].value;     
    }

    if (categoriaSeleccionada != "") {
        dataFiltered = filtrarCategoria(categoriaSeleccionada, articulos);
        if (valueChecked != "") {
            dataFiltered = filtrarPrecio(valueChecked, dataFiltered);
        }
    }

    if (valueChecked != "" && categoriaSeleccionada === "") {
        dataFiltered = filtrarPrecio(valueChecked, articulos);
    }

    cleanItemData()
    renderElementsFiltered(dataFiltered)  
}
function cleanAll() {
    const radioButtons = document.querySelectorAll('input[name="preciofilter"]');
    document.getElementById("categor").value = "";
    radioButtons.forEach(button => {
        button.checked = false;
    });
    mostrarElementos();  
}

// Mostrando elementos de la lista
mostrarElementos();

/**********************************************************************Sidebar**************************************************************************/
let idActual;
function verDetalles(index) {
    let sidebar = document.getElementById("sidebar");
    let imagen = document.getElementById("image");
    let id = document.getElementById("id");
    let nombre = document.getElementById("nombre");
    let categoria = document.getElementById("categoria");
    let medidas = document.getElementById("medidas");
    let precio = document.getElementById("precio");
    let descripcion = document.getElementById("descripcion");
    let garantia = document.getElementById("garantia");
    let marca = document.getElementById("marca");
    let peso = document.getElementById("peso");
    let stock = document.getElementById("stock");
    console.log("index");
    
    imagen.src = result[index].imagen;
    id.value = result[index].id;
    nombre.value = result[index].nombre;
    categoria.value = result[index].categoria;
    medidas.value = result[index].medidas;
    precio.value = result[index].precio;
    descripcion.value = result[index].descripcion;
    garantia.value = result[index].garantia;
    marca.value = result[index].marca;
    peso.value = result[index].peso;
    stock.value = result[index].stock;
    sidebar.classList.toggle('sidebarActive')
    idActual = result[index].id;

}
function atras() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle('sidebarActive')
}

function promesa() {
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("Cambio Exitoso");
        }, 1500);
    });
}

document.getElementById("id").addEventListener("input", actualizarCampo);
document.getElementById("nombre").addEventListener("input", actualizarCampo);
document.getElementById("categoria").addEventListener("input", actualizarCampo);
document.getElementById("medidas").addEventListener("input", actualizarCampo);
document.getElementById("precio").addEventListener("input", actualizarCampo);
document.getElementById("descripcion").addEventListener("input", actualizarCampo);
document.getElementById("garantia").addEventListener("input", actualizarCampo);
document.getElementById("marca").addEventListener("input", actualizarCampo);
document.getElementById("peso").addEventListener("input", actualizarCampo);
document.getElementById("stock").addEventListener("input", actualizarCampo);

let originalesDatos = {}; 

function actualizarCampo(event) {
    const campoId = event.target.id;
    const originalValor = event.target.value;

    originalesDatos[campoId] = originalValor;
}


function actualizar() {
    let cambios = 
    {
     imagen : document.getElementById("image").src,
     id : document.getElementById("id").value,
     nombre : document.getElementById("nombre").value,
     categoria : document.getElementById("categoria").value,
     medidas : document.getElementById("medidas").value,
     precio : document.getElementById("precio").value,
     descripcion : document.getElementById("descripcion").value,
     garantia : document.getElementById("garantia").value,
     marca : document.getElementById("marca").value,
     peso : document.getElementById("peso").value,
     stock : document.getElementById("stock").value,
    }

    promesa().then(() => {
        let ind = -1;
        for (let i = 0; i < articulos.length; i++) {
            if (articulos[i].id === idActual) {
                ind = i;
                break;
            }
        }

        if (ind !== -1) {
            console.log(articulos);
            console.log(cambios);
            articulos[ind] = { ...cambios };  
            console.log(articulos);
            atras();
            mostrarElementos();
            
        } else {
            console.error("Error: Elemento no encontrado en el array.");
        }
    }).catch((error) => {
        console.error(error);
    });
}

