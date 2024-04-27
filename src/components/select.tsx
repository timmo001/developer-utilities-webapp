import {
  mdiArrowUpDown,
  mdiChevronDoubleDown,
  mdiChevronDown,
  mdiChevronUp,
} from "@mdi/js";
import Icon from "@mdi/react";
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
        className="block w-80 p-2 border-slate-800 bg-slate-900 rounded appearance-none outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
      >
        {selectedItem.name}
      </button>
      {isOpen && (
        <ul className="absolute w-80 mt-2 py-1 border rounded border-slate-800 bg-slate-900  shadow-xl">
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
        <Icon size={0.8} path={isOpen ? mdiChevronUp : mdiChevronDown} />
      </div>
    </div>
  );
}
