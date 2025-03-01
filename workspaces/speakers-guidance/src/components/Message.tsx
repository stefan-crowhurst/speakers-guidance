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
          color: "darkgrey",
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
            backgroundColor: "rgb(105 105 105)",
            height: "100%",
            maxWidth: "75%",
          }}
        >
          <Typography>{props.body}</Typography>
        </Card>
      </Flex>
    </Flex>
  );
};
