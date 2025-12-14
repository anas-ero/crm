import React from "react";
import { useSelector } from "react-redux";
import {
  TrendingUp,
  BarChart3,
  Percent,
  Calendar,
} from "lucide-react";

import DashboardCard from "../components/DashboardCard.jsx";
const Dashboard = () => {
  const opportunities = useSelector(
    (state) => state.opportunity.opportunities
  );

  const pipelineTotal = opportunities.reduce(
    (sum, o) => sum + Number(o.amount || 0),
    0
  );

  const weightedRevenue = opportunities.reduce(
    (sum, o) => sum + o.amount * (o.probability / 100),
    0
  );

  const wonDeals = opportunities.filter(
    (o) => o.stage === "Gagné"
  ).length;

  const conversionRate = opportunities.length
    ? ((wonDeals / opportunities.length) * 100).toFixed(1)
    : 0;

  const now = new Date();
  const forecastMonth = opportunities
    .filter((o) => {
      const d = new Date(o.closeDate);
      return (
        d.getMonth() === now.getMonth() &&
        d.getFullYear() === now.getFullYear()
      );
    })
    .reduce(
      (sum, o) => sum + o.amount * (o.probability / 100),
      0
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl border-b border-gray-800 pb-3 font-bold mb-6 text-black">
        Tableau de Bord
        </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        <DashboardCard
          bgColor={"bg-blue-50"}
          borderColor={"border-blue-200"}
          title="Pipeline Total"
          value={`${pipelineTotal.toLocaleString()} DH`}
          subtitle="Montant total des opportunités"
          icon={BarChart3}
        />

        <DashboardCard
        bgColor={"bg-emerald-200/20"}
        borderColor={"border-emerald-200"}
          title="Revenu Pondéré"
          value={`${weightedRevenue.toLocaleString()} DH`}
          subtitle="Prévision réaliste"
          icon={TrendingUp}
        />

        <DashboardCard
          bgColor={"bg-amber-50"}
          borderColor={"border-amber-200"}
          title="Forecast du Mois"
          value={`${forecastMonth.toLocaleString()} DH`}
          subtitle="Basé sur les dates de clôture"
          icon={Calendar}
        />

        <DashboardCard
          bgColor={"bg-indigo-50"}
          borderColor={"border-indigo-200"}
          title="Taux de Conversion"
          value={`${conversionRate}%`}
          subtitle="Deals gagnés / total"
          icon={Percent}
        />
      </div>
    </div>
  );
};

export default Dashboard;
