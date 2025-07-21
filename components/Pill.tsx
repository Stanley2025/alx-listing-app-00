'use client';

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill = ({ label, onClick }: PillProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white transition"
    >
      {label}
    </button>
  );
};

export default Pill;
