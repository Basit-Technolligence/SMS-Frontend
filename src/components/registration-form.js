import React from "react";
import OutlinedCard from "./outlined-card";
import { Form, Button } from "antd";
import Grid from "@material-ui/core/Grid";

const RegistrationForm = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    props.action(values);
  };

  return (
    <Grid container justify="center">
      <Grid item md={7} xs={10}>
        <OutlinedCard padding="40px">
          <Form
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            initialValues={props.initialValues}
            onFinish={onFinish}
          >
            {props.children}

            <Form.Item label=" " colon={false}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                className="login-form-button"
              >
                {props.buttonText}
              </Button>
            </Form.Item>
          </Form>
        </OutlinedCard>
      </Grid>
    </Grid>
  );
};
export default RegistrationForm;
