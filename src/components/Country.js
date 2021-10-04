import React, { useEffect, useState } from 'react';
import { Link , useParams } from 'react-router-dom';
const Country = () => {
    const [country , setCountry]=useState([])
    const {name} =useParams()
    const apikey="137e5f685b94789a2118669779f94192";

    useEffect(() => {
            const fetchCountry= async () => {
                  const response =await fetch(`http://api.countrylayer.com/v2/name/${name}?access_key=${apikey}`)
            
            const country=await response.json()
            setCountry(country)
            }
            fetchCountry()
    },[])
    
    return (
        <div>
            
            <section className="country">
            <Link to="/" className="retour">
                {`<< Retour`}
            </Link>
    
                {Object.keys(country).map((c) => {
                              const [name,topLevelDomain,alpha2Code,alpha3Code,callingCodes,capital,altSpellings,region]=c
                return (
                   <article key={name}>
                         
                         <div className="suite-country">
                              <div> <h1 className="country_name">{name}</h1>
                                     <h5>Capital : <span>{capital}</span></h5>
                                     <h5>Region : <span>{region}</span></h5>
                                     <h5>top level domain : <span>{topLevelDomain}</span></h5>
                               </div>
                               <div>
                                      <h5>alpha 2 code : <span>{alpha2Code}</span></h5>
                                      <h5>alpha 3 code : <span>{alpha3Code}</span></h5>
                                      <h5>Calling Codes : <span>{callingCodes}</span></h5>
                                      <h5>Alt spellings : <span>{altSpellings}</span></h5>
                               </div>
                         </div>
                   </article>
               )
               } )}
            </section>
        </div>
    );
};

export default Country;