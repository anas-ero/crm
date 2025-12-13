import React from 'react'
import { useSelector } from 'react-redux';

const Opportunity = () => {
  const list = useSelector(state => state.opportunity.opportunities);
  console.log(list);

  return (
    <div>
      <h1 className=''>List of opportunities</h1>
      <div className='card p-2'>
        {list.map((item) => (
          <div key={item.id} className='card-item'>
            <h2>Entreprise : {item.entreprise}</h2>
            <p>Contact: {item.contact}</p>
            <p>Email: {item.email}</p>
            <p>Téléphone: {item.telephone}</p>
            <p>Montant: {item.montant}</p>
            <p>Probabilité: {item.probabilite}</p>
            <p>Étape: {item.etape}</p>
            <p>Date de Clôture: {item.dateCloture}</p>
            <p>Source: {item.source}</p>
          </div>))}
      </div>
    </div>
  )
}

export default Opportunity