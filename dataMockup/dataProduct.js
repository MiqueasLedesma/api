const { Product } = require("../server/database/db")

const createProducts = async () => {
    await Product.bulkCreate([
        {
            name: "Teclado Mecanico ASUS ROG Strix Scope TKL RGB Cherry Red",
            description: "1er teclado",
            purchasePrice: 19.99,
            salePrice: 29.99,
            stock: 10,
            rating: 0,
            brandId: 3,
            categoryId: 8
        },
        {
            name: "Teclado Mecanico HP HyperX Alloy Origins 60 HX Switch Aqua",
            description: "Teclado Mecanico HP HyperX Alloy Origins 60 HX Switch Aqua",
            purchasePrice: 20,
            salePrice: 29.99,
            stock: 5,
            rating: 0,
            brandId: 9,
            categoryId: 8
        },
        {
            name: "Monitor LG Curvo UltraWide 34' 34WL85C-B QHD IPS 21:9",
            description: "Monitor LG Curvo UltraWide 34' 34WL85C-B QHD IPS 21:9",
            purchasePrice: 150,
            salePrice: 189.99,
            stock: 8,
            rating: 0,
            brandId: 10,
            categoryId: 7
        },
        {
            name: "Monitor Gamer ASUS 24",
            description: "Monitor Gamer ASUS ROG SWIFT 24' PG259QNR 360Hz 1Ms G-Sync",
            purchasePrice: 135,
            salePrice: 150,
            stock: 20,
            rating: 0,
            brandId: 3,
            categoryId: 7
        },
        {
            name: "Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler",
            description: "Modelo Ryzen 5 1600 AF, Socket AM4 Ryzen 2th Gen, Núcleos 6,Frecuencia 3200.00 mhz, Proceso De Fabricación 12 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 12, Frecuencia Turbo 3600 mhz, Familia AMD RYZEN 5",
            purchasePrice: 90,
            salePrice: 120,
            stock: 2,
            rating: 0,
            brandId: 2,
            categoryId: 3
        },
        {
            name: "Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4 - No incluye Cooler",
            description: "Modelo 5800X, Socket AM4 Ryzen 4th Gen, Núcleos 8, Frecuencia 3800.00 mhz, Proceso De Fabricación 7 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 16, Frecuencia Turbo 4700 mhz, Familia AMD RYZEN 7",
            purchasePrice: 200,
            salePrice: 240,
            stock: 1,
            rating: 0,
            brandId: 2,
            categoryId: 3
        },
        {
            name: "Procesador Intel Core i3 10100F 4.3GHz Turbo 1200 Comet Lake",
            description: "Modelo 10100F, Socket 1200 Comet Lake, Núcleos 4, Frecuencia 3600.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 8, Frecuencia Turbo 4300 mhz, Familia Intel Core i3",
            purchasePrice: 80,
            salePrice: 110,
            stock: 10,
            rating: 0,
            brandId: 1,
            categoryId: 3
        },
        {
            name: "Procesador Intel Core i5 10400F 4.3GHz Turbo 1200 Comet Lake",
            description: "Modelo Core i5 10400F, Socket 1200 Comet Lake, Núcleos 6, Frecuencia 2900.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 12, Frecuencia Turbo 4300 mhz, Familia Intel Core i5",
            purchasePrice: 120,
            salePrice: 159.99,
            stock: 0,
            rating: 0,
            brandId: 1,
            categoryId: 3
        },
        {
            name: "Procesador Intel Core i7 10700F 4.8GHz Turbo Socket 1200 Comet Lake",
            description: "Modelo 10700F, Socket 1200 Comet Lake, Núcleos 8, Frecuencia 2900.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 16, Frecuencia Turbo 4800 mhz, Familia Intel Core i7",
            purchasePrice: 250,
            salePrice: 299.99,
            stock: 10,
            rating: 0,
            brandId: 1,
            categoryId: 3
        },
        {
            name: "Mother Asrock A320M-HDV R4.0 Ryzen M-ATX",
            description: "Socket AM4 A-Series,AM4 APU 1th Gen,AM4 APU 2th Gen,AM4 Ryzen 1th Gen,AM4 Ryzen 2th Gen,AM4 Ryzen 3th Gen,AM4 Ryzen 4th Gen, Chipsets Principal AMD A320, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X, Watts Máximos Para Cpu 105, Placa De Sonido 7.1 CH HD Audio (Realtek ALC887 Audio Codec)",
            purchasePrice: 45,
            salePrice: 60,
            stock: 20,
            rating: 0,
            brandId: 2,
            categoryId: 1
        },
        {
            name: "Mother ASUS PRIME A520M-K AM4",
            description: "Socket AM4 Ryzen 3th Gen,AM4 APU 3th Gen,AM4 Ryzen 4th Gen,AM4 APU 5000, Chipsets Principal AMD A520, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 1, Watts Máximos Para Cpu 105, Placa De Sonido 7.1 Realtek ALC 887",
            purchasePrice: 100,
            salePrice: 120,
            stock: 10,
            rating: 0,
            brandId: 3,
            categoryId: 1
        },
        {
            name: "Mother ASUS TUF GAMING B550-PLUS WIFI II AM4",
            description: "Socket AM4 APU 3th Gen,AM4 APU 5000,AM4 Ryzen 3th Gen,AM4 Ryzen 4th Gen, Chipsets Principal AMD B550, Boton Bios Flashback Si, Cantidad De Slot Pci-e 16X 2, Watts Máximos Para Cpu 105, Placa De Sonido 7.1 Realtek ALC 1200",
            purchasePrice: 120,
            salePrice: 150,
            stock: 5,
            rating: 0,
            brandId: 3,
            categoryId: 1
        },
        {
            name: "Mother Gigabyte B560M DS3H V2",
            description: "Socket 1200 Rocket Lake-S,1200 Comet Lake, Chipsets Principal Intel B560, Boton Bios Flashback No, Watts Máximos Para Cpu 125, Placa De Sonido 7.1 Realtek ALC 897, Sistema De Conexión Rgb ARGB Header,RGB Header",
            purchasePrice: 60,
            salePrice: 89.99,
            stock: 5,
            rating: 0,
            brandId: 5,
            categoryId: 1
        },
        {
            name: "Mother ASUS PRIME B560M-A S1200 11th Gen PCIe 4.0 ",
            description: "Socket 1200 Rocket Lake-S,1200 Comet Lake, Chipsets Principal Intel B560, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2, Watts Máximos Para Cpu 235, Placa De Sonido 7.1 Realtek ALC 897",
            purchasePrice: 100,
            salePrice: 120,
            stock: 10,
            rating: 0,
            brandId: 3,
            categoryId: 1
        },
        {
            name: "Placa de Video ASUS GeForce GTX 1660 TI 6GB GDDR6 TUF EVO OC",
            description: "Tipo pcie, Chipset Gpu GTX 1660 Ti, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Velocidad Memoria 14000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 6 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 1845 mhz, Tipos De Procesos CUDA, Cantidad De Procesos 1536",
            purchasePrice: 150,
            salePrice: 199.99,
            stock: 15,
            rating: 0,
            brandId: 3,
            categoryId: 6
        },
        {
            name: "Placa de Video ASUS GeForce RTX 3060 12GB GDDR6 ROG STRIX GAMING OC V2 LHR",
            description: "Tipo pcie, Chipset Gpu RTX 3060, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Características Especiales Ray Tracing + DLSS, Velocidad Memoria 15000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 12 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 1912 mhz, Tipos De Procesos CUDA, Cantidad De Procesos 3584",
            purchasePrice: 290,
            salePrice: 350,
            stock: 5,
            rating: 0,
            brandId: 3,
            categoryId: 6
        },
        {
            name: "Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X TUF GAMING OC",
            description: "Tipo pcie, Chipset Gpu RTX 3090, Entrada Video No, Puente Para Sli/croosfirex SLI, Doble Puente No, Características Especiales, Ray Tracing + DLSS, Velocidad Memoria 19500 mhz, Tipo De Memoria GDDR6X, Capacidad De Memoria 24 gb, Interface De Memoria 384 bits, Velocidad Del Core Turbo 1770 mhz, Tipos De Procesos CUDA, Cantidad De Procesos 10496",
            purchasePrice: 350,
            salePrice: 425,
            stock: 0,
            rating: 0,
            brandId: 3,
            categoryId: 6
        },
        {
            name: "Memoria Kingston DDR4 16GB 3200Mhz Fury Beast RGB Cl16",
            description: "Capacidad 16 gb, Velocidad 3000 mhz, Tipo DDR4, Cantidad De Memorias 1, Latencia 16 cl, Voltaje 1.35 v",
            purchasePrice: 130,
            salePrice: 169.99,
            stock: 10,
            rating: 0,
            brandId: 6,
            categoryId: 2
        },
        {
            name: "Memoria Adata DDR4 8GB 3200MHz XPG GAMMIX D10 Black",
            description: "Capacidad 8 gb, Velocidad 3200 mhz, Tipo DDR4, Cantidad De Memorias 1, Latencia 16 cl, Voltaje 1.35 v",
            purchasePrice: 30,
            salePrice: 49.99,
            stock: 0,
            rating: 0,
            brandId: 1,
            categoryId: 2
        },
        {
            name: "Disco Rígido WD 2TB BLACK 64MB SATA 6.0GB/s",
            description: "Tipo De Conexión SATA, Consumo 35 w, Tipo De Disco Mecánico, Memoria Cache 64 mb, Velocidad De Rotación 7200 rpm, Velocidad De Interface 6.0, Capacidad 2000 gb",
            purchasePrice: 25,
            salePrice: 59.99,
            stock: 10,
            rating: 0,
            brandId: 7,
            categoryId: 4
        },
        {
            name: "Disco Rígido WD 1TB BLUE 64MB SATA 6.0GB/s",
            description: "Tipo De Conexión SATA, Consumo 30 w, Tipo De Disco Mecánico, Memoria Cache 64 mb, Velocidad De Rotación 7200 rpm, Velocidad De Interface 6.0, Capacidad 1000 gb",
            purchasePrice: 20,
            salePrice: 40,
            stock: 20,
            rating: 0,
            brandId: 7,
            categoryId: 4
        },
        {
            name: "Disco Solido SSD Kingston 120GB S280 500Mb/s",
            description: "Tipo De Conexión SATA, Consumo 3 w, Tipo De Disco Solido, Memoria Cache 128 mb, Velocidad De Rotación 0 rpm, Velocidad De Interface 0.0, Capacidad 120 gb",
            purchasePrice: 15,
            salePrice: 24.99,
            stock: 8,
            rating: 0,
            brandId: 6,
            categoryId: 4
        },
        {
            name: "Gabinete ASUS TUF GT501 Vidrio Templado White 3x120mm ARGB",
            description: "Factor Mother ITX,M-ATX,ATX,E-ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Vidrio templado, Colores Blanco, Ancho 251 mm, Alto 552 mm, Profundidad 545 mm, Largo Máximo Vga 420 mm, Altura Máxima Del Cooler Cpu 180.00 mm",
            purchasePrice: 80,
            salePrice: 120,
            stock: 7,
            rating: 0,
            brandId: 3,
            categoryId: 5
        },
        {
            name: "Gabinete Cougar Conquer 2",
            description: "Factor Mother ITX,M-ATX,ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Acrílico, Colores Negro, Ancho 190 mm, Alto 410 mm, Profundidad 470 mm, Largo Máximo Vga 380 mm, Altura Máxima Del Cooler Cpu 160.00 mm",
            purchasePrice: 130,
            salePrice: 169.99,
            stock: 0,
            rating: 0,
            brandId: 8,
            categoryId: 5
        },
        {
            name: "Cooler CPU ASUS ROG STRIX LC 240 RGB White",
            description: "Soporte de socket de CPU para AMD AM4, TR4*; Intel 115x, 1366, 2011, 2011-3, 2066. * El soporte de montaje de enchufe Tr4 se incluye con el paquete de CPU TR4 de AMD.. Flujo de aire - 81 CFM. Nivel de ruido: 37,6 decibelios ",
            purchasePrice: 19.99,
            salePrice: 50,
            stock: 10,
            rating: 0,
            brandId: 3,
            categoryId: 9
        },
    ])
}

module.exports = { createProducts };