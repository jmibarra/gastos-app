import { faUtensils, faCar, faFilm, faTshirt, faFileInvoiceDollar, faList, faStore, faHouseChimney, faLaptop, faPlaneDeparture, faBox } from '@fortawesome/free-solid-svg-icons';

class IconManager {
    static icons = {
        'Comidas': faUtensils,
        'Transporte': faCar,
        'Entretenimiento': faFilm,
        'Ropa': faTshirt,
        'Impuestos y servicios': faFileInvoiceDollar,
        'Suscripciones': faList,
        'Supermercado': faStore,
        'Hogar': faHouseChimney,
        'Tecnología': faLaptop,
        'Viajes': faPlaneDeparture,
        'Otros': faBox

    };

    static iconColor = {
        'Comida': "primary",
        'Transporte': "success",
        'Entretenimiento': "success",
        'Ropa': "danger",
        'Impuestos y servicios': "info",
        'Suscripciones': "primary",
        'Supermercado': "warning",
        'Hogar': "dark",
        'Tecnología': "success",
        'Viajes': "info",
        'Otros': "dark"
    };
    
}

export default IconManager;

