import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import BtnBackPage from "../../Components/BtnBackPage";
import axios from "axios";
import * as api from "../../Service/Api_Service";
import Detail from "./Detail";
import Edit from "./Edit";
import { EditContext } from "../../Components/Context";
import ButtonCancelSaveRow from "../../Components/ButtonCancelSaveRow";
import ConfirmModalComponent from "../../Components/ConfirmModalComponent";
import AlertNotification from "../../Components/AlertNotification";
import checkDataNullReturnTrue from "../../Components/checkDataNullReturnTrue";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import UploadImageApi from '../../Components/UploadImageApi'
import { getPathImage_TTA } from '../../Service/Ip'


export default function AdmingCategory() {
  const history = useHistory();
  const { categoryID } = useParams();
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false)
  const [detail, setDetail] = useState(null);
  const [editDetail, setEditDetail] = useState({
    organization_id:null,
    name: null,
    avatar_icon: null,
    avatar_color: null,
    image_url: null,
    description: null,
    use_avatar: null,
    use_image_re_new_upload: false,
    default_image_url : null
  });
  const [errorEditDetail, setErrorEditDetail] = useState({
    name: false,
  });

  useEffect(() => {
    getDetailAPI();

    return () => {};
  }, [categoryID]);

  const getDetailAPI = () => {
    const getDetail = api.GET_CATEGORY_DETAIL(categoryID);
    axios(getDetail)
      .then((res) => {
        if (!res.data[0]) {
          history.push("/");
        } else {
          setDetail(res.data[0]);
          setEditDetail({
            ...editDetail,
            organization_id: res.data[0].organization_id,
            name: res.data[0].name,
            avatar_icon: res.data[0].avatar_icon,
            avatar_color: res.data[0].avatar_color,
            description: res.data[0].description,
            use_avatar: res.data[0].use_avatar,
            default_image_url : res.data[0].use_avatar ? null : getPathImage_TTA()+res.data[0].image_url,
          });
        }
      })
      .catch((error) => {
        // console.log(error.response);
      });
  };

  function cancelEdit() {
    setEditDetail({
      ...editDetail,
      organization_id: detail.organization_id,
      name: detail.name,
      avatar_icon: detail.avatar_icon,
      avatar_color: detail.avatar_color,
      image_url: null,
      description: detail.description,
      use_avatar: detail.use_avatar,
      use_image_re_new_upload: false,
      default_image_url : detail.use_avatar ? null : getPathImage_IDP()+detail.image_url,
    });
    setErrorEditDetail({
      ...errorEditDetail,
      name: false,

    });
    setEdit(false);
  }

  function checkBeforeEdit() {
    if (editDetail.name === null) {
      setErrorEditDetail({
        ...errorEditDetail,
        name: checkDataNullReturnTrue(editDetail.name),
      });
    } else {
      setErrorEditDetail({
        ...errorEditDetail,
        name: checkDataNullReturnTrue(editDetail.name),
        });
      let modalConfirm = {
        title: "Confirm Edit",
        icon: <ExclamationCircleOutlined />,
        onOK: editFunction,
      };
      ConfirmModalComponent(modalConfirm);
    }
  }

 async function editFunction() {
    setLoading(true)
    if (
      editDetail.use_image_re_new_upload === true &&
      editDetail.use_avatar === false
    ) {
      const imgURL = await UploadImageApi(editDetail.image_url);
      if (imgURL && imgURL.status === "success") {
        let data = {
          organization_id: detail.organization_id,
          name: editDetail.name ,
          avatar_icon: "-" ,
          avatar_color: "-" ,
          image_url: imgURL.pathUrlImage ,
          description: editDetail.description ? editDetail.description : "-" ,
          use_avatar: false 
        }
        editFCApi(data)
      }
    } else if (
      editDetail.use_image_re_new_upload === false &&
      editDetail.use_avatar === false
    ) {
      let data = {
        organization_id: editDetail.organization_id,
        name: editDetail.name ,
        avatar_icon: "-" ,
        avatar_color: "-" ,
        image_url: detail.image_url ,
        description: editDetail.description ? editDetail.description : "-" ,
        use_avatar: false 
      }
      editFCApi(data)
    } else if (
      editDetail.use_image_re_new_upload === false &&
      editDetail.use_avatar === true
    ) {
      let data = {
        organization_id: editDetail.organization_id,
        name: editDetail.name ,
        avatar_icon: editDetail.avatar_icon ,
        avatar_color: editDetail.avatar_color ,
        image_url: "-" ,
        description: editDetail.description ? editDetail.description : "-" ,
        use_avatar: true 
      }
      editFCApi(data)
    }
  }

  function editFCApi(data) {
    const editApi = api.EDIT_CATEGORY_ONE_DETAIL( categoryID , data )
    axios(editApi)
    .then( res => {
      cancelEdit()
      setLoading(false)
      getDetailAPI();
      AlertNotification("success" , "Edit success")
    })
    .catch( error => {
      setLoading(false)
      AlertNotification("error" , "Edit error")
    })
  }

  return (
<EditContext.Provider
      value={{
        edit: edit,
        setEdit: setEdit,
        detail: detail,
        setDetail: setDetail,
        editDetail: editDetail,
        setEditDetail: setEditDetail,
        errorEditDetail: errorEditDetail,
        setErrorEditDetail: setErrorEditDetail,
        categoryID : categoryID
      }}
    >
      <Container>
      <BtnBackPage RoutePath="/admin-category" />
      <p className="txt-header-title-page">Edit Category</p>

        {detail === null}
        <div className="div-border-permission1">
          <div className="div-border-components1">
            {detail === null}
            {edit === false && detail !== null && <Detail />}
            {edit === true && <Edit />}
          </div>

          <br />
          {edit === true && (
            <ButtonCancelSaveRow
              functionCancel={cancelEdit}
              functionSave={checkBeforeEdit}
              loadingSaveBtn={loading}
            />
          )}
          <br />
        </div>
      </Container>
    </EditContext.Provider>
  )
}
