import { useState } from "react";
import { Container } from 'reactstrap';
import { project } from "../../Assets/Image"
import Expand from "react-expand-animated";
import TitlePageHasBtnRoutePage from '../../Components/TitlePageHasBtnRoutePage'
import SearchInput from './SearchInput'
import TableProject from './TableProject'

export default function Project() {
  const [open, setOpen] = useState(false)
  return (
    <Container>
     <TitlePageHasBtnRoutePage
        title="Project"
        description="To group all expense within any project."
        img={project}
        titleBtnRoutePath="New project"
        RoutePath="/new-project"
        useFilterIcons={true}
        useBtnRoutePath={true}
        stateStatusIcon={open}
        setStateStatusIcon={setOpen}
      />
    <SearchInput />
       <Expand open={open} duration={500}>
        <div>filter all</div>
      </Expand>
      <TableProject />
    </Container>
  )
}
