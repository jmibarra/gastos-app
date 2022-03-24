import React from 'react';
import { Badge } from "reactstrap";

const StatusBadgeComponent = (props) => {
    switch (props.estado) {
        case "Pendiente":   return <Badge color="secondary">{props.estado}</Badge>;
        case "Estimado": return <Badge color="warning">{props.estado}</Badge>;
        case "Pago":  return <Badge color="success">{props.estado}</Badge>;
        default:      return <Badge color="primary">{props.estado}</Badge>;
    }
}

export default StatusBadgeComponent;
