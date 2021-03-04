import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
      <Navbar color="dark" dark expand="md">
          <Container>
        <NavbarBrand href="/">Vacina</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/home">Início</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/vacinas">Minhas Vacinas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/agendamentos">Agendamentos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/perfil">Posto de Saúde </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Perfil 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Dados Cadastrais
                </DropdownItem>
                <DropdownItem>
                Notificações
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Suporte
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;