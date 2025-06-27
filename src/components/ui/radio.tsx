import React from 'react';

export interface RadioGroupProps {
  name: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  showLabel?: boolean;
  labelPosition?: 'left' | 'right';
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  className = '',
  showLabel = true,
  labelPosition = 'right',
}) => (
  <div className={`flex gap-4 ${className}`}>
    {options.map(opt => (
      <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
        {showLabel && labelPosition === 'left' && <span className="text-sm">{opt.label}</span>}
        <input
          type="radio"
          name={name}
          value={opt.value}
          checked={value === opt.value}
          onChange={() => onChange?.(opt.value)}
          className="w-4 h-4 rounded-full text-primary focus:ring-primary border-primary"
        />
        {showLabel && labelPosition === 'right' && <span className="text-sm">{opt.label}</span>}
      </label>
    ))}
  </div>
);

export default RadioGroup;
