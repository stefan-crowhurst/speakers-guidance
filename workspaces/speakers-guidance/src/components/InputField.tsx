import { Button, Flex, Form, Input } from "antd";

export const InputField = () => {
  return (
    <Flex align="center" justify="center" style={{ width: "100%" }}>
      <Form>
        <Form.Item label="Input" name="input">
          <Input />
        </Form.Item>
        <Form.Item label="">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};
