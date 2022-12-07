import { useContext } from "react";
import { EditContext } from "../../Components/Context";
import InputNormal from "../../Components/InputNormal";
import onChangeInputNormalRequire from "../../Components/onChangeInputNormalRequire";
import onChangeInputNormalNoRequire from "../../Components/onChangeInputNormalNoRequire";
import UploadImageOrSelectAvatar from "../../Components/UploadImageOrSelectAvatar";
import Remove from './Remove'

export default function Edit() {
  const {
    editDetail,
    setEditDetail,
    errorEditDetail,
    setErrorEditDetail,
  } = useContext(EditContext);

  function onChangeCallbackAvatar(value) {
    if (value.icon) {
      setEditDetail({
        ...editDetail,
        avatar_icon: value.icon,
        avatar_color: value.color,
        image_url: null,
        use_image_re_new_upload : false ,
        use_avatar : true ,
        default_image_url : null
      });
    } else {
      setEditDetail({
        ...editDetail,
        avatar_icon: null,
        avatar_color: null,
        image_url: value.img,
        use_image_re_new_upload : true ,
        use_avatar : false ,
        default_image_url : null
      });
    }
  }

  return (
    <div>
    <Remove/>
    <div className="div-form">
      <br />
      <InputNormal
        header="Name"
        placeholder="category name"
        onChange={(e) =>
          onChangeInputNormalRequire(
            e.target.value,
            editDetail,
            "name",
            setEditDetail,
            errorEditDetail,
            setErrorEditDetail
          )
        }
        require={true}
        error={errorEditDetail.name}
        messageRequire="name is require"
        value={editDetail.name}
      />
      <br />
      <InputNormal
        header="Description"
        placeholder="Description"
        onChange={(e) =>
            onChangeInputNormalNoRequire(
            e.target.value,
            editDetail,
            "description",
            setEditDetail
          )
        }
        value={editDetail.description}
      />
      <br />
      <UploadImageOrSelectAvatar
        defaultAvatar={editDetail.avatar_icon}
        defaultColor={editDetail.avatar_color}
        defaultImage={editDetail.default_image_url}
        image={editDetail.image_url}
        onChangeCallbackAvatar={onChangeCallbackAvatar}
      />
      <br />
    </div>
  </div>
  )
}
