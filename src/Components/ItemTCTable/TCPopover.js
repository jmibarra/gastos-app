import React, { useEffect, useState } from 'react'
import { Button, PopoverBody, UncontrolledPopover } from 'reactstrap'
import Cards from "react-credit-cards-2"

const TCPopover = ({creditCard,creditCardId}) => {
    return (
    <div>
        <Button
            id={creditCardId}
            color="link"
        >
            {creditCard.alias}
        </Button>
        <UncontrolledPopover
            target={creditCardId}
            trigger="click"
        >
            <Cards
                locale={{ valid: "Expira" }}
                placeholders={{ name: "ALIAS TC" }}
                expiry={creditCard.expiry+"/"+creditCard.expiryyear}
                name={creditCard.alias}
                number={creditCard.number}
            />
        </UncontrolledPopover>
    </div>
)}

export default TCPopover