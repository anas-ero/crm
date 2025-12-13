import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  AlertTriangle,
  Building2,
  DollarSign,
  Percent,
  Calendar,
  User,
  Mail,
  Check,
  X,
} from "lucide-react";

import Field from "../components/FieldUpdate.jsx";
import {
  updateOpportunity,
  deleteOpportunity,
} from "../redux/OpportunitySlice.jsx";

const DetailOpportunity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const opportunity = useSelector((state) =>
    state.opportunity.opportunities.find((opp) => String(opp.id) === String(id))
  );

  const [form, setForm] = useState(null);

  useEffect(() => {
    if (opportunity) {
      setForm({
        entreprise: opportunity.entreprise,
        stage: opportunity.stage,
        amount: opportunity.amount,
        probability: opportunity.probability,
        closeDate: opportunity.closeDate,
        commercial: opportunity.commercial,
        contact: opportunity.contact,
        email: opportunity.email,
      });
    }
  }, [opportunity]);

  if (!opportunity || !form) {
    return <div className="p-6 text-red-500">Opportunité introuvable</div>;
  }

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const weightedAmount = opportunity.amount * (opportunity.probability / 100);

  const isRisk =
    new Date(opportunity.closeDate) < new Date() &&
    opportunity.stage !== "Gagné";

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Voulez-vous vraiment supprimer cette opportunité ?"
    );

    if (!confirmed) return;

    dispatch(deleteOpportunity(opportunity.id));
  };

  return (
    <div className="min-h-screen p-8 w-4/5 mx-auto text-white">
      <button
        onClick={() => navigate("/pipeline")}
        className="flex items-center gap-2 text-black cursor-pointer mb-6"
      >
        <ChevronLeft size={18} />
        Retour au Pipeline
      </button>

      <h1 className="text-4xl uppercase font-bold text-black mb-8">
        {opportunity.entreprise}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl bg-gray-300/20 p-6 border ">
          <h2 className="text-xl font-semibold text-black mb-6">
            Détails du Deal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field
              icon={Building2}
              label="Entreprise"
              value={form.entreprise}
              onChange={(v) => updateField("entreprise", v)}
            />

            <Field
              label="Étape (Stage)"
              value={form.stage}
              select
              options={[
                "Prospection",
                "Qualification",
                "Proposition",
                "Négociation",
                "Gagné",
                "Perdu",
              ]}
              onChange={(v) => updateField("stage", v)}
            />

            <Field
              icon={DollarSign}
              label="Montant (DH)"
              value={form.amount}
              onChange={(v) => updateField("amount", v)}
            />

            <Field
              icon={Percent}
              label="Probabilité (%)"
              value={form.probability}
              onChange={(v) => updateField("probability", v)}
            />

            <Field
              icon={Calendar}
              label="Date de Clôture"
              value={form.closeDate}
              onChange={(v) => updateField("closeDate", v)}
            />

            <Field
              icon={User}
              label="Commercial Assigné"
              value={form.commercial}
              onChange={(v) => updateField("commercial", v)}
            />

            <Field
              icon={User}
              label="Contact Principal"
              value={form.contact}
              onChange={(v) => updateField("contact", v)}
            />

            <Field
              icon={Mail}
              label="Email"
              value={form.email}
              onChange={(v) => updateField("email", v)}
            />
          </div>
        </div>

        <div className="rounded-2xl bg-gray-300/20 p-6 border border-white/5 h-fit">
          <h2 className="text-xl text-black font-semibold mb-4">Statut</h2>
          {isRisk && (
            <div className="flex px-6 items-center gap-2 bg-red-500/15 text-red-300 rounded-xl p-4">
              <AlertTriangle size={18} />
              <span className="text-sm px-2 text-red-400 font-semibold">
                Risque : Date de clôture dépassée
              </span>
            </div>
          )}

          <div className="bg-gray-400/30 rounded-xl mt-3 p-4 mb-4">
            <p className="text-sm text-black mb-1">Montant Pondéré</p>
            <p className="text-3xl font-bold text-black">
              {weightedAmount.toLocaleString()} DH
            </p>
          </div>

          <div>
            <div className="flex  items-center mt-2 gap-2 bg-emerald-200/60 rounded-xl p-4">
              <button
                onClick={() => {
                  dispatch(
                    updateOpportunity({
                      id: opportunity.id,
                      ...form,
                    })
                  );
                  alert("Opportunité mise à jour avec succès !");
                }}
                className="flex text-md px-2 gap-2 font-semibold cursor-pointer text-emerald-800"
              >
                <Check />
                Enregistrer les modifications
              </button>
            </div>

            <div className="flex items-center mt-2 gap-2 bg-red-300/40 rounded-xl p-4">
              <button
                onClick={() => {
                  handleDelete();
                }}
                className="flex text-md px-2 gap-2 font-semibold cursor-pointer text-red-800"
              >
                <X />
                Supprimer l'opportunité
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOpportunity;
