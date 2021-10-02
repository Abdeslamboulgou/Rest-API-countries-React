import React from 'react';

const Card = (props) => {

    const country=props.country
    return (
             <li className="card-data">
             <img src={country.flag} alt="flag"/> 
             <div className="card">
                 <ul>
                      <li>Name : {country.name}</li>
                      <li>Region : {country.region}</li>
                      <li>Capital : {country.capital}</li>
                </ul>
        </div>
        </li>
    );
};

export default Card;