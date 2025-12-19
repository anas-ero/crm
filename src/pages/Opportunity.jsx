import React from "react";
import { useSelector } from "react-redux";
import { AlertTriangle } from "lucide-react";
import StageBadge from "../components/StageBadge.jsx";
import { Th } from "../components/Th.jsx";
import Td from "../components/Td.jsx";
import { Link } from "react-router-dom";
import { ArrowDownToLine } from "lucide-react";
import { exportToCsv } from "../func/exportToCsv.js";

const Opportunity = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  if(window !== window.length > 650) {
    
  }
  const opportunities = useSelector((state) => state.opportunity.opportunities);
  const displayedOpportunities = opportunities;
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold border-b border-gray-800 pb-3 mb-6 text-black">
        Liste des Opportunités
      </h1>
      <button
        onClick={() => exportToCsv("opportunites.csv", displayedOpportunities)}
        className="border px-4 py-2 flex bg-green-500/60 border-green-400/70 text-md font-bold mb-3 text-neutral-900 cursor-pointer rounded-base"
      >
        <ArrowDownToLine color="#0d0d0d" />
        Exporter CSV
      </button>
      <div className="rounded-xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          {isMobile ? (
            alert("change to desktop")
          ) : (
            <table className="min-w-full divide-y divide-gray-800 ">
              <thead className="text-center">
                <tr className="text-center">
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

              <tbody className="divide-y ">
                {opportunities.map((opp) => {
                  const isRisk =
                    new Date(opp.closeDate) < new Date() &&
                    opp.stage !== "Gagné";

                  return (
                    <tr key={opp.id} className="hover:bg-gray-300 transition">
                      <Td strong>{opp.entreprise}</Td>
                      <Td>
                        <div className="text-sm">{opp.contact}</div>
                        <div className="text-xs ">{opp.email}</div>
                      </Td>
                      <Td>{opp.amount} DH</Td>
                      <Td>{opp.probability}%</Td>
                      <Td>
                        <StageBadge stage={opp.stage} />
                      </Td>
                      <Td>{opp.closeDate}</Td>
                      <Td>{opp.source}</Td>
                      <Td className="">
                        {isRisk && (
                          <AlertTriangle
                            className=" text-red-500 "
                            title="Opportunité à risque"
                          />
                        )}
                      </Td>
                      <Td>
                        <Link
                          to={`/opportunities/${opp.id}`}
                          className="text-indigo-600 hover:text-indigo-900 font-semibold"
                        >
                          Voir details
                        </Link>
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Empty state */}
        {opportunities.length === 0 && (
          <div className="p-6 text-center text-gray-400">
            Aucune opportunité trouvée
          </div>
        )}
      </div>
    </div>
  );
};

export default Opportunity;
