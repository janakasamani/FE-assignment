import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type ChartData = {
  name: string; // Label for the series or slice
  values: number[] | number; // Data points (array for series, number for pie)
  chartType: string; // Type of chart (e.g., 'line', 'columnStacked', 'donut')
};

type ChartsProps = {
  charts: Record<string, ChartData[] | null>; // Object mapping categories to chart data
  dateArray: string[]; // X-axis labels for line/column charts
};

const ChartDisplay = ({ charts, dateArray }: ChartsProps) => {
  /**
   * Converts custom chart type values into valid Highcharts types.
   */
  const getChartType = (type: string) => {
    if (type === "donut") return "pie";
    if (type === "columnStacked") return "column";
    return type || "line";
  };

  /**
   * Generates Highcharts options for pie/donut charts.
   */
  const getPieChartOptions = (chartType: "pie" | "donut", category: string) => {
    // Transform chart data into the format expected by Highcharts for pie charts
    const data = (charts[category] || []).map((item) => ({
      name: item?.name || "",
      y: typeof item?.values === "number" ? item.values : 0,
    }));

    return {
      chart: {
        type: "pie",
        height: 300,
      },
      title: { text: "" },
      plotOptions: {
        pie: {
          innerSize: chartType === "donut" ? "60%" : undefined,
          dataLabels: { enabled: true },
        },
      },
      series: [{ data }],
    };
  };
  /**
   * Generates Highcharts options for line/column/stacked charts.
   */
  const getMultiSeriesChartOptions = (
    chartArray: ChartData[],
    chartType: string
  ) => {
    const series = chartArray
      .filter((item): item is ChartData => item !== null) //  safely filter null
      .map((item) => ({
        name: item.name,
        data: Array.isArray(item.values) ? item.values : [],
      }));

    return {
      chart: {
        type: getChartType(chartType),
        height: 300,
      },
      title: { text: "" },
      xAxis: { categories: dateArray },
      yAxis: { title: "" },
      plotOptions: {
        column: { stacking: "normal" },
      },
      series,
    };
  };

  // Render all charts by category: either pie/donut or multi-series
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(charts).map(([category, chartArray]) => {
        // Skip empty or null chart data
        if (!chartArray || chartArray.length === 0) return null;

        const chartType = chartArray[0].chartType;

        const options =
          chartType === "pie" || chartType === "donut"
            ? getPieChartOptions(chartType as "pie" | "donut", category)
            : getMultiSeriesChartOptions(chartArray, chartType);

        return (
          <div key={category} className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-base font-medium mb-3 capitalize text-[var(--color-dark)]">
              {category.replace(/([A-Z])/g, " $1")}
            </h3>
             {/* Render the actual chart using HighchartsReact */}
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        );
      })}
    </div>
  );
};

export default ChartDisplay;
