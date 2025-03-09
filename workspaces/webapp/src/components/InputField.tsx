import { Button, ConfigProvider, Flex, Input } from "antd";
import React, { useState } from "react";

export const InputField = () => {
  const [text, setText] = useState<string>("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission");
    setText("");
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "rgb(150 117 36)",
            colorPrimaryHover: "rgb(183 140 37)",
            colorPrimaryBorder: "rgb(252 204 28)",
            colorPrimaryBorderHover: "rgb(255 255 255)",
          },
          Input: {
            hoverBorderColor: "rgb(252 204 28)",
            activeBorderColor: "rgb(252 204 28)",
          },
        },
      }}
    >
      <form onSubmitCapture={(e) => formSubmit(e)} style={{ width: "100%" }}>
        <Flex
          align="center"
          justify="center"
          style={{ width: "100%", padding: "2em" }}
        >
          <Input
            key="text-input"
            placeholder="Speak your mind, Guardian..."
            style={{
              width: "-webkit-fill-available",
              marginRight: "0.5em",
            }}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
          />
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Flex>
      </form>
    </ConfigProvider>
  );
};
