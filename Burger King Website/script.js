const menutoggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const btnAll = document.querySelector('.all')
const btnBurgers = document.querySelector('.burgers')
const btnDesserts = document.querySelector('.desserts')
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    platillos();
});

menutoggle.onclick=function(){
    menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

/*
TRAD: Se ejecuta la funcion al clickear en el objeto tipo toggle; 'menutoggle',
y la función activa el toggle menutoggle y la barra de navegacion, que es otro toggle mas.
*/

const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const burgers = platillosArreglo.filter(burger=> burger.getAttribute('data-platillo') === 'burger')
    const desserts = platillosArreglo.filter(dessert=> dessert.getAttribute('data-platillo') === 'dessert')

    mostrarPlatillos(burgers, desserts, platillosArreglo);
}

const mostrarPlatillos = (burgers, desserts, all) =>{

    btnBurgers.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        burgers.forEach(burger=> contenedorPlatillos.appendChild(burger));
    });

    btnDesserts.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        desserts.forEach(dessert=> contenedorPlatillos.appendChild(dessert));
    });

    btnAll.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        all.forEach(all=> contenedorPlatillos.appendChild(all));
    });

}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}
