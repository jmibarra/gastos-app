import React, { useState, useContext } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Avatar from 'react-avatar';
import { SessionContext } from '../../contexts/Session';
import { getAuth, signOut } from "firebase/auth";


const AvatarDropdown = () => {
    const { sessionState, logout } = useContext(SessionContext);
    

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            logout();
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle tag="span">
                <Avatar name={sessionState.user.email} round={true} size="60" />
            </DropdownToggle>
            <DropdownMenu end>
                <DropdownItem onClick={handleLogout}>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default AvatarDropdown;
