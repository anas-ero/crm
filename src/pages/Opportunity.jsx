import React, { useState } from "react"; // 1. Import useState
import { useSelector } from "react-redux";
import { AlertTriangle, ArrowDownToLine } from "lucide-react";
import StageBadge from "../components/StageBadge.jsx";
import { Th } from "../components/Th.jsx";
import Td from "../components/Td.jsx";
import { Link } from "react-router-dom";
import { exportToCsv } from "../func/exportToCsv.js";
import "../index.css";

const Opportunity = () => {
  const opportunities = useSelector((state) => state.opportunity.opportunities);
  const [filterStage, setFilterStage] = useState("");
  const displayedOpportunities = opportunities.filter((opp) => {
    if (filterStage === "" || filterStage === "Selectioner une etape") {
      return true;
    }
    return opp.stage === filterStage;
  });

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold border-b border-gray-800 pb-3 mb-6 text-black">
        Liste des Opportunités
      </h1>
      <div className="flex items-center gap-3 mb-4">
        <button

          onClick={() => exportToCsv("opportunites.csv", displayedOpportunities)}
          className="border px-4 py-2 flex bg-green-500/60 border-green-400/70 text-md font-bold text-neutral-900 cursor-pointer rounded-base hover:bg-green-500/80 transition"
        >
          <ArrowDownToLine className="mr-2" color="#0d0d0d" />
          Exporter CSV
        </button>

        <div className="flex items-center gap-3 ml-auto">
          <label htmlFor="countries" className="text-sm font-medium text-gray-700">Filtrer par étape :</label>
          <select
            id="countries"
            value={filterStage}
            onChange={(e) => setFilterStage(e.target.value)}
            className="block w-64 px-3 py-2.5 bg-neutral-secondary-medium border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          >
            <option value="">Toutes les étapes</option>

            <option value="Prospection">Prospection</option>
            <option value="Qualification">Qualification</option>
            <option value="Proposition">Proposition</option>
            <option value="Négociation">Négociation</option>
            <option value="Gagné">Gagné</option>
            <option value="Perdu">Perdu</option>
          </select>
        </div>
      </div>

      <div className="rounded-xl shadow-xl overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-center">
              <tr>
                <Th>Entreprise</Th>
                <Th>Contact</Th>
                <Th>Montant</Th>
                <Th>Probabilité</Th>
                <Th>Étape</Th>
                <Th>Clôture</Th>
                <Th>Source</Th>
                <Th className="text-center">Risque</Th>
                <Th>Action</Th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">

              {displayedOpportunities.map((opp) => {
                const isRisk =
                  new Date(opp.closeDate) < new Date() &&
                  opp.stage !== "Gagné";

                return (
                  <tr key={opp.id} className="hover:bg-gray-50 transition">
                    <Td strong>{opp.entreprise}</Td>
                    <Td>
                      <div className="text-sm font-medium text-gray-900">{opp.contact}</div>
                      <div className="text-xs text-gray-500">{opp.email}</div>
                    </Td>
                    <Td>{opp.amount} DH</Td>
                    <Td>{opp.probability}%</Td>
                    <Td>
                      <StageBadge stage={opp.stage} />
                    </Td>
                    <Td>{opp.closeDate}</Td>
                    <Td>{opp.source}</Td>
                    <Td className="text-center">
                      {isRisk && (
                        <div className="flex justify-center">
                          <AlertTriangle
                            className="text-red-500 h-5 w-5"
                            title="Opportunité à risque (Date dépassée)"
                          />
                        </div>
                      )}
                    </Td>
                    <Td>
                      <Link
                        to={`/opportunities/${opp.id}`}
                        className="text-primary-btn hover:text-indigo-900 font-semibold text-sm"
                      >
                        Voir details
                      </Link>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {displayedOpportunities.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            Aucune opportunité trouvée pour ce filtre.
          </div>
        )}
      </div>
    </div>
  );
};

export default Opportunity;