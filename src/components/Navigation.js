import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="active-nav">
                   Accueill
            </NavLink>
            <NavLink exact to="about" activeClassName="active-nav">
                  A propos
            </NavLink>
            <div className="mode">
                Mode nuit
            </div>
           <div className="recherche" >
                <input  type="text" placeholder="cherchez une pay ?"/>
            </div>
            
        </div>
    );
};

export default Navigation;