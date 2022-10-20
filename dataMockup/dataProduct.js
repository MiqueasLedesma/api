const { Product } = require("../server/database/db")

let arr = [
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
    {
        name: "Procesador Intel Core i7 12700K 5.0GHz Turbo Socket 1700 ",
        description: "Modelo 12700K, Socket 1700, Alder Lake-S, Núcleos 12, Frecuencia 2700.00 mhz, Proceso De Fabricación 10 nm, Chipset, Gpu UHD Graphics 770, Hilos 20, Frecuencia Turbo 5000 mhz, Familia Intel Core i7 ",
        purchasePrice: 350,
        salePrice: 425,
        stock: 20,
        rating: 0,
        brandId: 1,
        categoryId: 3
    },
    {
        name: "Intel Core i9-9900K Procesador de escritorio 8 núcleos hasta 5.0 GHz",
        description: "Intel Core i9-9900K Procesador de escritorio 8 núcleos hasta 5.0 GHz Turbo desbloqueado LGA1151 300 Series 95W,  8 núcleos / 16 hilos, 3.60 GHz hasta 5.00 GHz, caché de 16 MB, Compatible solo con placas base basadas en chipsets Intel 300 Series, Intel Compatible con memoria Optane,Intel Gráficos UHD 630 ",
        purchasePrice: 650,
        salePrice: 720,
        stock: 5,
        rating: 0,
        brandId: 1,
        categoryId: 3
    },
    {
        name: "Procesador AMD Ryzen 9 7950X 5.7GHz AM5 - No incluye Cooler - C/Video",
        description: "Modelo Ryzen 9 7950X, Socket AM5 Ryzen 7000, Núcleos 16, Frecuencia 4500.00 mhz, Proceso De Fabricación 5 nm, Chipset Gpu AMD Radeon Graphics, Hilos 32,Frecuencia Turbo 5700 mhz, Familia AMD RYZEN 9 ",
        purchasePrice: 300,
        salePrice: 399.99,
        stock: 5,
        rating: 0,
        brandId: 1,
        categoryId: 3
    },
    {
        name: "Placa de Video MSI Radeon RX 6700 XT 12GB GDDR6 MECH 2X",
        description: "Chipset Gpu RX 6700 XT, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Características Especiales Ray Tracing, Velocidad Memoria 16000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 12 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 2581 mhz, Tipos De Procesos Stream, Cantidad De Procesos 2560",
        purchasePrice: 340,
        salePrice: 400,
        stock: 10,
        rating: 0,
        brandId: 4,
        categoryId: 6
    },
    {
        name: "Mother MSI H310M PRO-VDH",
        description: "Socket 1151 Coffe Lake,Chipsets Principal Intel H310, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2, Cantidad De Slot Ddr4 2, Placa De Sonido 7.1 Realtek ALC 887",
        purchasePrice: 40,
        salePrice: 65,
        stock: 20,
        rating: 0,
        brandId: 4,
        categoryId: 1
    },
    {
        name: "Mother MSI PRO B660M-A DDR4 s1700",
        description: "Plataforma Intel, Socket 1700 Alder Lake-S, Chipsets Principal Intel B660, Boton Bios Flashback No ",
        purchasePrice: 120,
        salePrice: 150,
        stock: 1,
        rating: 0,
        brandId: 4,
        categoryId: 1
    },
    {
        name: "Disco Solido SSD M.2 KINGSTON NV1 250GB 2100MB/s NVMe",
        description: "Tipo De Conexión M2, Consumo 2 w, Tipo De Disco Sólido ",
        purchasePrice: 25,
        salePrice: 39.99,
        stock: 30,
        rating: 0,
        brandId: 6,
        categoryId: 4
    },
    {
        name: "Monitor Gamer Gigabyte 27 Edge G27QC-SA Curvo 165Hz 1ms",
        description: "Pantalla VA de 27 pulgadas de 2560 x 1440 con tasa de actualización de 165Hz, tiempo de respuesta de 1 ms (MPRT), curvatura nativa 1500R. Juego suave con sincronización adaptativa, preparado para HDR de grado de estudio y gama de colores DCI-P3 del 88% (132% sRGB). Características tácticas clásicas de GIGABYTE con OSD Sidekick",
        purchasePrice: 250,
        salePrice: 305,
        stock: 5,
        rating: 0,
        brandId: 5,
        categoryId: 7
    },
    {
        name: "Mother Gigabyte Z590 Vision G Socket 1200 10th Gen",
        description: "Plataforma Intel, Socket 1200 Rocket Lake-S,1200 Comet Lake, Chipsets Principal Intel Z590, Boton Bios Flashback Si, Placa De Sonido 7.1 Realtek ALC 4080 ",
        purchasePrice: 180,
        salePrice: 220,
        stock: 7,
        rating: 0,
        brandId: 5,
        categoryId: 1
    },
    {
        name: "Mother GIGABYTE B660M AORUS PRO DDR4 S1700",
        description: "Plataforma Intel, Socket 1700 Alder Lake-S, Chipsets Principal Intel B660, Placa De Sonido Realtek 7.1 CODEC, Tecnología Multi Gpu Crossfire ",
        purchasePrice: 105,
        salePrice: 150,
        stock: 15,
        rating: 0,
        brandId: 5,
        categoryId: 1
    },
    {
        name: "Memoria Adata DDR4 (2x8GB) 16GB 5000MHz XPG Spectrix D50 Xtreme RGB CL19",
        description: "Capacidad 16 gb, Velocidad 5000 mhz, Tipo DDR4, Cantidad De Memorias 2, Latencia 19 cl, Voltaje 1.50 v ",
        purchasePrice: 100,
        salePrice: 130,
        stock: 10,
        rating: 0,
        brandId: 11,
        categoryId: 2
    },
    {
        name: "Disco Sólido SSD M.2 ADATA 2TB XPG Spectrix S40G RGB 3500MB/s NVMe PCI-E X4",
        description: "Tipo De Conexión M2, Consumo 5 w, Tipo De Disco Sólido, Capacidad 2000 gb, Terabytes Written 1280 tb",
        purchasePrice: 150,
        salePrice: 199.99,
        stock: 5,
        rating: 0,
        brandId: 11,
        categoryId: 4
    },
    {
        name: "Disco Sólido SSD Adata 960GB SU650 520MB/s",
        description: "Tipo De Conexión SATA, Consumo 3 w, Tipo De Disco Sólido , Capacidad 960 gb,Terabytes Written 560 tb",
        purchasePrice: 50,
        salePrice: 80,
        stock: 10,
        rating: 0,
        brandId: 11,
        categoryId: 4
    },
    {
        name: "Teclado HP HyperX Alloy CORE RGB LA",
        description: "Tipo De Teclado Completo, Idioma Español, Distribución Latinoamerica, Color Negro, Tipo De Mecanismo Membrana, Material Plástico ",
        purchasePrice: 25,
        salePrice: 40,
        stock: 30,
        rating: 0,
        brandId: 9,
        categoryId: 8
    },
    {
        name: "Monitor LG LCD 49 49WL95C Curvo Ultra Wide DUAL QHD",
        description: "Monitor UltraWide™ Dual QHD (5120 x 1440), Controlador Dual PBP, 3PBP, USB Type-C™, 2 altavoces estéreo de 10 W / Rich Bass, HDR 10Base ajustable en altura, inclinación y giro",
        purchasePrice: 400,
        salePrice: 510,
        stock: 5,
        rating: 0,
        brandId: 10,
        categoryId: 7
    },
    {
        name: "Monitor LG 24 24MK600M IPS Full HD Bordes Ultra Finos",
        description: "Pantalla IPS Full HD, Calibración del color, Diseño prácticamente sin bordes en los 3 lados, Radeon FreeSync™, OnScreen Control, Posibilidad de montar en la pared",
        purchasePrice: 150,
        salePrice: 189.99,
        stock: 15,
        rating: 0,
        brandId: 10,
        categoryId: 7
    },
    {
        name: "Disco Rigido WD 14TB Red Pro 7.2K RPM 512MB",
        description: "Tipo De Conexión SATA, Consumo 10 w, Tipo De Disco Mecánico ",
        purchasePrice: 110,
        salePrice: 150,
        stock: 10,
        rating: 0,
        brandId: 7,
        categoryId: 4
    },
    {
        name: "Disco Sólido SSD WD 480GB GREEN 545MB/s SATA",
        description: "Tipo De Conexión SATA, Consumo 30 w, Tipo De Disco Sólido, Memoria Cache 64 mb",
        purchasePrice: 35,
        salePrice: 50,
        stock: 30,
        rating: 0,
        brandId: 7,
        categoryId: 4
    },

    {
        name: "Cooler Cougar FORZA 50",
        description: "Como enfriador de torre de CPU para CPU de nivel de entrada, Forza 50 con su cubierta frontal de diseño único, junto con el ventilador de alto rendimiento COUGAR MHP120, brinda a los usuarios una disipación de calor perfecta. Forza 50 es absolutamente adecuado para usuarios de configuración predeterminada.",
        purchasePrice: 50,
        salePrice: 80,
        stock: 20,
        rating: 0,
        brandId: 8,
        categoryId: 9
    },
    {
        name: "Cooler Cougar FORZA 75",
        description: "Como enfriador de aire de torre única para CPU de nivel medio/alto, Forza 85 con su cubierta frontal de diseño único, junto con el ventilador de alto rendimiento COUGAR MHP120, brinda a los usuarios un equilibrio óptimo entre un funcionamiento ultra silencioso y una refrigeración extrema. Forza 85 está absolutamente diseñado para la mayoría de los usuarios de rendimiento. (ajuste de overclock menor capaz)",
        purchasePrice: 80,
        salePrice: 130,
        stock: 10,
        rating: 0,
        brandId: 8,
        categoryId: 9
    },
    // {
    //     name: "Procesador AMD Ryzen 3 3200G 4 núcleos 4 GHz",
    //     description: "AMD Ryzen 3 3200G 2th gen RAM DDR4, Frecuencia mínima y maxima de reloj de 3.6 GHz a 4 GHz, Tipos de memoria RAM soportadas: DDR4 , Cantidad de núcleos de CPU: 4, Zócalos compatibles: AM4, Caché 4 MB, Procesador gráfico Radeon Vega 8 Graphics, Cantidad de núcleos de CPU: 2, Cantidad de hilos de CPU: 4",
    //     purchasePrice: 500,
    //     salePrice: 700,
    //     stock: 10,
    //     rating: 0,
    //     brandId: 2,
    //     categoryId: 3
    // },
    // {
    //     name: "Procesador Amd Ryzen 5 4600G 4.2 Ghz - AM4",
    //     description: "Marca AMD, Línea Ryzen 5, Modelo 4600 GP/N 100-100000147BOX, UPC 730143313940, GPU integrado, AMD Radeon Integrado, Caché 8 MB, Cantidad de núcleos de CPU 6, Hilos 12, Tipos de memoria RAM soportadas DDR4, Socket AM4, Frecuencia mínima de reloj 3,7 GHz, Frecuencia máxima de reloj 4,2 GHz, Desbloqueado para OC Si, Accesorios incluidos Air cooler, TDP 65W",
    //     purchasePrice: 400,
    //     salePrice: 600,
    //     stock: 8,
    //     rating: 0,
    //     brandId: 2,
    //     categoryId: 3
    // },
    // {
    //     name: "LG 32GP850-B",
    //     description: "Monitor gaming LG UltraGear (2560x1440p, 350cd/m², 1000:1, 1ms, 165Hz, DCI-P3 98%); diag. 80cm; entradas: HDMI x2, DP x1, USB-A x3; NVIDIA G-Sync™ Compatible, FreeSync™ Premium.",
    //     purchasePrice: 80,
    //     salePrice: 120,
    //     stock: 15,
    //     rating: 0,
    //     brandId: 10,
    //     categoryId: 6
    // },
    // {
    //     name: "Monitor LG 20' LED/FHD/HDMI 50 - 75Hz",
    //     description: "Mayor productividad hasta en 4 pantallas con el modo Screen Split Multipantalla Protección antiparpadeo, y óptimo para leer en pantalla gracias al Modo Lectura 16.7M colores de profundidad para imágenes más naturales Opciones de color customizadas a un solo click Estabilizador de Negros, que permite colores oscuros más diferenciados",
    //     purchasePrice: 50,
    //     salePrice: 60,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 10,
    //     categoryId: 6
    // },
    // {
    //     name: "MEMORIA RAM DDR5 32GB 5600MHZ CORSAIR VENGEANCE 2X16",
    //     description: "Tipo de memoria: DDR5 Tipo PMIC Overclock: PMIC Tamaño de la memoria: 32 GB (2 x 16 GB) Módulos: 2 Latencia probada: 36-36-36-76 Voltaje probado: 1.25 Velocidad probada: 5600 Color de la memoria: NEGRO Latencia SPD: 40-40-40-77 Velocidad SPD :4800MHz Voltaje SPD: 1.1V Difusor de calor: Aluminio Formato de memoria del paquete: DIMM",
    //     purchasePrice: 800,
    //     salePrice: 1050,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 8,
    //     categoryId: 2
    // },
    // {
    //     name: "MEMORIA RAM DDR5 KINGSTON FURY BEAST 32GB 4800MHZ 2X16",
    //     description: "Módulos 2 (2 x 16Gb) Capacidad 32Gb Frecuencia 4800 MHz Latencias CL38 Voltaje 1,1 V Temperatura de servicio 0 °C a 85 °C Dimensiones 133,35 mm x 34,9 mm x 6,62 mm Tipo DDR5",
    //     purchasePrice: 800,
    //     salePrice: 1050,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 6,
    //     categoryId: 2
    // },
    // {
    //     name: "Cooler Master HyperX 212 EVO V2 CPU Air Cooler",
    //     description: "Evite que su CPU se sobrecaliente con el enfriador de aire para CPU Hyper 212 EVO V2 de Cooler Master. Con tecnología de contacto directo, cuatro tubos de calor y un disipador de calor de aluminio, este enfriador de CPU está diseñado para un enfriamiento eficiente. Un ventilador SickleFlow de 120 mm con control PWM proporciona hasta 62 CFM de flujo de aire a velocidades de 650 a 1800 rpm",
    //     purchasePrice: 28,
    //     salePrice: 45,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 9,
    //     categoryId: 9
    // },
    // {
    //     name: "GABINETE MSI MAG VAMPIRIC 010 TG ARGB",
    //     description: "Presentamos el chasis MAG VAMPIRIC 010M gaming, inspirado por el duque de la noche, Drácula. Con una combinación de negro y gris, es tan calmo y misterioso como el castillo. El arco frontal de doble borde simboliza la medalla de honor, que puede ser proyectada con la iluminación RGB y muestra el bajo perfil y las características claras del personaje. -Factor de forma: Torre mediana -Dimensiones: 420(D) x 210(W) x 475(H) mm -Peso: 7.4 KG -Puertos e / s: 1 x USB 3.2 Gen 2 + 2 x USB 2.0 + HD Audio / Mic -Driver bays: 2 x 3.5 (compatible con 2.5”) + 2 x 2.5 -Ranuras de expansión: 6 -Ventilador preinstalado: 1 ventilador de 120mm ARGB LED incluido -Longitud máxima de gpu: 350 mm -Longitud máxima del enfriador de la cpu: 167 mm -Compatibilidad del radiador: 120 / 140 / 240 / 280 mm -Fuente de alimentación: ATX estándar -Distribución radiador: Frontal: hasta 360 mm Superior: hasta 240 mm Posterior: 1 x 120 mm",
    //     purchasePrice: 28,
    //     salePrice: 350,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 4,
    //     categoryId: 5
    // },
    // {
    //     name: "MSI MAG CORELIQUID 360R V2 Cooler",
    //     description: "El enfriador MSI MAG CORELIQUID 360R V2 tiene todo lo que busca en un enfriador líquido, desde materiales de calidad que brindan una durabilidad confiable hasta tecnologías de disipación de calor que son extremadamente efectivas. Los usuarios pueden incluso disfrutar de ventajas como la iluminación ARGB y un cabezal giratorio de 270 grados que es fácil de usar.",
    //     purchasePrice: 28,
    //     salePrice: 120,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 9,
    //     categoryId: 5
    // },
    // {
    //     name: "MEMORIA RAM Kingston DDR4 16GB 3000MHZ ADATA XPG SPECTRIX D60G RGB 2X8",
    //     description: "El módulo de memoria D60G está fabricado con chips de alta calidad y un disipador de calor metálico que proporciona una integridad, confiabilidad y estabilidad de la señal excelentes, lo que prolonga de manera efectiva la vida útil de dicho módulo.​ Especificaciones: Model DDR4-3000 Speed PC4-24000 Size 8GB x 2 Latency CL16-20-20 Voltage 1.35V Heat Sink Color Tungsten Grey",
    //     purchasePrice: 28,
    //     salePrice: 599,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 6,
    //     categoryId: 2
    // },
    // {
    //     name: "TECLADO COUGAR K120 USB",
    //     description: "Modelo: K120 Color: Negro. Tipo de teclado: Estándar. Interfaz: USB. Conexión: Con cable. Compatibilidad: Windows 8 / Windows 7 / Vista / XP.Modelo: K120 Color: Negro. Tipo de teclado: Estándar. Interfaz: USB. Conexión: Con cable. Compatibilidad: Windows 8 / Windows 7 / Vista / XP.Modelo: K120 Color: Negro. Tipo de teclado: Estándar. Interfaz: USB. Conexión: Con cable. Compatibilidad: Windows 8 / Windows 7 / Vista / XP.",
    //     purchasePrice: 28,
    //     salePrice: 3500,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 8,
    //     categoryId: 8
    // },
    // {
    //     name: "Cooler Master HyperX 212 EVO V2 CPU Enfriador De Aire SickleFlow 120 V2 PWM Ventilador 4",
    //     description: "Cooler Master ha revivido el legendario Hyper 212 EVO con importantes mejoras. Actualizado con un diseño de tubo de calor asimétrico, ahora proporciona 100. La estatura más fría también se ha acortado, lo que hace que la compatibilidad de la carcasa sea aún mejor. La tecnología de contacto directo exclusiva de Cooler Master, junto con el nuevo ventilador SickleFlow 120, ofrece el mejor equilibrio entre rendimiento de refrigeración y funcionamiento silencioso. Además, se han mejorado los soportes universale",
    //     purchasePrice: 28,
    //     salePrice: 42,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 9,
    //     categoryId: 9
    // },
    // {
    //     name: "PLACA DE VIDEO MSI GEFORCE GT 710 1GB DDR3",
    //     description: "MSI GT 710 Temperaturas más bajas y mayor eficiencia. Extrema baja ESR. Sin ruido. El gran disipador de calor cubre el área de la GPU y la memoria. Proporcionando el mejor entorno para juegos y multimedia. El diseño de bajo perfil ahorra más espacios. El usuario puede construir un sistema delgado o más pequeño. Afterburner Overclocking Utility. Admite la grabación de video en el juego. Soporte de control inalámbrico por dispositivos de mano Android / iOS. Soporta la prueba de efecto DX12 incorporada. Especificaciones Motor de gráficos. Adaptador gráfico, RAMDAC: 400 MHz. Resolución. Resolución (máxima digital): 4096 x 2160 pixeles. Memoria. Tipo de memoria: DDR3 - SDRAM. Tamaño de memoria: 1024. Bus de memoria: 64-bit. Dimensiones y Peso. Dimensió del producto: 14,7 x 2 x 7 cm. Peso: 200 g. Otras caracteristicas. Frecuencia del procesador: 954 MHz. Tipo de interfaz: PCI Express x16 2.0. Factor de forma: LP/ATX. Color: Negro. Plataforma de hardware: PC. PCI Express: 2.0 - 1 GB.",
    //     purchasePrice: 28,
    //     salePrice: 1600,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 4,
    //     categoryId: 7
    // },
    // {
    //     name: "TECLADO MSI VIGOR GK50 MECANICO RGB KAILH LOW PROFILE",
    //     description: "NOMBRE DEL MODELO VIGOR GK50 DE PERFIL BAJO TECLADO INTERFAZ DE TECLADO USB 2.0 LUZ DE FONDO Luz mística RGB por tecla SISTEMA OPERATIVO Windows 10 / 8.1 / 8/7 Accesorios 1x Extractor de llaves 2x teclas convexas (CTRL y ALT) PESO (PRODUCTO / PAQUETE) 700 g / 1200 g DIMENSIONES DEL PRODUCTO (MM) 435 x 141 x 34 mm ROTACIÓN DE N-KEY ROTACIÓN DE N-KEY Anti-Ghosting de teclas completas VIDA CLAVE 50+ Millones CABLE 1.8m con conector dorado TECLAS NORMALES 104/105/109 teclas (diferentes por idiomas) INTERRUPTORES DE LLAVE PRINCIPALES Interruptores de perfil bajo Kailh",
    //     purchasePrice: 28,
    //     salePrice: 500,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 4,
    //     categoryId: 9
    // },
    // {
    //     name: "GABINETE MSI ESSENSES BZE30 TG CON 3 COOLERS RGB",
    //     description: "-Compatible Con: Mothers Mini-Atx / Micro Atx / Atx -Coolers: 3 Frontales Luces Rgb -Incluye: Controladora Rgb + Control Remoto -Acrilico: Lateral Y Frontal -Panel Frontal: Con Salida Microfono Y Auriculares -Tipo de estructura: Mid tower -Puertos: USB 3.0 -Bahías: 2.5,3.5 -Altura x Ancho x Largo: 43 cm x 19 cm x 23 cm",
    //     purchasePrice: 28,
    //     salePrice: 300,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 4,
    //     categoryId: 5
    // },
    // {
    //     name: "GAMING KIT TECLADO Y MOUSE HYPERX PULSEFIRE & ALLOY CORE RGB",
    //     description: "Exclusiva barra de luz y efectos de iluminación dinámicos RGB Estructura duradera y sólida Teclas silenciosas y rápidas, con funcionalidad anti-ghosting Resistente a los derrames1 Controles multimedia especiales Botones de acceso rápido para brillo, modos de luz y modo Juego Modo de bloqueo del teclado , Sensor óptico Pixart 3327 con DPI nativo hasta 6.200. Cómodo diseño simétrico Siete botones programables Fácil personalización con el software HyperX NGenuity Patines de ratón grandes para un deslizamiento suave y controlado.",
    //     purchasePrice: 28,
    //     salePrice: 749,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 9,
    //     categoryId: 8
    // },
    // {
    //     name: "MONITOR 32 LED LG 32GP850-B QHD 165HZ",
    //     description: "PANTALLA Tamaño (pulgadas): 31.5 Resolución: 2560 x 1440 (QHD) Tecnología Retroiluminación: LED HDR 10: SÍ Efecto HDR: SÍ Tecnología Nano IPS™: SÍ Color Calibrado (de fábrica): SÍ roteccion Antiparpadeo (FlickerSafe): SÍ Tecnología BlackStabilizer (Estabilizador de Negros): SÍ Tecnología DynaMic Action Sync: SÍ Crosshair (Cruceta Shooter): SÍ Modo Lectura: SÍ CONECTIVIDAD D-Sub (VGA, 15-pin Analógica): NO DVI: NO HDMI: SÍ (x2) HDMI Version: 2.0 DisplayPort: SÍ (x1) Versión DisplayPort: 1.4 USB de entrada (Tipo A o Tipo B): SÍ (x1) [ver 3,0] SONIDO Entrada de Audio (PC IN): NO Entrada de Micrófono: NO Salida para Auriculares: SI ALIMENTACIÓN Tipo de Alimentación: Alimentación Externa (Adaptador a Red) Consumo de Potencia (Máx.): 65W CARACTERÍSTICAS FÍSICAS/MECANICAS Diseño sin Bordes: 3-Side Virtually Borderless Design (Diseño de Marcos Ultrafinos) Inclinación (eje H): -5 ~ +15º Dimensiones [sin peana] (Ancho x Alto x Prof.) (mm): 714x428x50.9 Dimensiones [embalado] (Ancho x Alto x Prof.) (mm): 793x227x557 Interruptor mecánico de Encendido: NO.",
    //     purchasePrice: 28,
    //     salePrice: 749,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 10,
    //     categoryId: 6
    // },
    // {
    //     name: "MONITOR 27 GIGABYTE AORUS FI27Q IPS QHD 1MS",
    //     description: "Tamaño del panel (diagonal) 27 Área de visualización de pantalla (HxV) 596.736 x 335.664 (mm) Luz de fondo del panel/ Tipo ELED/IPS Superficie de visualización (antideslumbrante/deslumbrante) Antideslumbrante Saturación de color 95% de DCI-P3 Resolución verdadera 2560 x 1440 (QHD) Tamaño de píxel 0,2331 (Al) x 0,2331 (V) (mm) Brillo 350 cd/m2 (TIPO) Relación de contraste 1000: 1 (TIPO) Relación de contraste dinámico 12M:1 Ángulo de visión 178°(H)/178°(V) Colores de pantalla 1.073G Tiempo de respuesta 1 ms (MPRT) Sin destellos SÍ Conectividad HDMI 2.0 x2, puerto de pantalla 1.4 x1 (HBR3) Enchufe de audífonos Sí puerto(s) USB x2 Tipo de energía incorporado Entrada de CA máx. 90W Modo de ahorro de energía 0.5W Modo de apagado 0.3W Voltaje CA 100 V ~ 240 V Ángulo de inclinación) -5∘~+21∘ Giratorio (ángulo) -20∘~+20∘ Pivote (ángulo/dirección) +90∘ Ajuste de altura (mm) 130 mm Montaje en pared VESA (mm) 100*100mm cerradura Kensington Sí física Dimensión con soporte (ancho x alto x profundidad) W614.9 * H565.9 * D236.9mm física Dimensión sin soporte (WxHxD) W614.9*H371.1*D60mm Dimensiones de la caja (An. x Al. x Pr.) W720*H565*D279mm",
    //     purchasePrice: 28,
    //     salePrice: 1200,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 5,
    //     categoryId: 6
    // },
    // {
    //     name: "DISCO SOLIDO SSD 480GB GIGABYTE SATA III GP-GSTF",
    //     description: "Factor de forma: SSD interno de 2,5 pulgadas Interfaz: SATA 6.0Gb / s Capacidad total: 480GB * Velocidad de lectura secuencial: hasta 550 MB / s ** Velocidad de escritura secuencial: hasta 480 MB / s ** Soporta TRIM & SMART",
    //     purchasePrice: 28,
    //     salePrice: 899,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 5,
    //     categoryId: 2
    // },
    // {
    //     name: "DISCO SOLIDO SSD 2TB GIGABYTE M2 NVME AORUS GEN4",
    //     description: "El primer controlador PCIe 4.0x4 del mundo, controlador Phison PS5016-E16, fabricado con tecnología de fabricación de 28 nm. El avanzado proceso de fabricación garantiza que PS5016-E16 tenga suficiente potencia de procesamiento para el procesamiento ECC al adoptar el último flash 3D TLC NAND. PS5016-E16 también presenta ocho canales NAND con 32 objetivos CE, almacenamiento en caché DDR4 DRAM y una interfaz PCIe 4.0x4. En cuanto a las características, el chip admite el protocolo NVMe 1.3, la corrección de errores LDPC y las tecnologías de nivelación de desgaste y sobreaprovisionamiento para mejorar la confiabilidad y durabilidad de los SSD. Interfaz PCI-Express 4.0x4, NVMe 1.3 Factor de forma M.2 2280 Capacidad total 2000GB NAND TLC 3D Toshiba BiCS4 Caché DDR externa DDR4 2GB Velocidad de lectura secuencial Hasta 5000 MB / s Velocidad de escritura secuencial Hasta 4400 MB / s IOPS de lectura aleatoria hasta 750k Escritura aleatoria IOPS hasta 700k Dimensión 80,5 x 11,4 x 23,5 mm Tiempo medio entre fallas (MTBF) 1.77 millones de horas Consumo de energía (activo) Promedio: R: 6.5W; W: 6.6W Consumo de energía (inactivo) 21,1mw Temperatura (en funcionamiento) 0 ° C a 70 ° C Temperatura (almacenamiento) -40 ° C a 85 ° C",
    //     purchasePrice: 28,
    //     salePrice: 750,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 5,
    //     categoryId: 2
    // },
    // {
    //     name: "GABINETE GIGABYTE C200G MID TOWER",
    //     description: "Factor de forma Media torre Tipo M / B mini-ITX / m-ATX / ATX Color Negro Materiales Acero, Plástico, Vidrio Dimensiones H = 480 W = 210 D = 435 mm (dentro de ± 1% de error) Ranuras de expansión 7 Bahías de controladores de 5,25 Ninguno Bahías de unidad de 3,5 / 2,5 2 Bahías de controlador de 2,5  2 Panel de E / S USB 3.0 * 2 Interruptor LED RGB Botón de reinicio Entrada y salida de audio (admite audio AC97 / HD) Soporte del ventilador Parte trasera: 120 mm x1 (preinstalado) Parte superior: 120 mm x2 / 140 mm x2 Parte delantera: 120 mm x3 / 140 mm x2 Soporte de radiador Trasera: 120mmx1 Superior: 120mm x2 / 240mm x1? Delantero: 120 mm x2 / 140 mm x2 / 240 mm x1 / 280 mm x1 Tipo de fuente de alimentación ATX estándar (no incluido) Compatibilidad máxima Altura de la CPU: 165 mm Longitud de la GPU: 330 mm Longitud de la fuente de alimentación: 170 mm Filtros de polvo Arriba, Abajo Iluminación RGB sí Peso 7,24 kilogramos Dimensiones del paquete Alto = 514 Ancho = 277 Fondo = 523 mm",
    //     purchasePrice: 28,
    //     salePrice: 1299,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 5,
    //     categoryId: 5
    // },
    // {
    //     name: "GABINETE AZZA 280B SPECTRA BLACK",
    //     description: "-Tipo: Mid tower ATX -Paneles laterales: Izquierda: Vidrio templado con soportes de caucho Derecha: Panel de acero -Altura máxima del enfriador de CPU: Hasta 170mm -Longitud máxima de la tarjeta de video: Hasta 290mm -Compatibilidad de la placa base: ATX, Micro-ATX, ITX -Bahías para unidades de 2,5: Hasta 3 -Bahías para unidades de 3,5: Hasta 2 -Ranuras de expansión: 7 -Dimensiones de la caja (alto x ancho x profundidad): 458mm x 200mm x 365mm ",
    //     purchasePrice: 28,
    //     salePrice: 300,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 5,
    //     categoryId: 5
    // },
    // {
    //     name: "PLACA DE VIDEO Nvidia Gigabyte GTX 1070 8GB GAMING X",
    //     description: "UNIDAD DE PROCESAMIENTO DE GRÁFICOS:NVIDIA® GeForce RTX™ 3060 INTERFAZ:PCI Express® Gen 4 NÚCLEOS CUDA®:3584 RELOJES CENTRALES:Potencia: 1807 MHz VELOCIDAD DE MEMORIA:15 Gbps MEMORIA:GDDR6 DE 12 GB BUS DE MEMORIA:192 bits SALIDA:DisplayPort x 3 (v1.4) / HDMI x 1 (Admite 4K@120Hz según lo especificado en HDMI 2.1) CONSUMO DE ENERGÍA: 170W CONECTORES DE ALIMENTACIÓN: 8 pines x 1 PSU RECOMENDADA: 550w DIMENSIÓN DE LA TARJETA (MM): 305 x 120 x 42 mm PANTALLAS MÁXIMAS: 4",
    //     purchasePrice: 28,
    //     salePrice: 5000,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 5,
    //     categoryId: 7
    // },
    // {
    //     name: "Cooler HyperX ML360 Mirror ARGB Liquid CPU Cooler",
    //     description: "Mantenga su procesador fresco con el enfriador líquido de CPU MasterLiquid ML360 Mirror ARGB de Cooler Master. Diseñado para una descarga térmica optimizada, este enfriador cuenta con un radiador de 360 ​​mm de baja resistencia y tres ventiladores de enfriamiento de 120 mm. Una bomba de doble cámara acelera el enfriamiento aislando el refrigerante calentado",
    //     purchasePrice: 28,
    //     salePrice: 129,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 9,
    //     categoryId: 9
    // },
    // {
    //     name: "MEMORIA DDR4 4Gb 2666Mhz (1*4Gb) Genérica",
    //     description: "Memorias RAM - DDR4 - MEMORIA DDR4 4Gb 2666Mhz (1*4Gb) Genérica",
    //     purchasePrice: 28,
    //     salePrice: 599,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 5,
    //     categoryId: 7
    // },
    // {
    //     name: "Enfriador de CPU líquido ASUS Rog Ryujin 360 RGB AIO 360 mm radiador tres 120 mm",
    //     description: "Del fabricante, Republic of Gamers (ROG) es una submarca de ASUS dedicada a crear uno de los mejores hardware y software para juegos del mundo. Formado en 2006, ROG ofrece una línea completa de productos innovadores conocidos por su rendimiento y calidad. Descripción general La serie ROG Ruin ofrece un rendimiento de enfriamiento óptimo en un enfriador de CPU AIO de 360 ​​mm.",
    //     purchasePrice: 28,
    //     salePrice: 299,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 3,
    //     categoryId: 9
    // },
    // {
    //     name: "ASUS TUF Gaming LC 240 RGB Liquid CPU Cooler",
    //     description: "Refresque su CPU con estilo con el enfriador de CPU líquido TUF Gaming LC 240 RGB de ASUS. Con una placa de CPU de bloque de cobre y un radiador de aluminio, este todo en uno (AIO) no solo mantiene su procesador fresco, sino que puede convertirlo en la pieza central de su construcción.",
    //     purchasePrice: 28,
    //     salePrice: 103,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 3,
    //     categoryId: 9
    // },
    // {
    //     name: "MEMORIA RAM DDR4 4GB 2666MHZ ADATA",
    //     description: "Tipo de módulo U-DIMM Factor de forma altura estándar de 1,23 Tipo de memoria DDR4 Estándar JEDEC Interfaz 288 contactos Densidad 4GB / 8GB / 16GB / 32GB Velocidad 2666MHz Latencia CAS CL 19-19-19 Fuente de alimentación VDD y VDDQ = 1,2V±0,06V Fuente de alimentación de activación DRAM VPP= 2.5V (+0,25V / -0,125V) Especificaciones/VCC DRAM DDR4 STD 1,2V Temperaturas de operación 0°C a 85°C",
    //     purchasePrice: 28,
    //     salePrice: 499,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 11,
    //     categoryId: 2
    // },
    // {
    //     name: "Placa de Video Asrock Radeon RX 6800 XT 16GB GDDR6 Phantom Gaming D OC",
    //     description: "Tipo pcie Chipset Gpu RX 6800 XT Entrada Video No Puente Para Sli/croosfirex - Doble Puente No Características Especiales Ray Tracing Ancho De La Placa 140 mm Largo De La Placa 330 mm Espesor De La Placa 3.0 slots ",
    //     purchasePrice: 28,
    //     salePrice: 200,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 3,
    //     categoryId: 7
    // },
    // {
    //     name: "Cooler Master HyperX 212 Black Edition CPU Ventilador de refrigeración",
    //     description: "Mantenga su procesador fresco mientras agrega una capa de estilo a su sistema con el ventilador de refrigeración de CPU Cooler Master Hyper 212 Black Edition. Las aletas de aluminio niquelado negro y un ventilador de 120 mm le brindan una estética única sin comprometer el rendimiento. ",
    //     purchasePrice: 28,
    //     salePrice: 48,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 9,
    //     categoryId: 9
    // },
    // {
    //     name: "Placa de Video PowerColor Radeon RX 6600 8GB GDDR6 FIGHTER",
    //     description: "Tipo pcie Chipset Gpu RX 6600 Entrada Video No Puente Para Sli/croosfirex - Doble Puente No Características Especiales Ray Tracing Ancho De La Placa 111 mm Largo De La Placa 200 mm Espesor De La Placa 2.5 slots ",
    //     purchasePrice: 28,
    //     salePrice: 300,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 5,
    //     categoryId: 7
    // },
    // {
    //     name: "Disco Sólido SSD - SSD 480Gb Adata SU650",
    //     description: "SSD 480Gb Adata SU650",
    //     purchasePrice: 28,
    //     salePrice: 300,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 11,
    //     categoryId: 2
    // },
    // {
    //     name: "Placa de Video GALAX GeForce RTX 3080 10GB GDDR6X SG LHR (1-Click OC)",
    //     description: "Tipo pcie Chipset Gpu RTX 3080 Entrada Video No Puente Para Sli/croosfirex - Doble Puente No Características Especiales Ray Tracing + DLSS Ancho De La Placa 113 mm Largo De La Placa 317 mm Espesor De La Placa 2.5 slots ",
    //     purchasePrice: 28,
    //     salePrice: 700,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 4,
    //     categoryId: 7
    // },
    // {
    //     name: "GABINETE GAMER KJ Z399 4 COOLERS RGB",
    //     description: "Gabinetes - ATX - GABINETE GAMER KJ Z399 4 COOLERS RGB",
    //     purchasePrice: 28,
    //     salePrice: 1199,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 5,
    //     categoryId: 3
    // },
    // {
    //     name: "MSI REG CORELIQUID 240R V2 Cooler",
    //     description: "El enfriador MSI MAG CORELIQUID 240R V2 tiene todo lo que busca en un enfriador líquido, desde materiales de calidad que brindan una durabilidad confiable hasta tecnologías de disipación de calor que son extremadamente efectivas.",
    //     purchasePrice: 28,
    //     salePrice: 110,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 4,
    //     categoryId: 9
    // },
    // {
    //     name: "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X GAMING X TRIO",
    //     description: "Tipo pcie Chipset Gpu RTX 3090 Entrada Video No Puente Para Sli/croosfirex SLI Doble Puente No Características Especiales Ray Tracing + DLSS Ancho De La Placa 140 mm Largo De La Placa 323 mm Espesor De La Placa 3.0 slots ",
    //     purchasePrice: 28,
    //     salePrice: 850,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 4,
    //     categoryId: 7
    // },
    // {
    //     name: "Video Zotac GeForce GTX 1660 SUPER 6GB GDDR6 Twin Fan",
    //     description: "Tipo pcie Chipset Gpu GTX 1660 Super Entrada Video No Puente Para Sli/croosfirex - Doble Puente No Ancho De La Placa 111 mm Largo De La Placa 173 mm Espesor De La Placa 2.0 slots",
    //     purchasePrice: 28,
    //     salePrice: 350,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 3,
    //     categoryId: 7
    // },
    // {
    //     name: "FAN COOLER CPU COOLER MASTER HYPER 212 ARGB AM4 1151",
    //     description: "Intel LGA1200, LGA1151, LGA1150, LGA1155, LGA1156, Amd AM4 Material: Cobre, Aluminio, 4 Tubos de Calor ARGB Sí Velocidad: 650-1800 RPM (PWM) ± 5% Flujo 62 CFM (máximo) Ruido 8-27 dBA Presión 2,5 mmH2O (máx.) MTTF 160.000 horas Alimentación 4 pines (PWM) Voltaje 12VDC",
    //     purchasePrice: 28,
    //     salePrice: 3990,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 5,
    //     categoryId: 9
    // },
    // {
    //     name: "Teclado Mecanico HP HyperX Origins 60 Pink HX Red US",
    //     description: "Tipo De Switch Hyperx Switch Tipo De Teclado Compacto 60% Idioma Inglés Color Rosa/Blanco Tipo De Mecanismo Mecánico Switch Especifico Red Touchpad No Anti Salpicaduras No Polling Rate 1000 hz Tiempo De Respuesta 1 ms N-key Rollover Si Antighosting Si ",
    //     purchasePrice: 28,
    //     salePrice: 80,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 9,
    //     categoryId: 8
    // },
    // {
    //     name: "Teclado Mecanico Patriot Viper V765 RGB Kailh White Box ",
    //     description: "Tipo De Switch Kailh BOX Tipo De Teclado Completo Color Plateado Tipo De Mecanismo Mecánico Material Aluminio Touchpad No ",
    //     purchasePrice: 28,
    //     salePrice: 40,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 9,
    //     categoryId: 8
    // },
    // {
    //     name: "PLACA DE VIDEO AMD RX 6900XT Asus ROG Strix 16GB DDR6 ",
    //     description: "Placas de Video - AMD - PLACA DE VIDEO AMD RX 6900XT Asus ROG Strix 16GB DDR6",
    //     purchasePrice: 28,
    //     salePrice: 14999,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 3,
    //     categoryId: 7
    // },
    // {
    //     name: "Disco Rigido WD 6TB Purple 5.6K RPM 256MB ",
    //     description: "Disco Solido SSD M.2 WD 1TB Blue SN570 3500MB/s NVMe PCI-E Gen3 x4",
    //     purchasePrice: 28,
    //     salePrice: 200,
    //     stock: 5,
    //     rating: 0,
    //     brandId: 7,
    //     categoryId: 2
    // },
];

const createProducts = async () => {
    try {
        await arr.map(e => Product.findOrCreate({
            where: {
                name: e.name,
                description: e.description,
                purchasePrice: e.purchasePrice,
                salePrice: e.salePrice,
                stock: e.stock,
                rating: e.rating,
                brandId: e.brandId,
                categoryId: e.categoryId
            }
        }))
    } catch (error) {
        console.log(error.message);
    };
};

module.exports = { createProducts };
