**MEMORIA PROYECTO FINAL**

**La Gastronomía Étoile**

![](media/image11.png){width="2.109106517935258in"
height="2.105602580927384in"}

  ------------------------------------------------------------------------
  **Equipo**       Marcos Romé García, Alejandro Ferrandis Lozano, Paula
                   Bosch Ramos y Lucía Quesada Moreno
  ---------------- -------------------------------------------------------
  **Asignatura**   Tecnologías Web

  **Fecha          23 enero 2024
  entrega**        
  ------------------------------------------------------------------------

**ÍNDICE**

1.  Interacción del equipo

    1.  Responsabilidades y roles

    2.  Valoración individual del proyecto

2.  Especificaciones

    1.  Tabla de justificación

        1.  Inicio

            1.  Historia del restaurante

            2.  Objetivos ODS

        2.  Menú

        3.  Pedir

        4.  Reseñas

3.  Elementos a tener en cuenta...

4.  Conclusiones

5.  Bibliografía

```{=html}
<!-- -->
```
1.  **Interacción del equipo**

    1.  **Responsabilidades y roles**

> Al principio del proyecto, realizamos entre todos una lluvia de ideas
> teniendo en cuenta las preferencias de cada uno. Como comentamos en la
> primera entrega del proyecto (Paso 1. Decidir el tema general del
> sitio web), nos decantamos por realizar una web sobre un restaurante
> de lujo.
>
> Una vez elegido el tema principal de la web, pensamos en las páginas
> que podría contener el sitio web y llegamos al siguiente índice de
> páginas:

-   Inicio

    -   Historia del restaurante

    -   Objetivos ODS

-   Menú

-   Página para pedir online o reservar mesa

-   Reseñas

> A partir de este índice, hablamos de qué contenido debe de tener cada
> página y subpágina. Además, repartimos las páginas y otros elementos
> de relevancia a cada miembro del equipo:

-   **Lucía** - jefa de proyecto

    -   Inicio

    -   Historia del restaurante

    -   Objetivos del restaurante

    -   Generar información sobre el restaurante

-   **Marcos** - gestor de configuración

    -   Menú

    -   Logo del lugar

    -   Generar imágenes de la web

-   **Alejandro** - desarrollador 1

    -   Pedir

    -   Reservas

-   **Paula** - desarrolladora 2

    -   Reseñas

    -   Cabeceras y footer secundarios

    -   Estilo corporativo de la web

    1.  **Valoración individual del proyecto**

2.  **Especificaciones**

> Como comentamos en la entrega anterior, nuestro proyecto cumple con
> las siguientes especificaciones impuestas en el enunciado del
> proyecto:

-   [Especificación mínima]{.underline}

    -   Número de páginas HTML

    -   Número de ficheros JavaScript externos

    -   Cabeceras y pies de página

    -   Estilos CSS

    -   Barra de navegación

    -   Páginas interactivas

    -   Codificación en JavaScript

    -   Formulario

    -   Etiquetado semántico y accesibilidad

-   [Especificación intermedia]{.underline}

    -   Diseño en base a contenedores flexibles

    -   Elemento *aside* con barra de navegación

    -   Codificación en JavaScript

    -   Codificación en JavaScript y vectores de objetos

-   [Especificación completa]{.underline}

    -   Gestión de eventos de arrastre

    -   Elementos multimedia

> En el siguiente apartado, se expondrán de forma detallada cada parte
> de la web que cumpla cada una de las especificaciones citadas.

1.  **Tabla de justificación**

    1.  **Inicio**

> En la página principal de la web podremos interactuar con diferentes
> elementos que contiene la página:

-   [Barra de navegación:]{.underline} La barra de navegación contiene
    > cuatro botones, que corresponden con las páginas de INICIO, MENÚ,
    > PEDIR y RESEÑAS. Estas cuatro páginas son visibles, pero existen
    > dos botones invisibles que se esconden tras el botón de INICIO. Si
    > posamos nuestro ratón sobre la caja del botón INICIO aparecerá un
    > desplegable con los dos botones invisibles, que se corresponden
    > con la página de HISTORIA DEL RESTAURANTE y la página de OBJETIVOS
    > ODS. Si quitas el ratón de encima del botón de INICIO, el
    > desplegable desaparecerá.

![](media/image80.png){width="6.041666666666667in"
height="2.3958333333333335in"}

![](media/image82.png){width="3.810488845144357in"
height="7.666667760279965in"}

> Este primer elemento cumple con la especificación de *BARRA DE
> NAVEGACIÓN (especificación mínima),* la especificación de *PÁGINAS
> INTERACTIVAS (especificación mínima) y la especificación de DISEÑO EN
> BASE A CONTENEDORES FLEXIBLES (especificación intermedia).*.

-   [Aside de navegación secundaria:]{.underline} El elemento ASIDE que
    > encontramos a la derecha del contenido principal de nuestra página
    > principal contiene un menú con 3 hipervínculos que nos redirige a
    > páginas de interés y que tienen una estrecha relación con el
    > contenido de nuestra web. Si nos fijamos, cuando pasamos el ratón
    > sobre texto que contiene hipervínculos, el estilo CSS cambia el
    > color del texto.

> ![](media/image47.png){width="9.974436789151357in"
> height="1.5077646544181977in"}
>
> ![](media/image57.png){width="3.6875in" height="3.1041666666666665in"}
>
> Este elemento cumple con la especificación de *ELEMENTO ASIDE CON
> BARRA DE NAVEGACIÓN (especificación intermedia).*

-   [Cabecera y footer:]{.underline} Siguiendo las especificaciones, la
    > página principal se diferencia del resto de páginas por contener
    > una cabecera y un footer más complejos, completos y diferentes en
    > contraste con el resto de páginas secundarias, que contienen una
    > cabecera y footer más simples.

> ![](media/image46.png){width="4.770833333333333in" height="2.875in"}
>
> ![](media/image67.png){width="9.177083333333334in"
> height="3.521434820647419in"}
>
> ![](media/image81.png){width="2.840132327209099in"
> height="7.666666666666667in"}![](media/image74.png){width="2.5833333333333335in"
> height="1.8645833333333333in"}
>
> Estos dos elementos cumplen con la especificación de *CABECERAS Y PIES
> DE PÁGINA (especificación mínima),* centrándonos en la edición de la
> cabecera principal y del footer de la página principal.

-   [Carrousel de imágenes:]{.underline} Este último elemento de la
    > página principal presenta unos botones que ayudan al usuario a
    > pasar de una imagen a otra para así poder visualizar las
    > instalaciones del restaurante. Además, en JavaScript se ha
    > realizado una función para que, pulsando un botón, el carrusel
    > vaya avanzando de manera automática, sin necesidad de tener que
    > pulsar al botón de siguiente.

> ![](media/image83.png){width="5.623168197725285in"
> height="3.2916119860017496in"}
>
> ![](media/image77.png){width="3.125in" height="6.802083333333333in"}
>
> Por último, para entender el funcionamiento del carrousel, nos fijamos
> en las funciones creadas en el fichero JavaScript **Inicio.js**, donde
> nos encontramos una variable tipo **const** la cual contiene un array
> con las direcciones de las imágenes que se mostrarán en el carrousel.
>
> ![](media/image30.png){width="4.53125in"
> height="2.4270833333333335in"}
>
> Además, con la función **renderizarImagen()** cargaremos la imágen
> correspondiente al índice que esté apuntando la variable
> **posicionActual** del listado **IMAGENES**
>
> ![](media/image28.png){width="5.895833333333333in"
> height="0.8229166666666666in"}
>
> A continuación, observamos las funciones que se accionarán si pulsamos
> algunos de los botones del carrousel:
>
> ![](media/image63.png){width="4.125in"
> height="1.6875in"}![](media/image76.png){width="4.010416666666667in"
> height="1.7291666666666667in"}![](media/image62.png){width="5.979166666666667in"
> height="1.8854166666666667in"}![](media/image78.png){width="4.75in"
> height="1.6875in"}
>
> Este elemento cumple con la especificación de *CODIFICACIÓN EN
> JAVASCRIPT (especificación mínima e intermedia)*

1.  **Historia del restaurante**

> En esta página, se ha querido incluir elementos interactivos visibles
> para el usuario y hemos aprovechado la abundancia de texto para
> emplear el máximo número de etiquetas de **marcado de HTML**.
>
> ![](media/image56.png){width="10.309685039370079in"
> height="6.935914260717411in"}
>
> Si nos fijamos, cuando pasamos el ratón sobre alguna de las cajas de
> texto, vemos que la caja de texto (que se corresponde con un grupo
> \<article\> en el HTML) reacciona y se eleva levemente sobre su
> posición inicial. De igual manera, cuando quitamos el ratón del área
> que delimita la caja de texto, el bloque de texto vuelve a su posición
> original.

![](media/image33.png){width="4.0501695100612425in"
height="1.7509470691163604in"}

> Por lo tanto, en esta página de la web se cumple la especificación de
> *PÁGINAS INTERACTIVAS (especificación mínima)* y la especificación de
> *ETIQUETADO SEMÁNTICO Y ACCESIBILIDAD (especificación mínima).*
>
> Por otra parte, en esta página se puede observar el **diseño de cómo
> es la cabecera y el footer** para el resto de páginas secundarias de
> la web. De esta manera, toda la página sigue el mismo estilo
> corporativo de esquema gráfico, de colores,..
>
> ![](media/image31.png){width="3.829861111111111in"
> height="1.4865234033245844in"}
>
> El footer o pie de página de las páginas secundarias tiene varias
> funciones. Primero con el número de teléfono, cuando haces click sobre
> el te aparecen una serie de alarmas, tres diferentes en concreto:
>
> ![](media/image9.png){width="4.151042213473316in"
> height="2.102130358705162in"}
>
> Después aparece un correo de contacto, que al igual que el número de
> teléfono, si hacemos click sobre el nos saltan una serie de alarmas,
> tres también en este caso.
>
> ![](media/image24.png){width="4.757238626421698in"
> height="2.1383552055993in"}
>
> Por último tenemos el nombre del fundador de nuestro restaurante, el
> cual tiene un enlace directo a su currículum, con lo cual cuando haces
> click encima de su nombre te redirige de manera inmediata a su
> currículum, donde aparece toda la información del fundador.
>
> ![](media/image59.png){width="5.684027777777778in"
> height="0.2604166666666667in"}
>
> Esto hace que se cumpla la especificación de *CABECERAS Y PIES DE
> PÁGINA (especificación mínima)*.

2.  **Objetivos ODS**

> Finalmente, tenemos la página donde observamos qué Objetivos ODS
> cumple nuestro restaurante. En esta página, hemos aprovechado para
> explicarle al usuario qué son los Objetivos ODS empleando un vídeo de
> youtube que hemos insertado mediante **\<iframes\>**.
>
> ![](media/image51.png){width="10.333334426946632in"
> height="5.972609361329834in"}
>
> Por lo tanto, completamos la especificación de *ELEMENTOS MULTIMEDIA
> (especificación completa)*.

1.  **Menú**

> La página de Menú se divide en 2 archivos HTML , 2 archivos CSS y 1
> archivo Js.
>
> Cuando inicias en el menú te llevará a la página llamada Index, en
> esta se cumplen las especificaciones de CABECERA , PIES DE PÁGINA y
> BARRA DE NAVEGACIÓN.
>
> Así como el uso de CSS y JS
> externos.![](media/image5.png){width="6.267716535433071in"
> height="0.5833333333333334in"}
>
> ![](media/image20.png){width="5.364583333333333in"
> height="3.0729166666666665in"}
>
> ![](media/image61.png){width="5.625in" height="2.8854166666666665in"}
>
> Por otra parte está la página de menú final. La página tiene un
> archivo html donde se reproduce un esquema básico sobre el cual
> trabajara un archivo de Js. Toda la página aparece en función de datos
> que entran a través de la url desde la página de index.html al
> seleccionar el menú correspondiente. Esta cumple las mismas partes de
> especificación simple que la página de index. Así como CODIFICACIÓN EN
> JAVASCRIPT.
>
> ![](media/image70.png){width="4.75in" height="5.53125in"}
>
> La página de menú cumple con las siguientes especificaciones.
>
> De la especificación media cumple

-   DISEÑO EN BASE A CONTENEDORES FLEXIBLES: Como se ve en la imagen los
    > contenedores contienen la etiqueta flex. A su vez en el archivo
    > CSS tenemos la siguiente foto con el modificador correspondiente.

![](media/image48.png){width="3.3541666666666665in"
height="2.1145833333333335in"}![](media/image40.png){width="3.3541666666666665in"
height="2.6245264654418197in"}![](media/image42.png){width="3.3541666666666665in"
height="4.894903762029746in"}![](media/image65.png){width="3.1041666666666665in"
height="1.1041666666666667in"}

-   CODIFICACIÓN EN JAVASCRIPT

    -   Variables globales que serán arrays de objetos, de strings y de
        > números

    -   Declaraciones de objetos de cierta complejidad

![](media/image79.png){width="8.648478783902013in"
height="8.666666666666666in"}

1.  **Pedir**

> Esta página contiene sólo un código HTML y un código CSS, dado que es
> una página bastante sencilla que te da a escoger si quieres reservar
> mesa o pedir a domicilio.
>
> En cuanto al código HTML simplemente cumple con especificaciones
> básicas como *[CABECERAS Y PIES DE PÁGINA, BARRA DE NAVEGACIÓN,
> ESTILOS CSS, PÁGINA INTERACTIVA y ETIQUETADO SEMÁNTICO Y DE
> ACCESIBILIDAD]{.underline},* todo esto con la ayuda claro está, del
> código CSS respectivo de esta página.

-   Cabeceras y pies de página que usaremos para casi todas las páginas.

> ![](media/image4.png){width="4.817708880139983in"
> height="1.03125in"}![](media/image1.png){width="4.796875546806649in"
> height="1.1770833333333333in"}

-   Barra de navegación, usaremos esta misma barra para prácticamente
    > todas las páginas de nuestra web.

> ![](media/image53.png){width="4.802083333333333in"
> height="2.2916666666666665in"}

-   Etiquetado semántico y de accesibilidad.

-   Estilos CSS, a continuación se puede ver como hay un total de 3
    > estilos externos los cuales enlazan con los estilos de la página
    > en sí, y los estilos que hemos usado para casi todas las páginas
    > del footer y la cabecera

> ![](media/image3.png){width="4.723958880139983in"
> height="0.9583333333333334in"}

-   Página interactiva (uso de botones), aquí básicamente lo que hace es
    > que las dos imágenes que hay en la página hacen de "botón" de modo
    > que cuando les das click, te llevan a otra página de nuestra web.

> ![](media/image66.png){width="6.022391732283465in"
> height="2.5859853455818023in"}

1.  **Reservar**

> La página de "reservar" se accede desde la página de "pedir", esta
> página cumple con especificaciones como las que hemos visto
> previamente de *[CABECERA Y PIE DE PÁGINA, ESTILOS CSS y BARRA DE
> NAVEGACIÓN]{.underline},* que básicamente estas 3 especificaciones
> básicas se cumplen en todas las páginas de nuestra web dado que hemos
> usado las mismas cabeceras y pies de página (junto con sus estilos CSS
> correspondientes) en casi todas ellas.
>
> Esta página cumple con especificaciones nuevas como la especificación
> básica de *[FORMULARIO]{.underline},* dado que es una página donde
> rellenar una hoja de datos con los que haces la reserva, dicha hoja de
> datos es la que viene siendo el formulario.
>
> ![](media/image18.png){width="4.25739501312336in"
> height="3.2521773840769903in"}

![](media/image17.png){width="3.7795330271216097in"
height="2.069744094488189in"}

> También cumple con la especificación intermedia de *[CODIFICACIÓN EN
> JAVASCRIPT]{.underline},* debido a que la página contiene un fichero
> js externo donde se hace uso de variable locales para la función que
> tiene la página, de que cuando le des a enviar el formulario, te salga
> un "aviso" de la reserva con todos los datos que has introducido.

2.  **Pedir a domicilio**

> En esta página se han cumplido, a parte de las previamente vistas,
> especificaciones como la especificación completa de *[GESTIÓN DE
> EVENTOS DE ARRASTRE]{.underline}.* En nuestra página, lo que hace que
> cumple dicha especificación es que se ha implementado un carrito de la
> compra, se ha hecho que haya imágenes que se puedan arrastrar, dichas
> imágenes si son arrastradas hacia dentro del carrito se quedan
> almacenadas dentro de este, con toda la información de dichas imágenes
> (nombre, precio), sumado también a que la imágenes que sean
> arrastradas hacia dentro de carrito desaparecerán de donde están.
>
> ![](media/image55.png){width="7.999998906386701in"
> height="4.654689413823272in"}
>
> ![](media/image75.png){width="4.6013495188101485in"
> height="4.930856299212598in"}
>
> ![](media/image71.png){width="3.1979166666666665in"
> height="2.6145833333333335in"}
>
> Otra especificación que cumple esta página es la especificación
> intermedia de *[DISEÑO EN BASE A CONTENEDORES FLEXIBLES]{.underline},*
> donde las imágenes de los platos de cada menú están distribuidas en
> una disposición flex, concretamente en "grid". Ahora una imágen de
> cómo se han puesto las imágenes en disposición "grid" (columna).
>
> ![](media/image73.png){width="5.3125in" height="4.40625in"}
>
> Está página cumple con otra especificación que hemos visto antes qué
> es la especificación básica de *[PÁGINA INTERACTIVA]{.underline},*
> porque si pinchamos en una imagen de los menús, se abre un desplegable
> con todos su platos, además de esto en el apartado del carrito, cuando
> vas añadiendo platos hay botones como los de "eliminar", que para
> eliminar un plato no deseado, o el botón "+" que es para volver a
> pedir el mismo plato, dado que al quitarse la imagen del menú una vez
> son arrastradas hacia dentro de carrito, es necesario dicho botón por
> si un comensal desea pedir más de un mismo plato.
>
> ![](media/image16.png){width="3.9305555555555554in"
> height="1.3491786964129484in"}
>
> ![](media/image39.png){width="3.8194444444444446in"
> height="1.6729166666666666in"}
>
> Otras especificaciones que tiene esta página son las especificaciones
> básicas de *[CABECERAS Y PIES DE PÁGINA, ESTILOS CSS, BARRA DE
> NAVEGACIÓN]{.underline}* y *[CODIFICACIÓN EN JAVASCRIPT]{.underline}*.

-   Las cabeceras y pies de página siguen siendo las mismas que las
    > explicadas con anterioridad.

-   Los estilos CSS son un total de 3, los de la cabecera y pie de
    > pagina, y el de la página en sí.

> ![](media/image54.png){width="4.236111111111111in"
> height="0.7896259842519685in"}

-   La barra de navegación es una barra que te deja ir a cualquier parte
    > de nuestra página web (la misma explicada previamente).

-   La codificación en javascript se cumple con el uso de algunos bucles
    > en js como los mostrado a continuación.

> ![](media/image15.png){width="3.5497944006999127in"
> height="2.024005905511811in"}
>
> ![](media/image7.png){width="3.7152777777777777in"
> height="0.8391961942257218in"}
>
> También cumple con la especificación intermedia de *[CODIFICACIÓN EN
> JAVASCRIPT]{.underline},* concretamente la cumple porque hago uso de
> muchas funciones (demasiadas) y aun muchas más variables locales y
> globales. A continuación unos ejemplos de unas pocas de las tantas que
> tiene esta página en JS
>
> ![](media/image38.png){width="3.732638888888889in"
> height="1.2442125984251968in"}
>
> ![](media/image36.png){width="4.055555555555555in"
> height="0.9253751093613298in"}
>
> ![](media/image64.png){width="3.888888888888889in"
> height="0.7793208661417322in"}

1.  **Reseñas**

> En esta página de reseñas podemos encontrar algunas de las
> especificaciones, como puede ser:
>
> · Consta de un fichero HTML (consta a su vez con cabecera ,con barra
> de navegación y futer) que contiene Java en su interior y un fichero
> CSS externo.
>
> ![](media/image26.png){width="4.651669947506561in"
> height="2.2949267279090115in"}

![](media/image23.png){width="4.213542213473316in"
height="2.8024956255468068in"}

> · [Es una página interactiva]{.underline}: ya que el usuario genera un
> cambio en la disposición de la página una vez publica una reseña, esta
> aparece debajo de dos reseñas que publicaron anteriormente y puede
> cambiar también el modo de visualizar la página, pudiendo poner el
> modo claro, que es el original, y el modo oscuro.
>
> ![](media/image14.png){width="5.713010717410324in"
> height="1.032121609798775in"}
>
> · [Formulario]{.underline}: Aunque no conste de un formulario muy
> extenso, ya que aparece en otra parte de la web, la parte de reseñas
> también consta de un formulario que procesa información, y dicha
> información aparece una vez publicada al final de la página, debajo
> del resto de reseñas.
>
> ![](media/image6.png){width="3.503293963254593in"
> height="1.672594050743657in"}

3.  **Elementos a tener en cuenta...**

> Durante este trabajo hemos tenido que investigar cómo resolver algunos
> problemas. El problema más destacable ha sido el **espacio** necesario
> para guardar las imágenes que íbamos a utilizar, para ello encontramos
> una página web donde puedes **subir archivos de forma pública o
> privada para el uso a partir de links**.

![](media/image43.png){width="5.090277777777778in"
height="1.8602340332458442in"}

> Desde esta página puedes obtener una url para poner en el código HTML
> y así obtienes una imagen tipo webp.
>
> Otro problema que encontramos fue el buscar las imágenes que queríamos
> para los platos y el aspecto del restaurante. Para ello usamos una
> **inteligencia artificial de procesado de imágenes**. La IA se llama
> **Leonardo IA** , gracias a una descripción detallada de lo que
> queríamos y con un contexto bien planteado conseguimos generar las
> imágenes de los platos, local e icono. Algunas imágenes directamente
> las buscamos de dominio público en internet.
>
> Por otra parte, toda la información que aparece redactada en la web,
> parte del estilo elegido para el diseño de la web y el cómo íbamos a
> orientar la temática del restaurante fue otro problema que nos surgió
> al principio del proyecto.\
> Tras realizar un listado de las ideas de webs o negocios a los cuales
> podríamos realizar una web, nos decantamos por realizar la web para un
> **restaurante gourmet de lujo**. La diferencia aquí es que no nos
> decantamos por volver a hacer a nuestra manera la web de un
> restaurante ya existente, si no que preferimos crear un **restaurante
> completamente ficticio**.\
> Para ello, empleamos la herramienta **chatGPT** para crear la historia
> del restaurante, el nombre del restaurante y otros factores que nos
> ayudaron a guiarnos a la hora de escoger el estilo del restaurante.\
> (
> [[https://chat.openai.com/share/ade58f40-af86-4b25-996b-23093f1a9ece]{.underline}](https://chat.openai.com/share/ade58f40-af86-4b25-996b-23093f1a9ece)
> )

4.  **Conclusiones**

> En conclusión, a lo largo de este proyecto de desarrollo web, hemos
> experimentado un significativo crecimiento y aprendizaje. Al abordar
> las especificaciones mínimas, logramos comprender la importancia de
> una estructura HTML sólida, estilos CSS coherentes y la implementación
> de interactividad mediante JavaScript.
>
> Al avanzar hacia la especificación intermedia, nos desafiamos a
> implementar un diseño más complejo basado en contenedores flexibles.
> La inclusión de un elemento aside con barra de navegación mejoró la
> usabilidad y la experiencia del usuario, y la codificación en
> JavaScript se volvió más avanzada al trabajar con vectores de objetos.
>
> Finalmente, al abordar la especificación completa, nos enfrentamos a
> desafíos más avanzados, como la gestión de eventos de arrastre y la
> incorporación de elementos multimedia. Estos aspectos más avanzados no
> solo ampliaron nuestro conjunto de habilidades, sino que también nos
> enseñaron a manejar proyectos más complejos de manera efectiva.
>
> En retrospectiva, este proyecto no solo se trató de crear una página
> web funcional, sino también de desarrollar habilidades colaborativas,
> resolución de problemas y toma de decisiones en equipo.
>
> En conjunto, este proyecto nos ha proporcionado una comprensión del
> desarrollo web, desde los fundamentos hasta las técnicas más
> avanzadas. Estamos orgullosos de haber alcanzado y superado las
> expectativas establecidas.
