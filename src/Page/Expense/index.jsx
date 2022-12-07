import { useState } from "react";
import { Container , Row , Col } from "reactstrap";
import TitlePageHasBtnRoutePage from "../../Components/TitlePageHasBtnRoutePage";
import Expand from "react-expand-animated";
import { flat } from "../../Assets/Image";
import SearchInput from './SearchInput'
import TableProject from './TableProject'

export default function Expense() {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <TitlePageHasBtnRoutePage
        title="Expenses"
        description="To Expense goods and service in advance."
        img={flat}
        titleBtnRoutePath="New expenses"
        RoutePath="/new-expense"
        useFilterIcons={true}
        useBtnRoutePath={true}
        stateStatusIcon={open}
        setStateStatusIcon={setOpen}
      />
      <SearchInput />
       <Expand open={open} duration={500}>
        <div>
          input
        </div>
      </Expand>
      <TableProject />
    </Container>
  );
}
