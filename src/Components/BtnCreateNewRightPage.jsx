import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { AiOutlinePlus } from "react-icons/ai";

export default function BtnCreateNewRightPage({
  classNameDiv,
  styleDiv,
  classNameBtnLarge,
  styleBtnLarge,
  classNameBtnSmall,
  styleBtnSmall,
  title,
  RoutePath,
  useIconBtnLarge,
}) {
  const history = useHistory();
  return (
    <div className={classNameDiv} style={styleDiv}>
      <Button
        icon={
          useIconBtnLarge ? (
            <AiOutlinePlus
              size="20px"
              style={{ margin: "-2px 10px auto 0px" }}
            />
          ) : null
        }
        style={
          styleBtnLarge ? styleBtnLarge : { height: "40px", fontSize: "20px" }
        }
        className={`btn-default-app hide-content-when-display-is-mobile btn-float-right-title-page ${classNameBtnLarge}`}
        onClick={() => history.push(RoutePath)}
      >
        {title}
      </Button>
      <Button
        size="large"
        icon={<PlusCircleOutlined />}
        className={`btn-default-app hide-content-when-display-is-lg btn-float-right-title-page br-7px ${classNameBtnSmall}`}
        style={styleBtnSmall}
        onClick={() => history.push(RoutePath)}
      />
    </div>
  );
}
