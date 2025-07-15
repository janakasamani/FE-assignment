import reportData from "@data/report.json";
import PeriodFilter from "@components/PeriodFilter";
import ProfitLossSection from "./ProfitLossSection";
import MetricSection from "./MetricSection";
import { setPeriod } from "../../redux/periodSlice";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

const Report = () => {
  const dispatch = useDispatch();
  const period = useSelector((state: RootState) => state.period.selectedPeriod);
  const data = reportData.reportResult;

  return (
    <div className="p-4 space-y-6">
      <PeriodFilter
        period={period}
        setPeriod={(val) => dispatch(setPeriod(val))}
      />
      <ProfitLossSection data={data.profitnLoss} period={period} />
      <MetricSection />
    </div>
  );
};

export default Report;
