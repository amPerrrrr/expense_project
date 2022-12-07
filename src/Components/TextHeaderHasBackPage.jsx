import BtnBackPage from "./BtnBackPage";

export default function TextHeaderHasBackPage({
  RoutePath,
  title,
  classNameDiv,
  styleDiv,
  styleImgIcon,
  imgIcon,
  classNameImgIcon
}) {
  return (
    <div
      className={classNameDiv}
      style={styleDiv ? styleDiv : { marginTop: "20px" }}
    >
      <BtnBackPage RoutePath={RoutePath} />
      <p className="txt-title-text-header-has-back-page">
        {title}
        {imgIcon && (
          <img
            className={classNameImgIcon}
            src={imgIcon}
            alt={imgIcon}
            style={styleImgIcon ? styleImgIcon : { marginLeft: "10px" }}
          />
        )}
      </p>
    </div>
  );
}
