import { useState } from "react";
import { defaultUser } from "../Assets/Image";
import { useHistory } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

export default function ProfileUser() {
  const history = useHistory();
  const [showBox, setShowBox] = useState(false);

  const styleIcons = {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px",
  };

  function logout() {
    localStorage.removeItem("token");
    history.push('/login')
  }

  return (
    <div>
      <img
        className="cursor-pointer image-profile-user-header"
        src={defaultUser}
        alt="image user"
        onClick={() => setShowBox(true)}
      />

      <div
        className="box-profile-header"
        id={showBox ? "show-setting" : "hide-setting"}
      >
        <div
          className="cursor-pointer div-menu-user-profile-header"
          style={{ marginBottom: "10px" }}
          onClick={() => logout()}
        >
          <IoLogOutOutline size="20px" style={styleIcons} />
          <p className="txt-sub-menu-profile-user">Logout</p>
        </div>
      </div>

      <div
        style={showBox ? { visibility: "visible" } : { visibility: "hidden" }}
        onClick={() => setShowBox(false)}
        className="backdrop-app-extend"
      />
    </div>
  );
}
