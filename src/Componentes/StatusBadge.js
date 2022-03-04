import React from 'react';
import { Badge } from "reactstrap";

const StatusBadgeComponent = (props) => {
    switch (props.estado) {
        case "Pendiente":   return <Badge href="#" color="secondary">{props.estado}</Badge>;
        case "Estimado": return <Badge href="#" color="warning">{props.estado}</Badge>;
        case "Pago":  return <Badge href="#" color="success">{props.estado}</Badge>;
        default:      return <Badge href="#" color="primary">{props.estado}</Badge>;
    }
}

export default StatusBadgeComponent;
