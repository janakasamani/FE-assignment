import { useState } from "react";
import reportData from "@data/report.json";
import PeriodFilter from "@components/PeriodFilter";
import ProfitLossSection from "./ProfitLossSection";
import MetricSection from "./MetricSection";

const periods = ["monthly", "quarterly", "yearly"] as const;
type Period = (typeof periods)[number];

const Report = () => {
  const [period, setPeriod] = useState<Period>("monthly");
  const data = reportData.reportResult;

  return (
    <div className="p-4 space-y-6">
      <PeriodFilter period={period} setPeriod={setPeriod} />
      <ProfitLossSection data={data.profitnLoss} period={period} />
      <MetricSection  />
    </div>
  );
};

export default Report;
