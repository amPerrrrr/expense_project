import { useState } from "react";
import { Container } from "reactstrap";
import TitlePageHasBtnRoutePage from "../../Components/TitlePageHasBtnRoutePage";
import Expand from "react-expand-animated";
import { analysis } from '../../Assets/Image'

export default function AdminAnalysis() {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <TitlePageHasBtnRoutePage
        title="Analysis"
        description="To analyse all budget in each company "
        img={analysis}
        stateStatusIcon={open}
        setStateStatusIcon={setOpen}
      />
       <Expand open={open} duration={500}>
        <div>filter all</div>
      </Expand>
    </Container>
  )
}
