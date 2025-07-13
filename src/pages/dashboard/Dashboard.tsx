import { useState } from "react";
import KPICards from "./KPICards";
import PeriodFilter from "../../components/PeriodFilter";
import ChartDisplay from "./ChartsDisplay";
import monthly from "@data/monthly.json";
import quarterly from "@data/quarterly.json";
import yearly from "@data/yearly.json";

const dataMap = {
  monthly,
  quarterly,
  yearly,
};

const Dashboard = () => {
  const [period, setPeriod] = useState<"monthly" | "quarterly" | "yearly">(
    "monthly"
  );
  const data = dataMap[period];

  return (
    <div className="p-4 space-y-6">
      <PeriodFilter period={period} setPeriod={setPeriod} />
      <KPICards kpis={data.mainDashboardKPIs.topKPIs} />
      <ChartDisplay
        charts={data.mainDashboard.charts}
        dateArray={data.mainDashboard.dateArray}
      />
    </div>
  );
};

export default Dashboard;
