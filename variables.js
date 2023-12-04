import {
	navegacion,
    card,
    redes,
    footerNavegacion,
    phones,
    //Eventos
    eventspasados,
    eventsFuturos,
} from "./js/data";

const handlerBarsContext = {
    "/index.html": {
        title: "Blog",
        logo: "https://acoes.org/wp-content/uploads/2023/10/LG-FUNDACION-BN-2-2.png",
        navegacion: navegacion,
        card: card,
        phones: phones,
        footerNavegacion: footerNavegacion,
        redes: redes,
    },
    "/Page/eventos.html": {
        title: "Eventos",
        logo: "https://acoes.org/wp-content/uploads/2023/10/LG-FUNDACION-BN-2-2.png",
        navegacion: navegacion,
        phones: phones,
        footerNavegacion: footerNavegacion,
        redes: redes,
        eventspasados: eventspasados,
        eventsFuturos: eventsFuturos,
    },
};

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;