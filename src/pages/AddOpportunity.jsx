import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "../components/Field.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addOpportunity,
  removeOpportunity,
} from "../redux/OpportunitySlice.jsx";
import { ChevronRight } from "lucide-react";

const AddOpportunity = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const etapes = [
    { id: 1, name: "Prospection" },
    { id: 2, name: "Qualification" },
    { id: 3, name: "Proposition" },
    { id: 4, name: "Négociation" },
    { id: 5, name: "Gagné" },
    { id: 6, name: "Perdu" },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addOpportunity({
        id: Date.now(),
        ...form,
      })
    );

    alert("Opportunity added!");
    console.log(form)
    navigate("/opportunities");
  };

  

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-2xl my-8">
      <button
        onClick={() => navigate("/pipeline")}
        className="text-gray-600 cursor-pointer hover:text-gray-800 flex items-center mb-4 font-medium"
      >
        <ChevronRight className="h-4 w-4 transform rotate-180 mr-1" /> Annuler
        et Retour au Pipeline
      </button>
      <h2 className="text-3xl font-bold text-gray-600  mb-6 border-b pb-2">
        Créer une Nouvelle Opportunité
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label="Entreprise"
            name="entreprise"
            onChange={handleChange}
            required
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Commercial Assigné
            </label>
            <select
              name="commercial"
              className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Sélectionner</option>
              <option value="Omar">Omar</option>
              <option value="Leila">Leila</option>
            </select>
          </div>

          <Field
            label="Montant (DH)"
            name="amount"
            onChange={handleChange}
            type="number"
            required
          />
          <Field
            label="Date de Clôture"
            onChange={handleChange}
            name="closeDate"
            type="date"
            required
          />
          <Field
            label="Probabilité (%)"
            onChange={handleChange}
            name="probability"
            type="number"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Étape Initiale
            </label>
            <select
              name="stage"
              className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500"
              value={form.stage}
              onChange={handleChange}
            >
              <option value="">Sélectionner</option>
              {etapes.map((etape) => (
                <option
                  key={etape.id}
                  name="etape"
                  value={etape.name}
                  onChange={handleChange}
                >
                  {etape.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-600 my-6 border-t pt-4">
          Détails du Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label="Contact Principal"
            onChange={handleChange}
            name="contact"
          />
          <Field label="Source" onChange={handleChange} name="source" type="text" />
          <Field
            label="Email"
            onChange={handleChange}
            name="email"
            type="email"
          />
          <Field label="Téléphone" onChange={handleChange} name="phone" />
        </div>

        <button
          type="submit"
          className="mt-8 w-full text-white bg-gray-700 p-3 rounded-lg font-bold text-lg hover:bg-gray-900 cursor-pointer transition-colors shadow-xl"
        >
          Créer l'Opportunité
        </button>
      </form>
    </div>
  );
};

export default AddOpportunity;
