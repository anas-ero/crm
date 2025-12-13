import React from 'react'
import { useSelector } from 'react-redux';
const Opportunity = () => {
  const list = useSelector(state => state.opportunity.opportunities);
  console.log(list);
  
  return (
    <div>
      <h1>Opps</h1>
    {list.map((opp) => (
      <div key={opp.id}>
        <h2>{opp.entreprise}</h2>
        <p>{opp.description}</p>
        <p>{opp.montant}</p>
      </div>
    ))}
    </div>
  )
}

export default Opportunity