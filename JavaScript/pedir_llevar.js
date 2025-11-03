function mostrarMenu(season) {
    let menuContent = document.getElementById("menu-content");
    let seasonTitle = document.getElementById("season-title");
    let menuItems = document.getElementById("menu-items");

    
    menuContent.style.position = "static";

    seasonTitle.textContent = "Menú de " + season;

    
    menuItems.innerHTML = "";

    
    let dishes = cogerplatos(season);
    let currentCategory = '';
    dishes.forEach(function (dish) {
        if (dish.name.endsWith(':')) {
            currentCategory = dish.name;
        } else {
            let li = document.createElement("li");

            // Agrega la imagen del plato
            let dishImage = document.createElement("img");
            dishImage.src = dish.image;
            dishImage.alt = dish.name;
            dishImage.classList.add("dish-image");

            // Añade el nombre del plato
            let dishName = document.createElement("span");
            dishName.classList.add("dish-name");
            dishName.appendChild(document.createTextNode(currentCategory + ' ' + dish.name));

            // Añade el precio del plato
            let dishPrice = document.createElement("span");
            dishPrice.classList.add("dish-price");
            dishPrice.appendChild(document.createTextNode("$" + dish.price.toFixed(2)));

            // Hace que el plato sea arrastrable
            hacerarrastre(li, dish);

            // Añade el plato a la lista
            li.appendChild(dishImage);
            li.appendChild(dishName);
            li.appendChild(dishPrice);
            menuItems.appendChild(li);
        }
    });

    menuContent.style.display = "flex";
}

function ocultarMenu() {
    document.getElementById("menu-content").style.display = "none";
}

function cogerplatos(season) {
    switch (season) {
        case 'Verano':
            return [
                { name: 'ENTRANTE:'},
                { name: 'Ensalada de sandia', price: 11.99, image: 'https://i.ibb.co/zmyP8mG/Ensalada-de-Invierno-con-Granada.webp' },
                { name: 'Gazpacho andaluz', price: 10.25, image: 'https://i.ibb.co/yyTVs2n/Gazpacho-Andaluz.webp' },
                { name: 'Tabla de embutidos', price: 9.25, image: 'https://i.ibb.co/VVdZ92n/Tabla-de-Embutidos-Mediterr-neos.webp' },
                { name: 'Ceviche de camarones', price: 14.99, image: 'https://i.ibb.co/25ZFsvG/Ceviche-de-Camarones.webp' },
                { name: 'Tostada de aguacates', price: 8.50, image: 'https://i.ibb.co/1vtdTT3/Tosta-de-Aguacate-y-Salm-n-Ahumado.webp' },
                { name: 'PLATO PRINCIPAL:' },
                { name: 'Paella de mariscos', price: 14.99, image: 'https://i.ibb.co/GsDpsvn/Paella-de-Mariscos.webp' },
                { name: 'Ensalada de pollo', price: 13.75, image: 'https://i.ibb.co/4YwWVFq/Ensalada-de-Pollo-a-la-Parrilla.webp' },
                { name: 'Brochetas de pollo y verduras', price: 11.99, image: 'https://i.ibb.co/prq4c0s/Brochetas-de-Pollo-y-Verduras-a-la-Parrilla.webp' },
                { name: 'Tacos de pescado', price: 12.75, image: 'https://i.ibb.co/SfC26Mk/Tacos-de-Pescado-con-Salsa-de-Mango.webp' },
                { name: 'Risotto de limón', price: 13.99, image: 'https://i.ibb.co/44t7DVv/Risotto-de-Lim-n-y-Esp-rragos.webp' },
                { name: 'POSTRE:' },
                { name: 'Helado de vainilla', price: 9.25, image: 'https://i.ibb.co/3y8H0WV/Helado-de-Vainilla-con-Frutas-Frescas.webp' },
                { name: 'Tartaleta de limón', price: 9.99, image: 'https://i.ibb.co/m0hcPF4/Tarta-de-Lim-n-y-Merengue.webp' },
                { name: 'Pannacotta de mango', price: 8.75, image: 'https://i.ibb.co/Hxkh1n7/Panna-Cotta-de-Mango.webp' },
                { name: 'Mousse de chocolate', price: 9.50, image: 'https://i.ibb.co/x2DNrg5/Mousse-de-Chocolate-Blanco.webp' },
                { name: 'Tartaleta de queso con frutos rojos', price: 7.99, image: 'https://i.ibb.co/SQNKtmz/Tarta-de-Queso-y-Frambuesas.webp'}

            ];
        case 'Otoño':
            return [
            { name: 'ENTRANTE:'},
                { name: 'Crema de calabaza', price: 8.50, image: 'https://i.ibb.co/VBMVQRX/Crema-de-Calabaza-y-Jengibre.webp' },
                { name: 'Tabla de embutidos', price: 9.25, image: 'https://i.ibb.co/X7msFct/Tabla-de-Embutidos-locales.jpg' },
                { name: 'Tartaleta de champiñones', price: 9.99, image: 'https://i.ibb.co/mCLTH3t/Tartaleta-de-champi-ones.webp' },
                { name: 'Hojaldre de pera', price: 9.50, image: 'https://i.ibb.co/93sx4LK/Hojaldre-de-Pera-y-Gorgonzola.webp' },
                { name: 'Ensalada de remolacha', price: 10.25, image: 'https://i.ibb.co/fNrwjvM/Ensalada-de-Remolacha-Asada.webp' },
                { name: 'PLATO PRINCIPAL:' },
                { name: 'Magre de pato', price: 14.25, image: 'https://i.ibb.co/8MNSdYs/Magret-de-Pato-con-Salsa-de-Frutos-Rojos.webp' },
                { name: 'Risotto de setas silvestres', price: 13.99, image: 'https://i.ibb.co/th6J7Kz/Risotto-de-Setas-Silvestres.webp' },
                { name: 'Ternera de Bourguignon', price: 15.99, image: 'https://i.ibb.co/8K5PhT8/Ternera-Bourguignonbien.webp' },
                { name: 'Pato con calabaza', price: 15.25, image: 'https://i.ibb.co/8K5PhT8/Ternera-Bourguignonbien.webp' },
                { name: 'Lomo de bacalao', price: 13.75, image: 'https://i.ibb.co/1JVSK9z/Lomo-de-Bacalao-con-Salsa-de-Puerros.webp' },
                { name: 'POSTRE:' },
                { name: 'Tarta de manzana y canela', price: 8.99, image: 'https://i.ibb.co/wQ7N1F8/Tarta-de-Manzana-y-Canela.webp' },
                { name: 'Crumble de fritos del bosque', price: 9.25, image: 'https://i.ibb.co/7YPFJtj/Crumble-de-Frutos-del-Bosque.webp' },
                { name: 'Pudin de calabaza', price: 8.25, image: 'https://i.ibb.co/x3vSXvr/Pud-n-de-Calabaza.webp' },
                { name: 'Flan de turrón', price: 7.99, image: 'https://i.ibb.co/72kmF91/Flan-de-Turr-n.webp' },
                { name: 'Peras al vino tinto', price: 9.99, image: 'https://i.ibb.co/G9ddXND/Peras-al-Vino-Tinto.jpg'}
            ];
        case 'Invierno':
            return [
                { name: 'ENTRANTE:'},
                { name: 'Sopa de calabaza', price: 9.75, image: 'https://i.ibb.co/XCRvdWs/Sopa-de-Calabaza-y-Zanahoria.webp' },
                { name: 'Tabla de quesos', price: 8.99, image: 'https://i.ibb.co/rsPzXGP/Tabla-de-Quesos-de-Invierno.webp' },
                { name: 'Pate de champiñones', price: 7.75, image: 'https://i.ibb.co/GxPLj4Y/P-t-de-Champi-ones-y-Tostadas.webp' },
                { name: 'Tartaleda de Champiñones', price: 8.99, image: 'https://i.ibb.co/mCLTH3t/Tartaleta-de-champi-ones.webp' },
                { name: 'Ensalada de Remolacha', price: 10.25, image: 'https://i.ibb.co/fNrwjvM/Ensalada-de-Remolacha-Asada.webp' },
                { name: 'PLATO PRINCIPAL:' },
                { name: 'Estofado de cordero', price: 14.75, image: 'https://i.ibb.co/h8075YX/Estofado-de-Cordero.webp' },
                { name: 'Lasa&ntilde;a de berenjena', price: 12.50, image: 'https://i.ibb.co/jRLMqNy/Lasa-a-de-Berenjena-y-Ricotta.webp' },
                { name: 'Solomillo Wellignton', price: 16.99, image: 'https://i.ibb.co/YyKj3hm/Solomillo-Wellington.webp' },
                { name: 'Magret de Pato', price: 14.25, image: 'https://i.ibb.co/8MNSdYs/Magret-de-Pato-con-Salsa-de-Frutos-Rojos.webp' },
                { name: 'Risotto de Setas silvestres', price: 13.99, image: 'https://i.ibb.co/th6J7Kz/Risotto-de-Setas-Silvestres.webp' },
                { name: 'POSTRE:' },
                { name: 'Tarta de chocolate', price: 9.25, image: 'https://i.ibb.co/nfWrRTd/Tarta-de-Chocolate-Caliente.webp' },
                { name: 'Tarta de queso y frambuesa', price: 8.99, image: 'https://i.ibb.co/SQNKtmz/Tarta-de-Queso-y-Frambuesas.webp' },
                { name: 'Pudin de pan y mantequilla', price: 9.99, image: 'https://i.ibb.co/KFRjyPJ/Pud-n-de-Pan-y-Mantequilla.webp' },
                { name: 'Tarta de manzana y canela', price: 10.25, image: 'https://i.ibb.co/wQ7N1F8/Tarta-de-Manzana-y-Canela.webp' },
                { name: 'Crumble de frutos del bosque', price: 9.25, image: 'https://i.ibb.co/7YPFJtj/Crumble-de-Frutos-del-Bosque.webp'}
            ];
        case 'Primavera':
            return [
                { name: 'ENTRANTE:' },
                { name: 'Ensalada de espárragos y fresas', price: 7.25, image: 'https://i.ibb.co/ZSRFfXp/Ensalada-de-esparragos-y-fresas.webp' },
                { name: 'Tabla de quesos locales', price: 8.50, image: 'https://i.ibb.co/rsPzXGP/Tabla-de-Quesos-de-Invierno.webp' },
                { name: 'Gazpacho de sandia', price: 8.75, image: 'https://i.ibb.co/gR97B9x/Gazpacho-de-sandia.webp' },
                { name: 'Tarta de tomate y mozzarella', price: 8.99, image: 'https://i.ibb.co/gmnR76v/Tartaleta-de-Tomate-y-Mozzarella.webp' },
                { name: 'Carpaccio de salmon', price: 16.50, image: 'https://i.ibb.co/Mnz3ZY6/Carpaccio-de-Salm-n.webp' },
                { name: 'PLATO PRINCIPAL:' },
                { name: 'Risotto de esparragos', price: 18.75, image: 'https://i.ibb.co/PQYxZWR/Risotto-de-Esp-rragos.webp' },
                { name: 'Pollo al limón', price: 15.25, image: 'https://i.ibb.co/0Y497Xm/Pollo-al-Lim-n-con-Esp-rragos.webp' },
                { name: 'Labina provenzal', price: 18.50, image: 'https://i.ibb.co/pvXL1XP/Lubina-a-la-Provenzal.webp' },
                { name: 'Fettucine de pesto y albahaca', price: 16.50, image: 'https://i.ibb.co/qnxLyWQ/Fettuccine-con-Pesto-de-Albahaca.webp' },
                { name: 'Paella de mariscos', price: 15.50, image: 'https://i.ibb.co/GsDpsvn/Paella-de-Mariscos.webp' },
                { name: 'POSTRE:' },
                { name: 'Tiramisu', price: 10.75, image: 'https://i.ibb.co/vdMYcV1/Tiramis.webp' },
                { name: 'Mousse de limón', price: 11.50, image: 'https://i.ibb.co/k8VfmDJ/Mousse-de-Lim-n.webp' },
                { name: 'Tarta de chocolate y frutos rojos', price: 9.75, image: 'https://i.ibb.co/bKMBDm6/Tarta-de-Chocolate-y-Frutos-Rojos.webp' },
                { name: 'Cheesecake de frambuesa', price: 8.50, image: 'https://i.ibb.co/SQNKtmz/Tarta-de-Queso-y-Frambuesas.webp' },
                { name: 'Sorbete de mango', price: 9.50, image: 'https://i.ibb.co/PzHs4c6/Sorbete-de-Mango-con-Frutas-Frescas.webp' },
            ];
        default:
            return [];
    }
}

function toggleCart() {
    let cartContent = document.getElementById("cart-content");
    cartContent.style.display = (cartContent.style.display === "block") ? "none" : "block";
}


function añadiralcarro(item) {
    let cartItems = document.getElementById("cart-items");
    let li = document.createElement("li");
    li.classList.add("cart-item");

    // Crear un objeto para rastrear la cantidad de cada plato en el carrito
    item.quantity = 1;

    let itemName = document.createElement("span");
    itemName.appendChild(document.createTextNode(item.name));

    let itemPrice = document.createElement("span");
    itemPrice.appendChild(document.createTextNode("$" + item.price.toFixed(2)));
    itemPrice.classList.add("price");

    let quantityButton = document.createElement("button");
    quantityButton.appendChild(document.createTextNode("+"));
    quantityButton.addEventListener("click", function () {
        // Incrementa la cantidad y actualiza la visualización
        item.quantity++;
        updateQuantity(li, item.quantity);
        actualizarprecio(item.price);
    });

    // Botón para eliminar los platos
    let removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("Eliminar"));
    removeButton.classList.add("remove-btn");
    removeButton.addEventListener("click", function () {
        quitardelcarro(li, item.price * item.quantity);
    });

    // Agrega la imagen del plato al carrito
    let dishImage = document.createElement("img");
    dishImage.src = item.image;
    dishImage.alt = item.name;

    li.appendChild(dishImage);
    li.appendChild(itemName);
    li.appendChild(itemPrice);
    li.appendChild(quantityButton);
    li.appendChild(removeButton);

    cartItems.appendChild(li);

    actualizarcarro();
    actualizarprecio(item.price);
}

function updateQuantity(item, quantity) {
    // Actualiza la visualización de la cantidad en el carrito
    let quantityElement = item.querySelector(".quantity");
    if (quantityElement) {
        quantityElement.textContent = "x" + quantity;
    } else {
        // Crea un elemento de cantidad si no existe
        quantityElement = document.createElement("span");
        quantityElement.classList.add("quantity");
        quantityElement.textContent = "x" + quantity;
        item.appendChild(quantityElement);
    }
}

function quitardelcarro(item, totalPrecio) {
    let cartItems = document.getElementById("cart-items");
    cartItems.removeChild(item);
    actualizarcarro();
    actualizarprecio(-totalPrecio);
}


function actualizarcarro() {
    let cartCount = document.getElementById("cart-count");
    let itemCount = document.getElementById("cart-items").childElementCount;
    cartCount.textContent = "(" + itemCount + ")";
}

function actualizarprecio(priceDifference) {
    let totalPriceElement = document.getElementById("total-price");
    let currentTotal = parseFloat(totalPriceElement.textContent.substring(1)); 
    let newTotal = currentTotal + priceDifference;
    totalPriceElement.textContent = "$" + newTotal.toFixed(2);
}

function placeOrder() {
    // Obtén la información del carrito
    let cartItems = document.getElementById("cart-items").children;
    let orderDetails = "<h2>Detalle de la compra:</h2><ul>";

    for (let i = 0; i < cartItems.length; i++) {
        let itemName = cartItems[i].querySelector("span").textContent;
        let itemPrice = cartItems[i].querySelector(".price").textContent;
        let itemQuantity = cartItems[i].querySelector(".quantity") ? cartItems[i].querySelector(".quantity").textContent : "";

        orderDetails += `<li>${itemQuantity} ${itemName}: ${itemPrice}</li>`;
    }

    // Agrega el total al detalle de la compra
    let totalPrice = document.getElementById("total-price").textContent;
    orderDetails += `</ul><h3>Total: ${totalPrice}</h3>`;

    // Abre una nueva pestaña con la información de la compra
    let orderWindow = window.open("", "Detalle de la compra", "width=400,height=400");
    orderWindow.document.write(orderDetails);
    orderWindow.document.write("<button onclick='window.close()'>Cerrar</button>");

    // Limpia el carrito
    document.getElementById("cart-items").innerHTML = "";
    actualizarcarro();
    actualizarprecio(-parseFloat(totalPrice.substring(1))); 
}



function hacerarrastre(element, dish) {
    element.setAttribute("draggable", true);
    element.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", JSON.stringify(dish));
        element.style.opacity = "0";
    });

    element.addEventListener("dragend", function () {
        
        element.style.opacity = "0";
    });
}

function añadiralcarroDrag(event) {
    event.preventDefault();
    let item = JSON.parse(event.dataTransfer.getData("text/plain"));
    añadiralcarro(item);

    let draggedImage = document.querySelector("[draggable=true]:hover");
    if (draggedImage) {
        draggedImage.style.display = "none";
    }
}





function permDrop(event) {
    event.preventDefault();
}


document.addEventListener("DOMContentLoaded", function() {
    toggleCart(); 
});
