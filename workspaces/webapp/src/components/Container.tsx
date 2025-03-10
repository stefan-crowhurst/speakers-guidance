import { Card, Flex, Layout, Typography } from "antd";
import Link from "antd/es/typography/Link";
import React, { useState } from "react";
import { ConversationArea } from "./ConversationArea";
import imageUrl from "../static/tower-north.webp";
import { z } from "zod";
import { Message } from "./Message";

const LayoutTheme: React.CSSProperties = {
  width: "100%",
  height: "100%",
  backdropFilter: "blur(0.5rem) brightness(35%) saturate(130%)",
  background: "none",
};

// TODO: Move this to a shared types package
const MessageDataSchema = z.object({
  id: z.string(),
  body: z.string(),
  dateTime: z.date(),
  source: z
    .string()
    .refine(
      (s) => s === "guardian" || s === "speaker",
      "Invalid source provided"
    ),
});

type MessageData = z.infer<typeof MessageDataSchema>;

export const Container = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url("${imageUrl}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Layout style={LayoutTheme}>
        <Layout.Header
          style={{ backgroundColor: "rgb(38 38 38 / 90%)", height: "7%" }}
        >
          <Flex
            justify="flex-start"
            align="center"
            style={{ alignContent: "center", height: "100%" }}
          >
            <Typography.Title
              level={3}
              style={{ margin: 0, color: "lightgray" }}
            >
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
              backgroundColor: "rgb(105 105 105 / 50%)",
              height: "100%",
            }}
            styles={{
              body: {
                height: "100%",
                padding: 0,
              },
            }}
          >
            <ConversationArea>
              {messages.map((message) => (
                <Message
                  key={message.id}
                  datetime={message.dateTime}
                  source={message.source}
                  body={message.body}
                />
              ))}
            </ConversationArea>
          </Card>
        </Layout.Content>
        <Layout.Footer
          style={{
            backgroundColor: "rgb(0 0 0 / 0%)",
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
    </div>
  );
};
