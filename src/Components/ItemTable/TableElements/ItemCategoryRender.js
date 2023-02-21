import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCar, faFilm, faTshirt, faList } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'reactstrap';

const ItemCategoryRender = (props) => {

    const icon = {
        'Comida': faUtensils,
        'Transporte': faCar,
        'Entretenimiento': faFilm,
        'Ropa': faTshirt,
        'Lista': faList
    }[props.category];

    const iconColor = {
        'Comida': "primary",
        'Transporte': "",
        'Entretenimiento': "success",
        'Ropa': "danger",
        'Lista': "warning"
    }[props.category];

    return (
        <Badge
            color={iconColor}
            pill
        >
            <FontAwesomeIcon icon={icon} /> {props.category}
        </Badge>
    );
};

export default ItemCategoryRender;
