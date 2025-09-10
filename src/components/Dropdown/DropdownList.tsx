'use client';

import DropdownItem from './DropdownItem';

type DropdownListProps = {
  options: string[];
  onSelect: (value: string) => void;
};

export default function DropdownList({ options, onSelect }: DropdownListProps) {
  return (
    <div className="flex flex-col gap-[20px] py-[20px] px-[24px] border border-[#f2f2f2] rounded-[6px] cursor-pointer">
      {options.map((option) => (
        <DropdownItem
          key={option}
          label={option}
          onSelect={() => onSelect(option)}
        />
      ))}
    </div>
  );
}
