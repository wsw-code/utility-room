import Form, { Field, FormProvider } from 'rc-field-form';
import React from 'react';


import { Input, InputNumber, Button } from 'antd'


const list = new Set();

list.add(1);
list.add(2);
list.add(3);
console.log(list)

list.forEach(el => {
  console.log(el)
})


export interface Props {
  value?: any;
  onChange?: (val: any) => void
}

let num = 0;
const Text = ({ value, onChange }: Props) => {

  console.log(`渲染${++num}`)

  return (
    <Input value={value} onChange={onChange} />
  )
}


export default () => {
  const [form] = Form.useForm();



  return (
    <>
      <Button onClick={() => {
        form.setFieldsValue({
          name: 'wsw',
          age: 30
        })
      }}>更新值</Button>
      <Form form={form} preserve={false}>
        <Field name="name" dependencies={['desc']}>
          <Input placeholder="Username" />
        </Field>

        {/* <Field name="text" >
          <Text />
        </Field>


        <Field name="desc" initialValue={'描述'} >
          <Input placeholder="desc" />
        </Field> */}

        <Field name="age" dependencies={['name', 'desc']} initialValue={1} rules={[{ required: true }]}>
          <InputNumber />
        </Field>
        <Field name="adress" dependencies={['name', 'desc']} initialValue={'广州市'} rules={[{ required: true }]}>
          <Input />
        </Field>
        <Field name="hobby" dependencies={['age']}   >
          <Input />
        </Field>

      </Form>

    </>
  );
};
