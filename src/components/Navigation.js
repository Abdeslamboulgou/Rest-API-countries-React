import React from 'react';
import lune from "../styles/assets/lune.png"
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const changeTheme =() => {
    const mode=document.getElementById('mode')
    mode.addEventListener('click' , () => {
        document.body.classList.toggle('dark-theme')
    })
}
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="active-nav">
                   Accueill
            </NavLink>
            <NavLink exact to="about" activeClassName="active-nav">
                  A propos
            </NavLink>
            <div className="mode" id='mode' onClick={() => changeTheme()}>
                <img src={lune} alt='lune' className='lune' />
            </div>
           <div className="recherche" >
                <input  type="text" placeholder="cherche une pay ?"/>
            </div>
            
        </div>
    );
};

export default Navigation;