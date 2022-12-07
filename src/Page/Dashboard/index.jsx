import React from 'react'
import CardDisplayConfirmation from '../../Components/CardDisplayConfirmation'
import { salad_64px } from '../../Assets/Image'
import { Container } from 'reactstrap'
import BtnStyleCustom from '../../Components/BtnStyleCustom'
import { PoweroffOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';


export default function Dashboard() {
  const demoData =[
    {
      title : "Form Name1",
      subTitle : "Category1",
      icon : salad_64px,
      price : "10.00",
      date : "01/01/2000"
    },
    {
      title : "Form Name2",
      subTitle : "Category2",
      icon : salad_64px,
      price : "10.00",
      date : "01/01/2000"
    },
    {
      title : "Form Name3",
      subTitle : "Category3",
      icon : salad_64px,
      price : "10.00",
      date : "01/01/2000"
    },
  ]
  const { TabPane } = Tabs;

  return (
    <div>
      {/* <Container> */}
        {/* <BtnStyleCustom
        tooltipTextStyle={{color:"#339B1A"}}
        iconBtn={<PoweroffOutlined style={{color:"#339B1A"}}/>}
        tooltipColor={"#DAFFD1"}
        textHover={"Approve"}
        type={"Approve"}
        classBtn="btn-approve"  
        styleBtn={{marginTop:"50px"}}
        /> */}
      {/* <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        Tab 1<br/>
        Tab 1<br/>
        Tab 1<br/>
        Tab 1<br/>
        Tab 1<br/>
        Tab 1<br/>
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Tab 2<br/>
        Tab 2<br/>
        Tab 2<br/>   
        Tab 2<br/>
        Tab 2<br/>
        Tab 2<br/>   
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Tab 3<br/>
        Tab 3<br/>
        Tab 3<br/> 
        Tab 3<br/>
        Tab 3<br/>
        Tab 3<br/>      
      </TabPane>
      <TabPane tab="Tab 4" key="4">
        Tab 3<br/>
        Tab 3<br/>
        Tab 3<br/> 
        Tab 3<br/>
        Tab 3<br/>
        Tab 3<br/>      
      </TabPane>
      </Tabs>
      </Container> */}

    </div>
  )
}
