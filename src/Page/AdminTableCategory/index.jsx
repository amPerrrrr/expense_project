import TableList from "./TableList";
import { Button } from "antd";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import TitlePageHasBtnRoutePage from '../../Components/TitlePageHasBtnRoutePage'
import { Container , Row , Col } from "reactstrap";


export default function AdminTableCategory(){
    const [open, setOpen] = useState(false)
    return(
        <Container>
           <TitlePageHasBtnRoutePage
            title="Category"
            description="To Manage all expense within any Category."
            // img={project}
            titleBtnRoutePath="New category"
            RoutePath="/admin-create-category"
            useFilterIcons={true}
            useBtnRoutePath={true}
            stateStatusIcon={open}
            setStateStatusIcon={setOpen}
            />
            <TableList/>
        </Container>
    )
}