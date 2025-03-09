import { Card, Flex, Typography } from "antd";
import { format } from "date-fns";

type MessageProps = {
  source: "guardian" | "speaker";
  body: string;
  datetime?: Date;
};

export const Message = (props: MessageProps) => {
  return (
    <Flex
      vertical
      align={props.source === "guardian" ? "flex-end" : "flex-start"}
      style={{ margin: "0.5rem" }}
    >
      <Typography
        style={{
          marginLeft: "0.25rem",
          marginRight: "0.25rem",
          marginBottom: "0.1rem",
          color: "lightgray",
        }}
      >
        {props.source[0].toUpperCase() + props.source.substring(1)} |{" "}
        {props.datetime ? format(props.datetime, "HH:mm") : "00:00"}
      </Typography>
      <Flex
        justify={props.source === "guardian" ? "flex-end" : "flex-start"}
        align="center"
        style={{ width: "100%" }}
      >
        <Card
          variant="borderless"
          size="small"
          style={{
            backgroundColor: "rgb(85 85 85)",
            height: "100%",
            maxWidth: "75%",
            boxShadow: "3px 3px 3px rgb(30 30 30 / 50%)",
          }}
        >
          <Typography style={{ color: "white" }}>{props.body}</Typography>
        </Card>
      </Flex>
    </Flex>
  );
};
