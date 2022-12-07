import { useState } from "react";
import { Container } from "reactstrap";
import BtnBackPageHasTitle from "../../Components/BtnBackPageHasTitle";
import Form from "./Form";
import { AdminCreateNewCategoryContext } from "../../Components/Context";
import ButtonCancelSaveRow from "../../Components/ButtonCancelSaveRow";
import { useHistory } from "react-router-dom";
import checkDataNullReturnTrue from "../../Components/checkDataNullReturnTrue";
import ConfirmModalComponent from '../../Components/ConfirmModalComponent'
import { ExclamationCircleOutlined } from "@ant-design/icons";
import TextHeaderHasBackPage from '../../Components/TextHeaderHasBackPage'
import UploadImageApi from '../../Components/UploadImageApi'
import * as api from "../../Service/Api_Service";
import axios from "axios";
import AlertNotification from "../../Components/AlertNotification";


export default function AdminCreateNewCategoryComp() {
  const history  = useHistory();
  // const { SelectedOrganization } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: null,
    avatar_icon: "BiUser",
    avatar_color: "#FF8383",
    image_url: null,
    description: null,
  });
  const [errorNewCategory, setErrorNewCategory] = useState({
    name: false,
  });

  function checkSaveCreateNewCategory() {
    if (newCategory.name === null) {
      setErrorNewCategory({
        ...errorNewCategory,
        name: checkDataNullReturnTrue(newCategory.name),
      });
    } else {
      setErrorNewCategory({
        ...errorNewCategory,
        name: checkDataNullReturnTrue(newCategory.name),
      });

      let modalConfirm = {
        title: "Confirm create new category",
        icon: <ExclamationCircleOutlined />,
        onOK: createNewCategory,
      };
      ConfirmModalComponent(modalConfirm);
    }
  }

  async function createNewCategory() {
    setLoading(true)
    const imgURL = await UploadImageApi(newCategory.image_url);
    if (imgURL && imgURL.status === "success") {
      createNewCategoryOne(imgURL.pathUrlImage);
    } else {
      createNewCategoryOne();
    }
  }

  function createNewCategoryOne(imgUrl) {
    let dataNewCategoryOne = {
      organization_id: 1,
      avatar_icon: imgUrl ? "-" : newCategory.avatar_icon,
      avatar_color: imgUrl ? "-" : newCategory.avatar_color,
      name: newCategory.name,
      image_url: imgUrl ? imgUrl : "-",
      use_avatar: imgUrl ? false : true,
      description: newCategory.description ? newCategory.description : "-",
    };
    const createNewCategory = api.CREATE_NEW_CATAGORIE(dataNewCategoryOne);
    axios(createNewCategory)
      .then((res) => {
        setLoading(false)
        AlertNotification("success" , "Create new category success")
        history.push("/admin-category")
      })
      .catch((error) => {
        setLoading(false)
        AlertNotification("error" , "Create new category error")
      });
      
  }


  return (
    <AdminCreateNewCategoryContext.Provider
      value={{
        newCategory,
        setNewCategory,
        errorNewCategory,
        setErrorNewCategory,
      }}
    >
      <Container>
          <TextHeaderHasBackPage
          title="Create New Category"
          RoutePath="/admin-category"/>
          <div className="div-border-components">
          <br />
          <Form />
        </div>
        <br />
        <div className="div-form">
          <ButtonCancelSaveRow
            functionSave={() => checkSaveCreateNewCategory()}
            functionCancel={() => history.push("/admin-category")}
            loadingSaveBtn={loading}
          />
        </div>
      </Container>
      
    </AdminCreateNewCategoryContext.Provider>

    
  );
}
