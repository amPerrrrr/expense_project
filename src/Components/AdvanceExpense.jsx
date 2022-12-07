import { Select,DatePicker,Checkbox,Input } from 'antd';
import { React,useState } from 'react';
import { Container } from 'reactstrap'




export default function AdvanceExpense() {
  const [disabled, setDisabled] = useState(false);
  const toggle = () => {
    setDisabled(!disabled);
  };

  const selectAfter = (
    <Select className='testss' defaultValue="USD">
    <Option value="USD">USD</Option>
    <Option value="BAHT">BAHT</Option>
  </Select>
);

  return (
    <div>
    <Container className='advance-extra-input'>
    <p className='text-extra'> Received Budget Date</p>
     <DatePicker className='input-setting' disabled={disabled}/>
      <div style={{ marginBottom: 5,}} >
        <Checkbox onClick={toggle}>immediate</Checkbox> 
      </div>
    <p className='text-extra'> Required Budget</p>
    <Input className='input-num'  addonAfter={selectAfter} />
  </Container>
  </div>
  )
};
