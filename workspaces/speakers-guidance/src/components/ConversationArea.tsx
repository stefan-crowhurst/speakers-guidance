import { Divider, Flex } from "antd";
import { ReactNode } from "react";
import { InputField } from "./InputField";

type ConversationAreaProps = {
  children: ReactNode;
};

export const ConversationArea = (props: ConversationAreaProps) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          height: "85%",
          width: "100%",
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollBehavior: "smooth",
          scrollbarColor: "rgb(150 150 150) rgb(0 0 0 / 0%)",
          scrollbarGutter: "stable",
          padding: "2em",
        }}
      >
        {props.children}
      </div>
      <Flex
        style={{
          width: "100%",
          paddingLeft: "1em",
          paddingRight: "1em",
          justifySelf: "center",
        }}
      >
        <Divider
          plain
          style={{
            margin: "0.5em",
            marginLeft: 0,
            marginRight: 0,
            borderColor: "darkgray",
          }}
        />
      </Flex>
      <InputField />
    </div>
  );
};
