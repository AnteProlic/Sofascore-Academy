"use client"

import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import useSWR, { SWRConfig, unstable_serialize } from 'swr'
import { Flex, styled } from "../../styled-system/jsx"

import "./globals.css";
import { SportContextProvider } from "@/model/SportContextProvider";
import { TournamentList } from "@/components/components/TournamentList";
import { Favorites } from "@/components/components/Favorites";

// @ts-expect-error Default fetcher from useSWR docs
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const margin = 12
  const width = 56
  return (
    <html lang="en">
      <body>
        <SWRConfig value={{ fetcher }}>
          <SportContextProvider>
          <Sidebar />
          <Flex
          w={`calc(100% - ${256}px - ${56}px - ${2*24}px)`}
          float="right"
          margin="md"
          borderRadius="md"
          direction="column">
            <Navbar />
            <Flex 
            direction="column"
            borderRadius="md"
            marginTop="md"
            w="100%">
              {children}
            </Flex>
          </Flex>
          </SportContextProvider>
        </SWRConfig>
      </body>
    </html>
  );
}
