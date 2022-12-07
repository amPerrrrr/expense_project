import { useState, useRef, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { FaRegImage } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import { Button, Modal } from "antd";
import SelectAvatar from "./SelectAvatar";
import { UploadImageAndSelectAvatarContext } from "./Context";
import RenderAvatarOnly from "./RenderAvatarOnly";
import ButtonCancelSaveRow from "./ButtonCancelSaveRow";

export default function UploadImageOrSelectAvatar({
  onChangeCallbackAvatar,
  defaultAvatar,
  defaultColor,
  image,
  noUseUploadImage,
  defaultImage,
}) {
  const imageUpload = useRef(null);
  const [visibleAvatar, setVisibleAvatar] = useState(false);
  const [visibleUploadImage, setVisibleUploadImage] = useState(false);
  const [avatar, setAvatar] = useState({
    icon: defaultAvatar ? defaultAvatar : "BiUser",
    color: defaultColor ? defaultColor : "#FF8383",
  });
  const [EditAvatar, setEditAvatar] = useState({
    icon: defaultAvatar ? defaultAvatar : "BiUser",
    color: defaultColor ? defaultColor : "#FF8383",
  });

  useEffect(() => {
    setAvatar({
      ...avatar,
      icon: defaultAvatar ? defaultAvatar : "BiUser",
      color: defaultColor ? defaultColor : "#FF8383",
    });

    return () => {};
  }, [defaultColor, defaultAvatar]);

  function onCancelModal() {
    setVisibleAvatar(false);
    setEditAvatar({
      ...EditAvatar,
      icon: avatar.icon,
      color: avatar.color,
    });
  }

  function saveSelectAvatar() {
    setAvatar({
      ...avatar,
      icon: EditAvatar.icon,
      color: EditAvatar.color,
    });
    let data = {
      icon: EditAvatar.icon,
      color: EditAvatar.color,
    };
    onChangeCallbackAvatar(data);
    setVisibleAvatar(false);
  }

  const handleImageUpload = (e) => {
    if (e.target.files[0] !== undefined) {
      let img_upload = e.target.files[0];
      let data = {
        img: img_upload,
      };
      onChangeCallbackAvatar(data);
    }
  };
  useEffect(() => {
    if (noUseUploadImage === true) {
      setVisibleUploadImage(false);
    } else {
      setVisibleUploadImage(true);
    }

    return () => {};
  }, [noUseUploadImage]);

  return (
    <UploadImageAndSelectAvatarContext.Provider
      value={{
        avatar: avatar,
        setAvatar: setAvatar,
        EditAvatar: EditAvatar,
        setEditAvatar: setEditAvatar,
        onCancelModal: onCancelModal,
        setVisibleAvatar: setVisibleAvatar,
      }}
    >
      <div>
        <Row>
          <Col
            xs={visibleUploadImage ? 12 : 12}
            sm={visibleUploadImage ? 12 : 12}
            md={visibleUploadImage ? 6 : 12}
            lg={visibleUploadImage ? 6 : 12}
            xl={visibleUploadImage ? 6 : 12}
          >
            <div className="div-select-avatar">
              <p className="txt-title-select-avatar">Avatar icon</p>

              <RenderAvatarOnly
                defaultImage={defaultImage}
                image={image}
                icon={avatar.icon}
                color={avatar.color}
                size={64}
              />
              <div>
                <Button
                  className="border-radius-7px mt-15px font-size-15px"
                  onClick={() => setVisibleAvatar(true)}
                >
                  Select Icon
                </Button>
              </div>
            </div>
            <Modal
              title={null}
              centered
              visible={visibleAvatar}
              onOk={() => onCancelModal()}
              onCancel={() => onCancelModal()}
              footer={null}
            >
              <SelectAvatar />
              <br />
              <ButtonCancelSaveRow
                txtCancel="Cancel"
                functionCancel={onCancelModal}
                txtSave="Save"
                functionSave={saveSelectAvatar}
              />
            </Modal>
          </Col>
          {visibleUploadImage && (
            <Col
              xs={visibleUploadImage ? 12 : 0}
              sm={visibleUploadImage ? 12 : 0}
              md={visibleUploadImage ? 6 : 0}
              lg={visibleUploadImage ? 6 : 0}
              xl={visibleUploadImage ? 6 : 0}
            >
              <div className="div-select-avatar" style={{ display: "grid" }}>
                <p className="txt-title-select-avatar">Image user</p>

                <div
                  className="div-upload-image-user cursor-pointer"
                  onClick={() => imageUpload.current.click()}
                >
                  <br />
                  <FaRegImage className="primary-color" size="50px" />

                  <div
                    className="div-select-avatar"
                    style={{ display: "grid" }}
                  >
                    <p className="txt-line-under font-size-19px primary-color-gray">
                      <FiUploadCloud size="20px" />

                      <span className="ml-10px ">Upload</span>
                    </p>
                  </div>
                </div>
                <p className="color-red">*Note 400 x 400 pix</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUpload}
                style={{
                  display: "none",
                }}
                value=""
              />
            </Col>
          )}
        </Row>
      </div>
    </UploadImageAndSelectAvatarContext.Provider>
  );
}
