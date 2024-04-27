import { useState } from "react";

export interface SelectItem {
  id: number;
  name: string;
  disabled?: boolean;
}

export type SelectItems = Array<SelectItem>;

export default function Select({
  items,
  value,
  onChange,
}: {
  items: SelectItems;
  value: SelectItem;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value);

  const toggleDropdown = () => setIsOpen(!isOpen);

  function handleItemClick(item: SelectItem) {
    setSelectedItem(item);
    setIsOpen(false);
    onChange({
      target: { value: item.id.toString() },
    } as React.ChangeEvent<HTMLSelectElement>);
  }

  return (
    <div className="relative inline-block w-80">
      <button
        onClick={toggleDropdown}
        className="block w-80 p-2 border-slate-900 bg-slate-950 rounded appearance-none outline-none focus:outline-none focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
      >
        {selectedItem.name}
      </button>
      {isOpen && (
        <ul className="absolute w-80 mt-2 py-1 border rounded border-slate-900 bg-slate-950  shadow-xl">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="px-4 py-1 hover:bg-slate-500 hover:text-white cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
