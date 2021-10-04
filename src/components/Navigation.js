import React from 'react';
import lune from "../styles/assets/lune.png"
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    window.addEventListener('DOMContentLoaded', () => {

    const recherche=document.querySelector('.recherche')
    recherche.addEventListener('input' ,(e) => {
            const {value}=e.target
            const country_name = document.querySelectorAll('.country_name')
            country_name.forEach((name) =>{
                if(name.innerText.toLowerCase().includes(value.toLowerCase())){
                    name.parentElement.parentElement.style.display='block'
                }else{
                    name.parentElement.parentElement.style.display='none'
                }
            })
    })
})
    const changeTheme =() => {
    const mode=document.getElementById('mode')
    const active_nav=document.querySelector('.active_nav')
    const about=document.querySelector('#about')
    mode.addEventListener('click' , () => {
        document.body.classList.toggle('dark-theme')
        active_nav.classList.toggle('dark-theme')
        about.classList.toggle('dark-theme')

        
    })
}
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="active_nav">
                   Accueill
            </NavLink>
            <NavLink exact to="about" activeClassName="active_nav" id="about">
                  A propos
            </NavLink>
            <div className="mode" id='mode' onClick={() => changeTheme()}>
                <img src={lune} alt='lune' className='lune' />
            </div>
           <div className="recherche" >
                <input  type="search" placeholder="cherche une pay ?"/>
            </div>
            
        </div>
    );
};

export default Navigation;