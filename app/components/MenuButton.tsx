import { FaBars } from "react-icons/fa";

export default function MenuButton() {
  return (
    <button className="flex justify-center items-center h-[60px] w-[60px] bg-yellow rounded-full">
      <FaBars size={25} />
    </button>
  );
}
