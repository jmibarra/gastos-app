import React from 'react';
import Chip from '@mui/material/Chip';

const StatusBadgeComponent = (props) => {
    switch (props.estado) {
        case "Pendiente":   return <Chip label={props.estado} color="secondary" variant="outlined"/>;
        case "Estimado": return <Chip label={props.estado} color="warning" variant="outlined">{props.estado}</Chip>;
       case "Pago":  return <Chip label={props.estado} color="success" variant="outlined">{props.estado}</Chip>;
        default:      return <Chip label={props.estado} color="primary" variant="outlined">{props.estado}</Chip>;
    }
}

export default StatusBadgeComponent;