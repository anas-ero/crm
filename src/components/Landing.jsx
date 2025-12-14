import { Link } from "react-router-dom";
import { LayoutDashboard, KanbanSquare, BarChart3 } from "lucide-react";
import FeatureCard from "./FeatureCard.jsx";
import TeamCard from "./TeamCard.jsx";

const LandingPage = () => {
  return (
    <div className="">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          CRM Pipeline de Ventes
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={LayoutDashboard}
            title="Analytique du Tableau de Bord"
          />
          <FeatureCard icon={KanbanSquare} title="Pipeline Visuel" />
          <FeatureCard icon={BarChart3} title="Analyses Intelligentes" />
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Équipe du Projet
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <TeamCard name="Anas" role={"Logic and calculations"} />
            <TeamCard name="Diaa" role={"Routing and Styles"} />
          </div>
          <Link
            to="/dashboard"
            className="inline-block mt-5 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Enter the Application
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
