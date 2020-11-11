import React from "react";
import { Form } from "antd";
const FormItem = (props) => {
  return (
    <>
      <Form.Item
        label={props.label}
        name={props.name}
        rules={[
          {
            required: true,
            message: "Required",
          },
        ]}
      >
        {props.children}
      </Form.Item>
    </>
  );
};

export default FormItem;
