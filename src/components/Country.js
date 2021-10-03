import React, { useEffect, useState } from 'react';
import { Link , useParams } from 'react-router-dom';
const Country = () => {
    const [country , setCountry]=useState([])
    const {name} =useParams()
    const apikey="e08c936c930cb6c45da3a2de05dc231e";

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

                    const {flag ,name,capital,region,topLevelDomain ,alpha2Code,alpha3Code,callingCodes, altSpellings}=c
               return (
                   <article key={c}>
                         <div className="flag">
                             <img src={flag} alt={name}/>
                         </div>
                         <div className="suite-country">
                              <div> <h1>{name}</h1>
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