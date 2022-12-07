import { useState } from "react";
import { Container } from "reactstrap";
import { request, i, hour_glass, tick } from "../../Assets/Image";
import TitlePageHasBtnRoutePage from "../../Components/TitlePageHasBtnRoutePage";
import Expand from "react-expand-animated";

export default function AdminRequest() {
  const [open, setOpen] = useState(false);

  return (
<Container>
      <TitlePageHasBtnRoutePage
        title="Request"
        description="To do something with other expense-projects sent to you"
        img={request}
        useFilterIcons={true}
        stateStatusIcon={open}
        setStateStatusIcon={setOpen}
      />
      <Expand open={open} duration={500}>
        <div>filter all</div>
      </Expand>
    </Container>
  )
}
