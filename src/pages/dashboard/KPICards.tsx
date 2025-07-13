type KPI = {
  name: string; // Name of the KPI (e.g., Revenue)
  value: number; // Numeric value of the KPI
  mOm?: number; // Optional Month-over-Month change (as a percentage)
};
type Props = {
  kpis: KPI[];
};

const KPICards = ({ kpis }: Props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {kpis.map((kpi) => (
      <div key={kpi.name} className="bg-white rounded-2xl p-4 shadow-md">
        {/* KPI name (e.g., Revenue, Users) */}
        <p className="text-sm text-gray-500">{kpi.name}</p>
        {/* KPI value formatted with commas */}
        <p className="text-2xl font-semibold">{kpi.value.toLocaleString()}</p>
        {/* Optional MoM percentage: positive = green, negative = red */}
        {kpi.mOm !== undefined && (
          <p
            className={`text-sm ${
              kpi.mOm >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {kpi.mOm.toFixed(2)}% MoM
          </p>
        )}
      </div>
    ))}
  </div>
);

export default KPICards;
