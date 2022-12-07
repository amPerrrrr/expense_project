import { useState } from "react";
import { Container } from "reactstrap";
import TitlePageHasBtnRoutePage from "../../Components/TitlePageHasBtnRoutePage";
import Expand from "react-expand-animated";
import { budget } from '../../Assets/Image'

export default function AdminBudget() {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <TitlePageHasBtnRoutePage
        title="Budget"
        description="To add budget in each organisation, branch, department and person"
        img={budget}
        stateStatusIcon={open}
        setStateStatusIcon={setOpen}
      />
       <Expand open={open} duration={500}>
        <div>filter all</div>
      </Expand>
    </Container>
  )
}
