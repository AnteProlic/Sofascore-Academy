"use client"

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import useSWR, { SWRConfig, unstable_serialize } from 'swr'
import { Flex, styled } from "../../styled-system/jsx"

import "./globals.css";
import { TournamentList } from "@/components/components/TournamentList";
import { Favorites } from "@/components/components/Favorites";
import { SportsList } from "@/components/SportsList";

// @ts-expect-error Default fetcher from useSWR docs
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SWRConfig value={{ fetcher }}>
          <Navbar />
          <SportsList />
          <Flex
          direction="column"
          h="50vh"
          w={`calc(100% - 56px - 36px)`}
          float="right"
          marginX="md"
          marginTop="64px"
          padding="md">
            {children}
          </Flex>
        </SWRConfig>
      </body>
    </html>
  );
}
