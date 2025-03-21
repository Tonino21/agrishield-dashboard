import IntroduzioneDashboard from "./components/IntroduzioneDashboard";
import DashboardFinale from "./components/DashboardFinalePartnership.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <IntroduzioneDashboard />
      <DashboardFinale />
    </main>
  );
}


