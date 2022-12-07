import React from 'react'
import CardDisplayConfirmation from '../../Components/CardDisplayConfirmation'
import { salad_64px } from '../../Assets/Image'
import { Container } from 'reactstrap'

export default function Confirmation() {
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
  return (
    <div>
      <div> 
      <h1 className="confirmation-color-font">Confirmation</h1>
      <CardDisplayConfirmation
        data={demoData}
      />
    </div>
    </div>
  )
}
