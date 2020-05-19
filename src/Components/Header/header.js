import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = () => (
    <div className="Header">
        <Link
            activeClass="LinksMenuActive"
            to="ContainerHome"
            spy
            smooth
            className="LinksMenu"
            offset={0}
            duration={500}
            isDynamic
        >
            About
        </Link>
        <Link
            activeClass="LinksMenuActive"
            to="ContainerHome"
            spy
            smooth
            className="LinksMenu"
            offset={0}
            duration={500}
            isDynamic
        >
            Experience
        </Link>
        <Link
            activeClass="LinksMenuActive"
            to="ContainerHome"
            spy
            smooth
            className="LinksMenu"
            offset={0}
            duration={500}
            isDynamic
        >
            Contact
        </Link>
    </div>
);

export default Header;
