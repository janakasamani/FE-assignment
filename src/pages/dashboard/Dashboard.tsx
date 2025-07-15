import monthly from "@data/monthly.json";
import quarterly from "@data/quarterly.json";
import yearly from "@data/yearly.json";
import { useDispatch, useSelector } from "react-redux";
import PeriodFilter from "@components/PeriodFilter";
import ChartDisplay from "./ChartsDisplay";
import KPICards from "./KPICards";
import { setPeriod } from "../../redux/periodSlice";
import type { RootState } from "../../redux/store";

const dataMap = {
  monthly,
  quarterly,
  yearly,
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const period = useSelector((state: RootState) => state.period.selectedPeriod);
  const data = dataMap[period];

  return (
    <div className="p-4 space-y-6">
      <PeriodFilter
        period={period}
        setPeriod={(val) => dispatch(setPeriod(val))}
      />
      <KPICards kpis={data.mainDashboardKPIs.topKPIs} />
      <ChartDisplay
        charts={data.mainDashboard.charts}
        dateArray={data.mainDashboard.dateArray}
      />
    </div>
  );
};

export default Dashboard;
