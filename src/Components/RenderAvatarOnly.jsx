import { Avatar } from "antd";
import RenderIconFromString from "./RenderIconFromString";

export default function RenderAvatarOnly({
  image,
  icon,
  color,
  size,
  sizeIcon,
  classNameDiv,
  styleDiv,
  styleAvatar,
  useImageUrl,
  defaultImage,
}) {
  return (
    <div className={classNameDiv} style={styleDiv}>
      {!image && defaultImage && (
        <Avatar
          size={size ? size : 64}
          src={defaultImage}
          style={styleAvatar}
        />
      )}
      {image && !defaultImage && (
        <Avatar
          size={size ? size : 64}
          src={useImageUrl ? image : URL.createObjectURL(image)}
          style={styleAvatar}
        />
      )}

      {!image && !defaultImage && (
        <Avatar
          size={size ? size : 64}
          icon={RenderIconFromString(icon, sizeIcon)}
          style={{
            ...styleAvatar,
            backgroundColor: color,
          }}
        />
      )}
    </div>
  );
}
