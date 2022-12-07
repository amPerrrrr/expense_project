import axios from "axios";
import * as api from "../Service/Api_Service";

async function uploadImage(image) {
  let imageURL = null;
  if (image !== null) {
    const bodyImage = new FormData();
    bodyImage.append('file', image);
    const upload = api.UPLOAD_IMAGE(bodyImage);
    await axios(upload)
      .then((res) => {
        let dataSuccess = {
          pathUrlImage: res.data.message.id,
          status: "success",
        };
        imageURL = dataSuccess;
      })
      .catch((error) => {
        let dataError = {
          error: error.response,
          status: "error",
        };
        imageURL = dataError;
      });
  } else {
    let dataError = {
      error: "null",
      status: "null",
    };
    imageURL = dataError;
  }
  return imageURL;
  
  
}

export default uploadImage;
