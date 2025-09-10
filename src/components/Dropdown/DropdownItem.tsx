'use client';

type DropdownItemProps = {
  label: string;
  onSelect: () => void;
};

export default function DropdownItem({ label, onSelect }: DropdownItemProps) {
  return (
    <div onClick={onSelect} className="w-full cursor-pointer">
      {label}
    </div>
  );
}
