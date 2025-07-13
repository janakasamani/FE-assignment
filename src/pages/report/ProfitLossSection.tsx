import ProfitLossItem from './ProfitLossItem';

interface FieldItem {
  name: string;
  totalResult?: number;
  monthly?: number;
  quarterly?: number;
  yearly?: number;
}
  
interface ProfitLossItemType extends FieldItem {
  fields?: FieldItem[];
}

interface Props {
  data: ProfitLossItemType[];
  period: 'monthly' | 'quarterly' | 'yearly';
}

const ProfitLossSection = ({ data, period }: Props) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[var(--color-dark)]">
        Profit & Loss
      </h2>
      {data.map((item, idx) => (
        <ProfitLossItem key={idx} item={item} period={period} />
      ))}
    </div>
  );
};


export default ProfitLossSection;
