import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface PeriodData {
  [key: string]: number;
}

interface FieldItem {
  name: string;
  monthly?: number;
  quarterly?: number;
  yearly?: number;
  period?: {
    monthly?: PeriodData;
    quarterly?: PeriodData;
    yearly?: PeriodData;
  };
}

interface ProfitLossItemProps {
  item: FieldItem & { fields?: FieldItem[] };
  period: "monthly" | "quarterly" | "yearly"; // Selected time period to display
}
// Component to render a collapsible profit/loss category with subfields
const ProfitLossItem = ({ item, period }: ProfitLossItemProps) => {
  const [open, setOpen] = useState(false);
  const totalValue = item[period];

  return (
    <div className="mb-4">
      <div
        className="cursor-pointer font-medium text-sm text-[var(--color-dark)] mb-1 flex items-center justify-between hover:text-[var(--color-blue)]"
        onClick={() => setOpen(!open)}
      >
        {/* Left: expand icon and label */}
        <div className="flex items-center gap-2">
          {open ? <ChevronDown /> : <ChevronRight />}
          <span>{item.name}</span>
        </div>
        {/* Right: total value for this category */}
        <span className="text-right text-[var(--color-dark)]">
          ${totalValue}
        </span>
      </div>

      {/* Nested subfields, only shown when open */}
      {open && item.fields && (
        <div className="ml-6 space-y-3 transition-all duration-300 ease-in-out">
          {item.fields?.map((field, index) => {
            const periodData = field.period?.[period] ?? {};

            return (
              <div key={index} className="text-sm text-gray-700">
                {/* Subfield row: name and value */}
                <div className="flex justify-between font-medium">
                  <span>{field.name}</span>
                  <span>${field[period]}</span>
                </div>

                <ul className="ml-4 mt-1 list-disc text-xs text-gray-500">
                  {Object.entries(periodData).map(([label, value]) => (
                    <li key={label}>
                      {label}: ${value}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProfitLossItem;
