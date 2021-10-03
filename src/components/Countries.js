import React, { useEffect, useState} from 'react';
import Card from './Card';
import axios from 'axios';
const Countries = () => {
    const apikey="e08c936c930cb6c45da3a2de05dc231e";
    const [data , setData]=useState([])
    const [rangeValue , setRangeValue]=useState(40)
    const [selectRadio , setRadioSelected]=useState("")
    const radios=['Asia','Europe','Africa','Americas','Polar']
    useEffect(() => {
                 axios.get(`http://api.countrylayer.com/v2/all?access_key=${apikey}`)
                   .then((res) => setData(res.data))},[rangeValue])
    
    return (
        <div className="countries">
            <div className="range-countries">
                <input type="range" min="1" max="200" value={rangeValue}
                 onChange={(e) => setRangeValue(e.target.value) }/>
                <ul>
                   {radios.map((radio) => {
                    return (
                        <li key={radio}>
                           <input type='radio' value={radio} id={radio} checked={radio===selectRadio}
                              onChange={(e) => setRadioSelected(e.target.value)}/>
                           <label htmlFor={radio}>{radio}</label>
                        </li>
                    )
                })}
            </ul>
            </div>
            <div className="butn-annuler">
                {selectRadio && <h4 onClick={() => setRadioSelected("")}>Annuler la recherche</h4>}
            </div>
            <ul className="liste-countries">  
               {data.filter((country) => country.region.includes(selectRadio)).map((country) => 
                     <Card country={country}/>
               )}
            </ul> 
         </div>
    );
}; 

export default Countries;
