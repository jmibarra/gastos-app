import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'reactstrap';
import IconManager from '../../../utils/IconManager';

const ItemCategoryRender = (props) => {

    const icon = IconManager.icons[props.category];

    const iconColor = IconManager.iconColor[props.category]

    return (
        <Badge color={iconColor} pill>
            <FontAwesomeIcon icon={icon} /> {props.category}
        </Badge>
    );
};

export default ItemCategoryRender;
