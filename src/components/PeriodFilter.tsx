type Period = "monthly" | "quarterly" | "yearly";

type Props = {
  period: Period;
  setPeriod: (value: Period) => void;
};

const periodOptions: Period[] = ["monthly", "quarterly", "yearly"];

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const PeriodFilter = ({ period, setPeriod }: Props) => (
  <div className="flex gap-4">
    {periodOptions.map((option) => {
      const isActive = period === option;

      const baseStyles =
        "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer";

      const activeStyles = "bg-[var(--color-beige)] text-[var(--color-light)]";

      const inactiveStyles =
        "border border-[var(--color-beige)] text-[var(--color-beige)] hover:bg-[var(--color-beige)] hover:text-[var(--color-light)]";

      return (
        <button
          key={option}
          className={`${baseStyles} ${
            isActive ? activeStyles : inactiveStyles
          }`}
          onClick={() => setPeriod(option)}
        >
          {capitalize(option)}
        </button>
      );
    })}
  </div>
);

export default PeriodFilter;
