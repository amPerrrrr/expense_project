import { useContext } from "react";
import { AdminCreateNewCategoryContext } from "../../Components/Context";
import InputNormal from "../../Components/InputNormal";
import onChangeInputNormalRequire from "../../Components/onChangeInputNormalRequire";
import onChangeInputNormalNoRequire from "../../Components/onChangeInputNormalNoRequire";
import UploadImageOrSelectAvatar from '../../Components/UploadImageOrSelectAvatar'

export default function Form() {
  const { newCategory, setNewCategory, errorNewCategory, setErrorNewCategory } =
    useContext(AdminCreateNewCategoryContext);


    function onChangeCallbackAvatar(value) {
      if(value.icon){
        setNewCategory({
          ...newCategory,
          avatar_icon: value.icon,
          avatar_color: value.color,
          image_url : null
        });
      } else {
        setNewCategory({
          ...newCategory,
          avatar_icon: null,
          avatar_color: null,
          image_url : value.img
        });
      }
    }

  return (
    <div className="div-form">
      <InputNormal
        header="Category name"
        placeholder="Category name"
        onChange={(e) =>
          onChangeInputNormalRequire(
            e.target.value,
            newCategory,
            "name",
            setNewCategory,
            errorNewCategory,
            setErrorNewCategory
          )
        }
        require={true}
        error={errorNewCategory.name}
        messageRequire="Category name is require"
        value={newCategory.name}
      />
      <InputNormal
        header="Description"
        placeholder="Description"
        onChange={(e) =>
          onChangeInputNormalNoRequire(
            e.target.value,
            newCategory,
            "description",
            setNewCategory
          )
        }
        require={false}
      />
           <UploadImageOrSelectAvatar
            defaultAvatar={newCategory.avatar_icon}
            defaultColor={newCategory.avatar_color}
            image={newCategory.image_url}
        onChangeCallbackAvatar={onChangeCallbackAvatar}
      />
    </div>
  );
}
