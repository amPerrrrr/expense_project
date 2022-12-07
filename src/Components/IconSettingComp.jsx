import { FiEdit } from "react-icons/fi";

export default function IconSettingComp({ onClick, size, className, style }) {
  return (
    <FiEdit
      className={`cursor-pointer ${className}`}
      size={size ? size : "30px"}
      style={style}
      onClick={onClick}
    />
  );
}
