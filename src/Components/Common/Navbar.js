import React, { useContext, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import {AiFillSignal,AiOutlineCreditCard } from 'react-icons/ai';
import { DateContext } from '../../contexts/Date';
import { SessionContext } from '../../contexts/Session';
import AvatarDropdown from './AvatarDropdow';

const NavBarComponent = (props) => {

    const { state, setDate } = useContext(DateContext)
    const { sessionState} = useContext(SessionContext)
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>   
        <Navbar color="light" light expand="md">
            {sessionState.loggedIn && (
            <>
                <NavbarBrand>Gastos {state.month_name} {state.year} </NavbarBrand>
                <NavbarToggler className="me-2" onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Año
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem  onClick={()=>setDate('2021',state.month)}>
                            2021
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate('2022',state.month)}>
                            2022
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Agregar año
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Mes
                            </DropdownToggle>
                            <DropdownMenu end>
                            <DropdownItem onClick={()=>setDate(state.year,'01')}>
                                Enero
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'02')}>
                                Febrero
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'03')}>
                                Marzo
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'04')}>
                                Abril
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'05')}>
                                Mayo
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'06')}>
                                Junio
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'07')}>
                                Julio
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'08')}>
                                Agosto
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'09')}>
                                Septiembre
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'10')}>
                                Octubre
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'11')}>
                                Noviembre
                            </DropdownItem>
                            <DropdownItem onClick={()=>setDate(state.year,'12')}>
                                Diciembre
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Button outline={true} onClick={props.toogleCreditCardModal}><AiOutlineCreditCard /></Button>
                    <Button style={{ marginRight: '10px' }} outline={props.metricsOpen} onClick={props.toogleMetrics}><AiFillSignal /></Button>
                    <AvatarDropdown className="avatar"/>
                </Collapse>
            </>)}
            {!sessionState.loggedIn && (
            <>
                <NavbarBrand>Gastos</NavbarBrand>
            </>
            )}
        </Navbar>
    </div>
  );
}

export default NavBarComponent;
