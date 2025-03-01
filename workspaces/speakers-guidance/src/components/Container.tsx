import { Card, Flex, Layout, Typography } from "antd";
import React, { ReactNode } from "react";

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
            overflowY: "auto",
            scrollbarWidth: "thin",
            scrollBehavior: "smooth",
            scrollbarColor: "rgb(105 105 105) rgb(0 0 0 / 0%)",
            scrollbarGutter: "stable",
          }}
        >
          {props.children}
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
          Copyright Stefan T. Crowhurst, 2025
        </Typography>
      </Layout.Footer>
    </Layout>
  );
};
