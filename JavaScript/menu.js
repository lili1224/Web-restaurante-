
const demo = document.getElementById('demo');

const demo2 = document.getElementById('demo2');

const demo3 = document.getElementById('demo3');

let menu = {
    Invierno: {
      entrantes: {
        sopaDeCalabaza: {
          nombre:"Sopa de calabaza",
          imagenes:'https://i.ibb.co/XCRvdWs/Sopa-de-Calabaza-y-Zanahoria.webp',
          ingredientes: ['Calabaza, zanahorias, cebolla, ajo, caldo de verduras, nata, cilantro'],
          posiblesAlergenos: ['Lácteos'],
          kcalPorPorcion: '200-250'
        },
        tablaDeQuesos: {
          nombre:"Tabla de Quesos",
          imagenes:'https://i.ibb.co/rsPzXGP/Tabla-de-Quesos-de-Invierno.webp',
          ingredientes: ['Quesos de invierno, nueces, peras, uvas, pan de centeno'],
          posiblesAlergenos: ['Lácteos', 'frutos secos', 'gluten'],
          kcalPorPorcion: '300-350'
        },
        pateDeChampinones: {
          nombre:"Pate de champi&ntilde;ones",
          imagenes:'https://i.ibb.co/GxPLj4Y/P-t-de-Champi-ones-y-Tostadas.webp',
          ingredientes: ['Champiñones, chalotas, ajo, brandy, nata, tostadas de pan'],
          posiblesAlergenos: ['Lácteos', 'alcohol'],
          kcalPorPorcion: '250-300'
        },
        tartaletaDeChampinones: {
          nombre:"Tartaleda de Champi&ntilde;ones",
          imagenes:'https://i.ibb.co/mCLTH3t/Tartaleta-de-champi-ones.webp',
          ingredientes: ['Masa quebrada, champiñones, cebolla caramelizada, queso de cabra, tomillo'],
          posiblesAlergenos: ['Lácteos', 'gluten'],
          kcalPorPorcion: '250-300'
        },
        ensaladaDeRemolachaAsada: {
          nombre:"Ensalada de Remolacha",
          imagenes:'https://i.ibb.co/fNrwjvM/Ensalada-de-Remolacha-Asada.webp',
          ingredientes: ['Remolacha asada', 'queso de cabra', 'rúcula', 'nueces', 'vinagreta de nueces'],
          posiblesAlergenos: ['Lácteos', 'frutos secos'],
          kcalPorPorcion: '250-300'
        }
      },
      principal: {
        estofadoDeCordero: {
          nombre:"Estofado de cordero",
            imagenes:'https://i.ibb.co/h8075YX/Estofado-de-Cordero.webp',
          ingredientes: ['Cordero, cebolla, zanahorias, apio, patatas, caldo de cordero, vino tinto, tomillo'],
          posiblesAlergenos: [],
          kcalPorPorcion: '450-500'
        },
        lasanaDeBerenjenaYRicotta: {
          nombre:"Lasa&ntilde;a de berenjena",
            imagenes:'https://i.ibb.co/jRLMqNy/Lasa-a-de-Berenjena-y-Ricotta.webp',
          ingredientes: ['Berenjena, ricotta, espinacas, salsa de tomate, pasta, mozzarella, parmesano'],
          posiblesAlergenos: ['Lácteos', 'gluten'],
          kcalPorPorcion: '350-400'
        },
        solomilloWellington: {
          nombre:"Solomillo Wellignton",
            imagenes:'https://i.ibb.co/SQNKtmz/Tarta-de-Queso-y-Frambuesas.webp',
          ingredientes: ['Solomillo de ternera, champiñones, foie gras, masa de hojaldre, huevo, mostaza'],
          posiblesAlergenos: ['Lácteos', 'gluten', 'huevo'],
          kcalPorPorcion: '400-450'
        },
        magretDePatoConSalsaDeFrutosRojos: {
          nombre:"Magret de Pato",
            imagenes:'https://i.ibb.co/8MNSdYs/Magret-de-Pato-con-Salsa-de-Frutos-Rojos.webp',
          ingredientes: ['Magret de pato, frutos rojos, vino tinto, cebolla, caldo de pato, puré de patatas trufado'],
          posiblesAlergenos: [],
          kcalPorPorcion: '400-450'
        },
        risottoDeSetasSilvestres: {
          nombre:"Risotto de Setas silvestres",
            imagenes:'https://i.ibb.co/th6J7Kz/Risotto-de-Setas-Silvestres.webp',
          ingredientes: ['Arroz Arborio, setas silvestres, caldo de champiñones, cebolla, vino blanco, queso parmesano'],
          posiblesAlergenos: ['Lácteos'],
          kcalPorPorcion: '350-400'
        },
      },
      postre: {
        tartaDeChocolateCaliente: {
          nombre:"Tarta de chocolate",
            imagenes:'https://i.ibb.co/nfWrRTd/Tarta-de-Chocolate-Caliente.webp',
          ingredientes: ['Chocolate negro, mantequilla, azúcar, huevos, harina, cacao en polvo'],
          posiblesAlergenos: ['Lácteos', 'huevo', 'gluten'],
          kcalPorPorcion: '350-400'
        },
        tartaDeQuesoYFrambuesas: {
          nombre:"Tarta de queso y frambuesa",
            imagenes:'https://i.ibb.co/SQNKtmz/Tarta-de-Queso-y-Frambuesas.webp',
          ingredientes: ['Galleta, queso crema, azúcar, huevos, vainilla, frambuesas, mermelada de frambuesa'],
          posiblesAlergenos: ['Lácteos', 'huevo', 'gluten'],
          kcalPorPorcion: '350-400'
        },
        pudinDePanYMantequilla: {
          nombre:"Pudin de pan y mantequilla",
            imagenes:'https://i.ibb.co/KFRjyPJ/Pud-n-de-Pan-y-Mantequilla.webp',
          ingredientes: ['Pan, leche, nata, azúcar, pasas, huevo, canela, vainilla, mantequilla'],
          posiblesAlergenos: ['Lácteos', 'huevo', 'gluten'],
          kcalPorPorcion: '300-350'
        },
        tartaDeManzanaYCanela: {
          nombre:"Tarta de manzana y canela",
            imagenes:'https://i.ibb.co/wQ7N1F8/Tarta-de-Manzana-y-Canela.webp',
          ingredientes: ['Masa quebrada, manzanas, canela, azúcar, mermelada de albaricoque'],
          posiblesAlergenos: ['Gluten'],
          kcalPorPorcion: '300-350'
        },
        crumbleDeFrutosDelBosque: {
          nombre:"Crumble de frutos del bosque",
            imagenes:'https://i.ibb.co/7YPFJtj/Crumble-de-Frutos-del-Bosque.webp',
          ingredientes: ['Frutos del bosque (arándanos, moras, frambuesas), azúcar, mantequilla, harina, avena'],
          posiblesAlergenos: ['Gluten', 'lácteos'],
          kcalPorPorcion: '250-300'
        },
      }
    },
    Primavera: {
      entrantes: {
        ensaladaDeEsparragosYFresas: {
          nombre:"Ensalada de esperragos y fresas",
            imagenes:'https://i.ibb.co/ZSRFfXp/Ensalada-de-esparragos-y-fresas.webp',
          ingredientes: ['Espárragos, fresas, espinacas, queso de cabra, nueces, vinagreta balsámica'],
          posiblesAlergenos: ['Lácteos', 'frutos secos'],
          kcalPorPorcion: '250-300'
        },
        tablaDeQuesosLocales: {
          nombre:"Tabla de quesos locales",
            imagenes:'https://i.ibb.co/rsPzXGP/Tabla-de-Quesos-de-Invierno.webp',
          ingredientes: ['Quesos locales para la primavera, miel, almendraser'],
          posiblesAlergenos: ['Lácteos', 'frutos secos'],
          kcalPorPorcion: '300-350'
        },
        gazpachoDeSandia: {
          nombre:"Gazpacho de sandia",
            imagenes:'https://i.ibb.co/gR97B9x/Gazpacho-de-sandia.webp',
          ingredientes: ['Sandía, tomate, pepino, pimiento, cebolla, ajo, aceite de oliva, vinagre'],
          posiblesAlergenos: ['Gluten'],
          kcalPorPorcion: '150-200'
        },
        tartaletadetomateymozzarella: {
          nombre:"Tarta de tomate y mozzarella",
            imagenes:'https://i.ibb.co/gmnR76v/Tartaleta-de-Tomate-y-Mozzarella.webp',
          ingredientes: ['Masa quebrada, tomates cherry, mozzarella, albahaca, aceite de oliva'],
          posiblesAlergenos: ['Lácteos', 'gluten'],
          kcalPorPorcion: '250-300'
        },
        carpaccioDeSalmon: {
          nombre:"Carpaccio de salmon",
            imagenes:'https://i.ibb.co/Mnz3ZY6/Carpaccio-de-Salm-n.webp',
          ingredientes: ['Salmón ahumado, aguacate, alcaparras, eneldo, limón'],
          posiblesAlergenos: ['Pescado'],
          kcalPorPorcion: '300-350'
        }
      },
      principal: {
        risottodeEsparragos: {
          nombre:"Risotto de esparragos",
            imagenes:'https://i.ibb.co/PQYxZWR/Risotto-de-Esp-rragos.webp',
          ingredientes: ['Arroz Arborio, espárragos, caldo de verduras, cebolla, vino blanco, queso parmesano'],
          posiblesAlergenos: ['Lácteos'],
          kcalPorPorcion: '350-400'
        },
        polloAllimon: {
          nombre:"Pollo al lim&oacute;n",
            imagenes:'https://i.ibb.co/0Y497Xm/Pollo-al-Lim-n-con-Esp-rragos.webp',
          ingredientes: ['Pechuga de pollo, limón, espárragos, ajo, aceite de oliva, tomillo, caldo de pollo'],
          posiblesAlergenos: [],
          kcalPorPorcion: '400-450'
        },
        Lubinaprovenzal: {
          nombre:"Labina provenzal",
            imagenes:'https://i.ibb.co/pvXL1XP/Lubina-a-la-Provenzal.webp',
          ingredientes: ['Lubina, aceite de oliva, ajo, tomates secos, aceitunas negras, alcaparras, limón'],
          posiblesAlergenos: ['Pescado', 'frutos secos'],
          kcalPorPorcion: '350-400'
        },
        fettucinepestoyalbahaca: {
          nombre:"Fettucine de pesto y albahaca",
            imagenes:'https://i.ibb.co/qnxLyWQ/Fettuccine-con-Pesto-de-Albahaca.webp',
          ingredientes: ['Fettuccine, albahaca, piñones, ajo, queso parmesano, aceite de oliva, limón'],
          posiblesAlergenos: ['Lácteos','Frutos secos'],
          kcalPorPorcion: '350-400'
        },
        paellaDeMariscos: {
          nombre:"Paella de mariscos",
            imagenes:'https://i.ibb.co/GsDpsvn/Paella-de-Mariscos.webp',
          ingredientes: ['Arroz, langostinos, calamares, mejillones, pimientos, caldo de pescado, azafrán'],
          posiblesAlergenos: ['Mariscos/Crustaceos', 'gluten'],
          kcalPorPorcion: '450-500'
        },
      },
      postre: {
        tiramisu: {
          nombre:"Tiramisu",
            imagenes:'https://i.ibb.co/vdMYcV1/Tiramis.webp',
          ingredientes: ['Bizcochos de soletilla, café, mascarpone, huevos, cacao en polvo'],
          posiblesAlergenos: ['Lácteos', 'huevo'],
          kcalPorPorcion: '300-350'
        },
        moussedelimon: {
          nombre:"Mousse de lim&oacute;n",
            imagenes:'https://i.ibb.co/k8VfmDJ/Mousse-de-Lim-n.webp',
          ingredientes: ['Limón, nata, azúcar, gelatina'],
          posiblesAlergenos: ['Lácteos', 'gelatina'],
          kcalPorPorcion: '250-300'
        },
        tartaDeChocolateyfrutosrojos: {
          nombre:"Tarta de chocolate y frutos rojos",
            imagenes:'https://i.ibb.co/bKMBDm6/Tarta-de-Chocolate-y-Frutos-Rojos.webp',
          ingredientes: ['Chocolate negro, frutos rojos, harina, huevos, azúcar, mantequilla'],
          posiblesAlergenos: ['Lácteos', 'huevo', 'gluten'],
          kcalPorPorcion: '350-400'
        },
        cheesecakedeframbuesa: {
          nombre:"Cheesecake de frambuesa",
            imagenes:'https://i.ibb.co/SQNKtmz/Tarta-de-Queso-y-Frambuesas.webp',
          ingredientes: ['Galleta, queso crema, frambuesas, azúcar, huevos, nata, vainilla'],
          posiblesAlergenos: ['Lácteos', 'huevo', 'gluten'],
          kcalPorPorcion: '350-400'
        },
        sorbeteDeMango: {
          nombre:"sorbete de mango",
            imagenes:'https://i.ibb.co/PzHs4c6/Sorbete-de-Mango-con-Frutas-Frescas.webp',
          ingredientes: ['Mango, azúcar, agua, frutas frescas'],
          posiblesAlergenos: [],
          kcalPorPorcion: '150-200'
        },
      },
    },
    Verano: {
        entrantes: {
            ensaladaDesandia: {
              nombre:"Ensalada de sandia",
                imagenes:'https://i.ibb.co/zmyP8mG/Ensalada-de-Invierno-con-Granada.webp',
                ingredientes: ['Sandía, queso feta, pepino, menta, nueces, vinagreta de limón y miel'],
                posiblesAlergenos: ['Lácteos','Frutos secos'],
                kcalPorPorcion: '250-300'
            },
            gazpachoAndaluz: {
              nombre:"Gazpacho andaluz",
                imagenes:'https://i.ibb.co/yyTVs2n/Gazpacho-Andaluz.webp',
                ingredientes: ['Tomate, pepino, pimiento verde, cebolla, ajo, pan, vinagre'],
                posiblesAlergenos: ['Gluten'],
                kcalPorPorcion: '150-200'
            },
            tabladeembutidos: {
              nombre:"Tabla de embutidos",
                imagenes:'https://i.ibb.co/VVdZ92n/Tabla-de-Embutidos-Mediterr-neos.webp',
                ingredientes: ['Selección de embutidos, aceitunas, tomates cherry, mozzarella, pan tostado'],
                posiblesAlergenos: ['Lacteos','gluten'],
                kcalPorPorcion: '300-350'
            },
            cevichedecamarones: {
              nombre:"Ceviche de camarones",
                imagenes:'https://i.ibb.co/25ZFsvG/Ceviche-de-Camarones.webp',
                ingredientes: ['Camarones, limón, cilantro, cebolla roja, ajo, maíz, aguacate'],
                posiblesAlergenos: ['Crustáceos/Mariscos'],
                kcalPorPorcion: '250-300'
            },
            tostadeaguacates: {
              nombre:"Tostada de aguacates",
                imagenes:'https://i.ibb.co/1vtdTT3/Tosta-de-Aguacate-y-Salm-n-Ahumado.webp',
                ingredientes: ['Pan integral, aguacate, salmón ahumado, eneldo, limón, crema agria'],
                posiblesAlergenos: ['Pescado', 'lácteos', 'gluten'],
                kcalPorPorcion: '300-350'
            }
      },
        principal: {
            paellaDeMariscos: {
              nombre:"Paella de mariscos",
                imagenes:'https://i.ibb.co/GsDpsvn/Paella-de-Mariscos.webp',
              ingredientes: ['Arroz, langostinos, calamares, mejillones, pimientos, caldo de pescado, azafrán'],
              posiblesAlergenos: ['Mariscos/Crustaceos', 'gluten'],
              kcalPorPorcion: '450-500'
            },
            ensaladadepollo: {
              nombre:"Ensalada de pollo",
                imagenes:'https://i.ibb.co/4YwWVFq/Ensalada-de-Pollo-a-la-Parrilla.webp',
                ingredientes: ['Pechuga de pollo a la parrilla, pechuga, tomate, maíz, aguacate, aderezo de cilantro y lima'],
                posiblesAlergenos: [],
                kcalPorPorcion: '350-400'
            },
            brochetasDePolloYVerduras: {
              nombre:"Brochetas de pollo y verduras",
                imagenes:'https://i.ibb.co/prq4c0s/Brochetas-de-Pollo-y-Verduras-a-la-Parrilla.webp',
                ingredientes: ['Pechuga de pollo, pimiento, cebolla, calabacín, salsa de yogur'],
                posiblesAlergenos: ['Lácteos'],
                kcalPorPorcion: '300-350'
            },
            tacosdepescado: {
              nombre:"Tacos de pescado",
                imagenes:'https://i.ibb.co/SfC26Mk/Tacos-de-Pescado-con-Salsa-de-Mango.webp',
                ingredientes: ['Filete de pescado, tortillas de maíz, salsa de mango, repollo, cilantro, crema agria'],
                posiblesAlergenos: ['Pescado','Lacteos'],
                kcalPorPorcion: '350-400'
            },
            risottodelimon: {
              nombre:"Risotto de lim&oacute;n",
                imagenes:'https://i.ibb.co/44t7DVv/Risotto-de-Lim-n-y-Esp-rragos.webp',
                ingredientes: ['Arroz Arborio, espárragos, caldo de verduras, cebolla, vino blanco, queso parmesano, limón'],
                posiblesAlergenos: ['Lacteos'],
                kcalPorPorcion: '350-400'
            },
          },
          postre: {
            heladoDeVainilla: {
              nombre:"Helado de vainilla",
                imagenes:'https://i.ibb.co/3y8H0WV/Helado-de-Vainilla-con-Frutas-Frescas.webp',
                ingredientes: ['Helado de vainilla, frutas frescas, sirope de chocolate'],
                posiblesAlergenos: ['Lácteos'],
                kcalPorPorcion: '250-300'
            },
            tartaletaDeLimon: {
              nombre:"Tartaleta de lim&oacute;n",
                imagenes:'https://i.ibb.co/m0hcPF4/Tarta-de-Lim-n-y-Merengue.webp',
                ingredientes: ['Masa quebrada, limones, huevos, azúcar, crema de limón, merengue tostado'],
                posiblesAlergenos: ['Lacteos','Huevo', 'gluten'],
                kcalPorPorcion: '350-400'
            },
            pannacottademango: {
              nombre:"Pannacotta de mango",
                imagenes:'https://i.ibb.co/Hxkh1n7/Panna-Cotta-de-Mango.webp',
                ingredientes: ['Crema, azúcar, gelatina, puré de mango'],
                posiblesAlergenos: ['Lacteos','Gelatina'],
                kcalPorPorcion: '250-300'
            },
            moussedechocolate: {
              nombre:"Mousse de chocolate",
                imagenes:'https://i.ibb.co/x2DNrg5/Mousse-de-Chocolate-Blanco.webp',
                ingredientes: ['Chocolate blanco, nata, gelatina, vainilla'],
                posiblesAlergenos: ['Lacteos','Gelatina'],
                kcalPorPorcion: '350-400'
            },
            Tartadequesoconfrutosrojos: {
              nombre:"Tartaleta de queso con frutos rojos",
                imagenes:'https://i.ibb.co/SQNKtmz/Tarta-de-Queso-y-Frambuesas.webp',
                ingredientes: ['Galleta, queso crema, azúcar, huevos, vainilla, frutos rojos, azúcar glass'],
                posiblesAlergenos: ['Lácteos', 'huevo', 'gluten'],
                kcalPorPorcion: '300-350'
            },
          }
        },
    Otono: {
        entrantes: {
            cremaDeCalabaza: {
              nombre:"Crema de calabaza",
                imagenes:'https://i.ibb.co/VBMVQRX/Crema-de-Calabaza-y-Jengibre.webp',
                ingredientes: ['Calabaza, cebolla, zanahoria, papa, caldo de verduras, crema, jenjibre'],
                posiblesAlergenos: ['Lácteos'],
                kcalPorPorcion: '250-300'
            },
            tabladeembutidos: {
              nombre:"Tabla de embutidos",
                imagenes:'https://i.ibb.co/X7msFct/Tabla-de-Embutidos-locales.jpg',
                ingredientes: ['Selección de embutidos, aceitunas, tomates cherry, mozzarella, pan tostado'],
                posiblesAlergenos: ['Lacteos','gluten'],
                kcalPorPorcion: '300-350'
            },
            tartaletaDeChampinones: {
              nombre:"Tartaleta de champi&ntilde;ones",
                imagenes:'https://i.ibb.co/mCLTH3t/Tartaleta-de-champi-ones.webp',
              ingredientes: ['Masa quebrada, champiñones, cebolla caramelizada, queso de cabra, tomillo'],
              posiblesAlergenos: ['Lácteos', 'gluten'],
              kcalPorPorcion: '250-300'
            },
            hojaldredepera: {
              nombre:"Hojaldre de pera",
                imagenes:'https://i.ibb.co/93sx4LK/Hojaldre-de-Pera-y-Gorgonzola.webp',
                ingredientes: ['Hojaldre, pera, gorgonzola, nueces, reducción de balsámico'],
                posiblesAlergenos: ['Lácteos', 'frutos secos','Gluten'],
                kcalPorPorcion: '250-300'
            },
            ensaladaDeRemolachaAsada: {
              nombre:"Ensalada de remolacha",
                imagenes:'https://i.ibb.co/fNrwjvM/Ensalada-de-Remolacha-Asada.webp',
              ingredientes: ['Remolacha asada, queso de cabra, rúcula, nueces, vinagreta de nueces'],
              posiblesAlergenos: ['Lácteos', 'frutos secos'],
              kcalPorPorcion: '250-300'
            }
          },
        principal: {
            magretDePatoConSalsaDeFrutosRojos: {
              nombre:"Magre de pato",
                imagenes:'https://i.ibb.co/8MNSdYs/Magret-de-Pato-con-Salsa-de-Frutos-Rojos.webp',
              ingredientes: ['Magret de pato, frutos rojos, vino tinto, cebolla, caldo de pato, puré de patatas trufado'],
              posiblesAlergenos: [],
              kcalPorPorcion: '400-450'
            },
            risottoDeSetasSilvestres: {
              nombre:"Risotto de setas silvestres",
                imagenes:'https://i.ibb.co/th6J7Kz/Risotto-de-Setas-Silvestres.webp',
              ingredientes: ['Arroz Arborio, setas silvestres, caldo de champiñones, cebolla, vino blanco, queso parmesano'],
              posiblesAlergenos: ['Lácteos'],
              kcalPorPorcion: '350-400'
            },
            terneraBourguignon: {
              nombre:"Ternar de Bourguignon",
                imagenes:'https://i.ibb.co/8K5PhT8/Ternera-Bourguignonbien.webp',
              ingredientes: ['Ternera estofada en vino tinto, champiñones, cebolla perla, zanahorias, puré de patatas'],
              posiblesAlergenos: [],
              kcalPorPorcion: '450-500'
            },
            pastadecalabaza: {
              nombre:"Pata con calabaza",
                imagenes:'https://i.ibb.co/8K5PhT8/Ternera-Bourguignonbien.webp',
                ingredientes: ['Fettuccine, calabaza asada, nueces, salsa de salvia, queso parmesano'],
                posiblesAlergenos: ['Lácteos','Frutos Secos'],
                kcalPorPorcion: '350-400'
            },
            lomodebacalao: {
              nombre:"Lomo de bacalao",
                imagenes:'https://i.ibb.co/1JVSK9z/Lomo-de-Bacalao-con-Salsa-de-Puerros.webp',
                ingredientes: ['Lomo de bacalao, puerros, patatas confitadas, aceite de oliva'],
                posiblesAlergenos: ['Lácteos'],
                kcalPorPorcion: '350-400'
            },
            },
        postre: {
            tartaDeManzanaYCanela: {
              nombre:"Tarta de manzana y canela",
                imagenes:'https://i.ibb.co/wQ7N1F8/Tarta-de-Manzana-y-Canela.webp',
              ingredientes: ['Masa quebrada, manzanas, canela, azúcar, mermelada de albaricoque'],
              posiblesAlergenos: ['Gluten'],
              kcalPorPorcion: '300-350'
            },
            crumbleDeFrutosDelBosque: {
              nombre:"Crumble de fritos del bosque",
                imagenes:'https://i.ibb.co/7YPFJtj/Crumble-de-Frutos-del-Bosque.webp',
              ingredientes: ['Frutos del bosque (arándanos, moras, frambuesas), azúcar, mantequilla, harina, avena'],
              posiblesAlergenos: ['Gluten', 'lácteos'],
              kcalPorPorcion: '250-300'
            },
            pudinDeCalabaza: {
              nombre:"Pudin de calabaza",
                imagenes:'https://i.ibb.co/x3vSXvr/Pud-n-de-Calabaza.webp',
              ingredientes: ['Calabaza, azúcar, canela, nuez moscada, huevos, leche, crema, caramelo, nueces tostadas'],
              posiblesAlergenos: ['Lácteos', 'huevo', 'frutos secos'],
              kcalPorPorcion: '350-400'
            },
            flandeturron: {
              nombre:"Flan de turr&oacute;n",
                imagenes:'https://i.ibb.co/72kmF91/Flan-de-Turr-n.webp',
                ingredientes: ['Leche, turrón, huevos, azúcar, almendras tostadas'],
                posiblesAlergenos: ['Lácteos','Huevo','Frutos Secos'],
                kcalPorPorcion: '300-350'
            },
            perasAlVinoTinto: {
              nombre:"Peras al vino tinto",
                imagenes:'https://i.ibb.co/G9ddXND/Peras-al-Vino-Tinto.jpg',
                ingredientes: ['Peras, vino tinto, azúcar, canela, clavo de olor, vainilla, crema de mascarpone'],
                posiblesAlergenos: ['Lacteos'],
                kcalPorPorcion: '250-300'
            },
        }
    }
};

// Obtén la URL actual del navegador
var urlActual = window.location.href;

// Encuentra la posición del símbolo de interrogación
var posicionInterrogacion = urlActual.indexOf('?');

if (posicionInterrogacion !== -1) {
  // Divide la cadena en pares clave-valor utilizando el signo "&"
  var menu_url = urlActual.split('?')[1];
}

tipomenu = menu[menu_url];

const entrantesArray = Object.values(tipomenu.entrantes);
for(let i of entrantesArray){
  const div = document.createElement('div');
  const div_img = document.createElement('div');
  const div_descripcion = document.createElement('div');
  const img = document.createElement('img');
  const nombre = document.createElement('h3');
  const ingredientees = document.createElement('p');
  const Alergenos = document.createElement('p');
  const kcal = document.createElement('p');

  img.src = i.imagenes;
  div_img.appendChild(img);

  nombre.innerHTML = i.nombre;
  ingredientees.innerHTML = "Ingredientes: "+i.ingredientes;
  Alergenos.innerHTML = "Alergias: "+i.posiblesAlergenos;
  kcal.innerHTML = "Kcal/porcion: "+i.kcalPorPorcion;
  div_descripcion.appendChild(nombre);
  div_descripcion.appendChild(ingredientees);
  div_descripcion.appendChild(Alergenos);
  div_descripcion.appendChild(kcal);

  div.appendChild(div_img);
  div.appendChild(div_descripcion);

  demo.appendChild(div);
}
const principalArray = Object.values(tipomenu.principal);
for(let i of principalArray){
  const div = document.createElement('div');
  const div_img = document.createElement('div');
  const div_descripcion = document.createElement('div');
  const img = document.createElement('img');
  const nombre = document.createElement('h3');
  const ingredientees = document.createElement('p');
  const Alergenos = document.createElement('p');
  const kcal = document.createElement('p');

  img.src = i.imagenes;
  div_img.appendChild(img);

  nombre.innerHTML = i.nombre;
  ingredientees.innerHTML = "Ingredientes: "+i.ingredientes;
  Alergenos.innerHTML = "Alergias: "+i.posiblesAlergenos;
  kcal.innerHTML = "Kcal/porcion: "+i.kcalPorPorcion;
  div_descripcion.appendChild(nombre);
  div_descripcion.appendChild(ingredientees);
  div_descripcion.appendChild(Alergenos);
  div_descripcion.appendChild(kcal);

  div.appendChild(div_img);
  div.appendChild(div_descripcion);

  demo2.appendChild(div);
}
const postresArray = Object.values(tipomenu.postre);
for(let i of postresArray){
  const div = document.createElement('div');
  const div_img = document.createElement('div');
  const div_descripcion = document.createElement('div');
  const img = document.createElement('img');
  const nombre = document.createElement('h3');
  const ingredientees = document.createElement('p');
  const Alergenos = document.createElement('p');
  const kcal = document.createElement('p');

  img.src = i.imagenes;
  div_img.appendChild(img);

  nombre.innerHTML = i.nombre;
  ingredientees.innerHTML = "Ingredientes: "+i.ingredientes;
  Alergenos.innerHTML = "Alergias: "+i.posiblesAlergenos;
  kcal.innerHTML = "Kcal/porcion: "+i.kcalPorPorcion;
  div_descripcion.appendChild(nombre);
  div_descripcion.appendChild(ingredientees);
  div_descripcion.appendChild(Alergenos);
  div_descripcion.appendChild(kcal);

  div.appendChild(div_img);
  div.appendChild(div_descripcion);

  demo3.appendChild(div);
}