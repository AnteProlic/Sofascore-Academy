"use client"

import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import useSWR, { SWRConfig, unstable_serialize } from 'swr'
import { Flex, styled } from "../../styled-system/jsx"

import "./globals.css";

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
          <Sidebar />
          <Flex
          w={`calc(100% - ${256}px - ${56}px - ${2*24}px)`}
          float="right"
          margin="md"
          borderRadius="md"
          direction="column">
            <Navbar />
            <Flex 
            direction="column" bg="background.primary"
            borderRadius="md"
            marginTop="md"
            w="100%">
              {children}
            </Flex>
          </Flex>
        </SWRConfig>
      </body>
    </html>
  );
}
