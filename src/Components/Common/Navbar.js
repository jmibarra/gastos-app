import { useState } from 'react';
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

const NavBarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Gastos {props.monthName} {props.year} </NavbarBrand>
        <NavbarToggler className="me-2" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Año
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem  onClick={()=>props.handleDateChange('2021',props.month)}>
                  2021
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange('2022',props.month)}>
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
                <DropdownMenu right>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'01')}>
                    Enero
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'02')}>
                    Febrero
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'03')}>
                    Marzo
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'04')}>
                    Abril
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'05')}>
                    Mayo
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'06')}>
                    Junio
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'07')}>
                    Julio
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'08')}>
                    Agosto
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'09')}>
                    Septiembre
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'10')}>
                    Octubre
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'11')}>
                    Noviembre
                </DropdownItem>
                <DropdownItem onClick={()=>props.handleDateChange(props.year,'12')}>
                    Diciembre
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
            <Button outline={true} onClick={props.toogleCreditCardModal}><AiOutlineCreditCard /> Tarjeta de crédito</Button>
            <Button outline={props.metricsOpen} onClick={props.toogleMetrics}><AiFillSignal /> Metricas</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;
