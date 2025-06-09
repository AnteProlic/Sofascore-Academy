"use client"

import { Flex, styled } from "../../../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"
import { useDate } from "@/model/Context"
import { EventProvider } from "@/model/EventProvider"

export const EventsList = ({slug}: {slug: string}) => {
  const {date, setDate} = useDate()

  return (
    <EventProvider slug={slug} date={date == ""?"2025-05-04":date}>
            {events => (
                <Flex direction="column" gap="xs" p="md">
                  {events.map(event => (
                    <EventCard key={event.id} event={event}/>
                  ))}
                </Flex>
            )}
    </EventProvider>
    
  )
}