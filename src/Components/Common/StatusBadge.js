import React from 'react';
import { Badge } from "reactstrap";
import StatusManager from '../../utils/StatusManager';

const StatusBadgeComponent = (props) => {
    const statusColor = StatusManager.statusColor[props.status]
    return <Badge color={statusColor}>{props.status}</Badge>;
}

export default StatusBadgeComponent;
