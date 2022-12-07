import {
  AiOutlineUserAdd,
  AiOutlineExperiment,
  AiOutlineGift,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineQuestionCircle,
  AiOutlineRocket,
  AiOutlineSafetyCertificate,
  AiOutlineSafety,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineSetting,
  AiOutlineSmile,
  AiOutlineThunderbolt,
  AiOutlineTag,
  AiOutlineTool,
  AiOutlineTrophy,
  AiOutlineUsb,
  AiOutlineUserSwitch,
  AiOutlineUsergroupAdd,
  AiOutlineWallet,
  AiOutlineReddit,
  AiOutlineRedEnvelope,
  AiOutlinePhone,
  AiOutlineRead,
  AiOutlinePrinter,
  AiOutlineStar
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";

export default function RenderIconFromString(icon , sizeIcon) {
  switch (icon) {
    case "AiOutlineStar":
      return <AiOutlineStar size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineUserAdd":
      return <AiOutlineUserAdd size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineExperiment":
      return <AiOutlineExperiment size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineGift":
      return <AiOutlineGift size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineHome":
      return <AiOutlineHome size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineInfoCircle":
      return <AiOutlineInfoCircle size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineQuestionCircle":
      return <AiOutlineQuestionCircle size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineRocket":
      return <AiOutlineRocket size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineSafetyCertificate":
      return <AiOutlineSafetyCertificate size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineSafety":
      return <AiOutlineSafety size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineShop":
      return <AiOutlineShop size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineShoppingCart":
      return <AiOutlineShoppingCart size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineShopping":
      return <AiOutlineShopping size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineSetting":
      return <AiOutlineSetting size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineSmile":
      return <AiOutlineSmile size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineThunderbolt":
      return <AiOutlineThunderbolt size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineTag":
      return <AiOutlineTag size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineTool":
      return <AiOutlineTool size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineTrophy":
      return <AiOutlineTrophy size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineUsb":
      return <AiOutlineUsb size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineUserSwitch":
      return <AiOutlineUserSwitch size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineUsergroupAdd":
      return <AiOutlineUsergroupAdd size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineWallet":
      return <AiOutlineWallet size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineReddit":
      return <AiOutlineReddit size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineRedEnvelope":
      return <AiOutlineRedEnvelope size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlinePhone":
      return <AiOutlinePhone size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlineRead":
      return <AiOutlineRead size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "AiOutlinePrinter":
      return <AiOutlinePrinter size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    case "BiUser":
      return <BiUser size={sizeIcon ? sizeIcon : "40px"} />;
      break;
    default:
      return <BiUser size={sizeIcon ? sizeIcon : "40px"} />;
      break;
  }
}
