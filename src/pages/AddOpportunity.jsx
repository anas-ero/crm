import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "../components/Field.jsx"; // Assure-toi que ton composant Field accepte une prop 'error'
import { useDispatch } from "react-redux";
import { addOpportunity } from "../redux/OpportunitySlice.jsx";
import { ChevronRight, AlertCircle } from "lucide-react"; // Ajout d'une icône pour l'erreur

const AddOpportunity = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    entreprise: "",
    commercial: "",
    amount: "",
    closeDate: "",
    probability: "",
    stage: "",
    contact: "",
    source: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const etapes = [
    { id: 1, name: "Prospection" },
    { id: 2, name: "Qualification" },
    { id: 3, name: "Proposition" },
    { id: 4, name: "Négociation" },
    { id: 5, name: "Gagné" },
    { id: 6, name: "Perdu" },
  ];


  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!form.entreprise.trim()) {
      tempErrors.entreprise = "Le nom de l'entreprise est requis.";
      isValid = false;
    }
    if (!form.amount) {
      tempErrors.amount = "Le montant est requis.";
      isValid = false;
    }
    if (!form.closeDate) {
      tempErrors.closeDate = "La date de clôture est requise.";
      isValid = false;
    }
    if (!form.stage) {
      tempErrors.stage = "Veuillez sélectionner une étape.";
      isValid = false;
    }

    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Format d'email invalide.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });


    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null // 
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(
        addOpportunity({
          id: Date.now(),
          ...form,
          amount: Number(form.amount),
          probability: Number(form.probability)
        })
      );
      alert("Opportunity added!");
      navigate("/opportunities");
    } else {
      window.scrollTo(0, 0);
    }
  };


  const ErrorMsg = ({ msg }) => (
    msg ? <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{msg}</p> : null
  );

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-2xl my-8">
      <button
        onClick={() => navigate("/pipeline")}
        className="text-gray-600 cursor-pointer hover:text-gray-800 flex items-center mb-4 font-medium"
      >
        <ChevronRight className="h-4 w-4 transform rotate-180 mr-1" /> Annuler
        et Retour au Pipeline
      </button>

      <h2 className="text-3xl font-bold text-gray-600 mb-6 border-b pb-2">
        Créer une Nouvelle Opportunité
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


          <div>
            <Field
              label="Entreprise"
              name="entreprise"
              value={form.entreprise}
              onChange={handleChange}

              className={errors.entreprise ? "border-red-500" : ""}
            />
            <ErrorMsg msg={errors.entreprise} />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Commercial Assigné
            </label>
            <select
              name="commercial"
              value={form.commercial}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Sélectionner</option>
              <option value="Omar">Omar</option>
              <option value="Leila">Leila</option>
            </select>
          </div>


          <div>
            <Field
              label="Montant (DH)"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              type="number"
            />
            <ErrorMsg msg={errors.amount} />
          </div>

          <div>
            <Field
              label="Date de Clôture"
              onChange={handleChange}
              name="closeDate"
              value={form.closeDate}
              type="date"
            />
            <ErrorMsg msg={errors.closeDate} />
          </div>

          <Field
            label="Probabilité (%)"
            onChange={handleChange}
            name="probability"
            value={form.probability}
            type="number"
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Étape Initiale <span className="text-red-500">*</span>
            </label>
            <select
              name="stage"
              className={`w-full p-2 border rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500 ${errors.stage ? "border-red-500" : "border-gray-300"
                }`}
              value={form.stage}
              onChange={handleChange}
            >
              <option value="">Sélectionner</option>
              {etapes.map((etape) => (
                <option key={etape.id} value={etape.name}>
                  {etape.name}
                </option>
              ))}
            </select>
            <ErrorMsg msg={errors.stage} />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-600 my-6 border-t pt-4">
          Détails du Contact
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label="Contact Principal"
            onChange={handleChange}
            value={form.contact}
            name="contact"
          />
          <Field
            label="Source"
            onChange={handleChange}
            value={form.source}
            name="source"
            type="text"
          />

          <div>
            <Field
              label="Email"
              onChange={handleChange}
              name="email"
              value={form.email}
              type="email"
            />
            <ErrorMsg msg={errors.email} />
          </div>

          <Field label="Téléphone" onChange={handleChange} value={form.phone} name="phone" />
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