import { faUtensils, faCar, faFilm, faTshirt } from '@fortawesome/free-solid-svg-icons';

class IconManager {
    static icons = {
        'Comida': faUtensils,
        'Transporte': faCar,
        'Entretenimiento': faFilm,
        'Ropa': faTshirt
    };

    static iconColor = {
        'Comida': "primary",
        'Transporte': "",
        'Entretenimiento': "success",
        'Ropa': "danger"
    };
}

export default IconManager;

