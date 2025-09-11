import { Flex } from "../../styled-system/jsx"
import { redirect } from "next/navigation";
import { EventsList } from "./EventsList";

export default function Home() {
  return (
    <Flex direction="column">
      <EventsList />
    </Flex>
  );
}
