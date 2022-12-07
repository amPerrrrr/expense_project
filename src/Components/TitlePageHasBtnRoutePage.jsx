import BtnCreateNewRightPage from "./BtnCreateNewRightPage";
import { Row, Col } from "reactstrap";
import FilterIcon from './FilterIcon'

export default function TitlePageHasBtnRoutePage({
  title,
  description,
  img,
  titleBtnRoutePath,
  RoutePath,
  useFilterIcons,
  stateStatusIcon,
  setStateStatusIcon,
  useBtnRoutePath
}) {
  return (
    <div className="mt-15px">
      {
        useBtnRoutePath && (
          <BtnCreateNewRightPage
          useIconBtnLarge={true}
          styleBtnLarge={{ width: "150px", marginTop: "5px" }}
          title={titleBtnRoutePath}
          RoutePath={RoutePath}
        />
        )
      }
      <Row>
        <Col xs={0} sm={2} md={6} lg={6} xl={6}>
          <div className="float-right">
            <img src={img} alt={img} className="img-title-page" />
          </div>
        </Col>
        <Col xs={12} sm={10} md={6} lg={6} xl={6}>
          <p className="txt-title-page"> {title} 
          {
            useFilterIcons && (
              <FilterIcon 
              stateOpen={stateStatusIcon} 
              setStateOpen={setStateStatusIcon}
              />
            )
          }
          </p>
          <p className="txt-description-page">{description}</p>
        </Col>
      </Row>
    </div>
  );
}
