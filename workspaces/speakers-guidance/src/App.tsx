import { Container } from "./components/Container";
import { Message } from "./components/Message";

export const App = () => {
  const sampleDateTime = new Date();
  return (
    <>
      <Container>
        <Message body="guardian" source="guardian" datetime={sampleDateTime} />
        <Message body="speaker" source="speaker" />
        <Message body="guardian" source="guardian" />
        <Message body="speaker" source="speaker" />
        <Message body="guardian" source="guardian" />
        <Message body="speaker" source="speaker" />
        <Message body="guardian" source="guardian" />
        <Message body="speaker" source="speaker" />
        <Message body="guardian" source="guardian" />
        <Message body="speaker" source="speaker" />
        <Message body="guardian" source="guardian" />
        <Message body="speaker" source="speaker" />
        <Message body="guardian" source="guardian" />
        <Message body="speaker" source="speaker" />
        <Message body="guardian" source="guardian" />
        <Message body="speaker" source="speaker" />
        <Message body="guardian" source="guardian" />
        <Message body="speaker" source="speaker" />
        <Message body="guardian" source="guardian" />
        <Message body="speaker" source="speaker" />
        <Message body="guardian" source="guardian" />
        <Message body="speaker" source="speaker" />
        <Message
          body="this is anw incrediblyt long mesasge and doesn't need to be real english it just needs to be long and i want to type it out quite quickly so i'm just gonna type it like this i don't really care how it looks in the grand scheme of things from a grammatical perspective, mores o from a guardian perspective"
          source="speaker"
        />
      </Container>
    </>
  );
};
