import React from "react";
import { Table } from 'antd';

export default function TableDescription(){
    const columns = [
        {
            title:"No",
            dataIndex:"id",
            key:"id",
        },
        {
            title:"Tax Invoice/Receipt No",
            dataIndex:"taxNo",
            key:"taxNo",
        },
        {
            title:"Description",
            dataIndex:"description",
            key:"description",
        },
        {
            title:"Quantity",
            dataIndex:"quantity",
            key:"quantity",
        },
        {
            title:"Price/Unit",
            dataIndex:"price",
            key:"price",
        },
        {
            title:"Total",
            dataIndex:"total",
            key:"total",
        }
    ]
    const dataSource = [
        {
            id:"1",
            taxNo:"0A00000",
            description:"Pencil",
            quantity:"2",
            price:"50",
            total:"100.00",
        },
        {
            id:"2",
            taxNo:"0A00001",
            description:"Pencil",
            quantity:"2",
            price:"50",
            total:"100.00",
        }
    ]
    return(
        <div>
            <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowKey="id"/>
        </div>
    )
}