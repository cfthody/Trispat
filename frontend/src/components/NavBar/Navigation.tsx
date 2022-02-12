/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { NavLink } from "react-router-dom";

export interface INavLink {
  id?: unknown;
  to: string;
  text: string;
}

interface INavigation {
  activeClassName: string;
  activeStyle?: string;
  links: Array<INavLink>;
}

const Navigation = (props: INavigation) => {
  const { links, activeClassName } = props;

  const onLinkClick = (id?: any) => {
    return;
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-content-left">
          <span>icon</span>
        </div>
        <div className="nav-content-center">
          {links?.length &&
            links.map((link) => {
              return (
                <li key={link.text}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => (isActive ? activeClassName : "")}
                    onClick={() => onLinkClick(link.id)}
                  >
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
        </div>
        <div className="nav-content-right"></div>
      </div>
    </nav>
  );
};

export default Navigation;
