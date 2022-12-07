import { useContext } from "react";
import { EditContext } from "../../Components/Context";
import AlertNotification from "../../Components/AlertNotification";
import ConfirmModalComponent from "../../Components/ConfirmModalComponent";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import * as api from "../../Service/Api_Service";
import { useHistory } from "react-router-dom";
import IconRemoveData from '../../Components/IconRemoveData'

export default function Remove() {
  const { categoryID } = useContext(EditContext);
  const history = useHistory();

  function confirmRemove() {
    let modalConfirm = {
      title: "Confirm Remove",
      icon: <ExclamationCircleOutlined className="color-red-error" />,
      onOK: remove,
      okType: "danger",
      okText: "Remove",
    };
    ConfirmModalComponent(modalConfirm);
  }

  function remove() {
    const remove = api.REMOVE_CATEGORY_ONE(categoryID);
    axios(remove)
      .then((res) => {
        AlertNotification("success", "Remove success");
        history.push("/admin-category");
      })
      .catch((error) => {
        AlertNotification("error", "Remove error");
        // console.log(error.response);
      });
  }

  return (
    <div>
      <IconRemoveData
        onClick={() => confirmRemove()}
      />
      <div className="clear-both" />
    </div>
  );
}
