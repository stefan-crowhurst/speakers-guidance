import { Card, Flex, Layout, Typography } from "antd";
import Link from "antd/es/typography/Link";
import React, { ReactNode } from "react";
import { ConversationArea } from "./ConversationArea";

type ContainerProps = {
  children: ReactNode[];
};

const LayoutTheme: React.CSSProperties = {
  background: "black",
  width: "100%",
  height: "100vh",
};

export const Container = (props: ContainerProps) => {
  return (
    <Layout style={LayoutTheme}>
      <Layout.Header style={{ backgroundColor: "#242526", height: "7%" }}>
        <Flex
          justify="flex-start"
          align="center"
          style={{ alignContent: "center", height: "100%" }}
        >
          <Typography.Title level={3} style={{ margin: 0, color: "lightgray" }}>
            Speaker's Guidance
          </Typography.Title>
        </Flex>
      </Layout.Header>
      <Layout.Content
        style={{
          padding: "1em",
        }}
      >
        <Card
          variant="borderless"
          style={{
            backgroundColor: "rgb(105 105 105 / 25%)",
            height: "100%",
          }}
          styles={{
            body: {
              height: "100%",
              padding: 0,
            },
          }}
        >
          <ConversationArea>{props.children}</ConversationArea>
        </Card>
      </Layout.Content>
      <Layout.Footer
        style={{
          backgroundColor: "black",
          paddingTop: "0",
          paddingBottom: "0.5rem",
          height: "4%",
        }}
      >
        <Typography
          style={{
            color: "darkgray",
          }}
        >
          Open source project available under the MIT license, see source{" "}
          <Link href="https://github.com/stefan-crowhurst/speakers-guidance">
            here
          </Link>
        </Typography>
      </Layout.Footer>
    </Layout>
  );
};
