import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function BtnBackPage({ RoutePath , style }) {
  const history = useHistory();

  return (
    <div>
      <Button
        size="large"
        icon={<LeftOutlined />}
        className="btn-default-app"
        style={style ? style : { position: "absolute", borderRadius: "7px" }}
        onClick={() => history.push(RoutePath)}
      />
    </div>
  );
}
