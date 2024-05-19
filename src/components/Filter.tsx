import { useEffect, useState } from 'react';
import { Filters } from '../types';

type FilterProps = {
  title: string;
  filters: Filters;
  currentValue: string;
  onFilterChange: (value: string) => void;
};

export default function Filter({
  title,
  filters,
  currentValue,
  onFilterChange,
}: FilterProps) {
  const [filterValue, setFilterValue] = useState(currentValue);

  useEffect(() => {
    setFilterValue(currentValue);
  }, [currentValue]);

  const handleFilterChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setFilterValue(value);
    onFilterChange(value);
  };

  return (
    <div className="filters">
      <span>{title}</span>
      {filters.map(({ label, value }) => (
        <button
          key={value}
          className="btn"
          value={value}
          onClick={handleFilterChange}
          disabled={value === filterValue}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
