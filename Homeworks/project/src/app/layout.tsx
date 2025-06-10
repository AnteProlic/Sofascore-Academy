"use client"

import { Navbar } from "@/components/Navbar";
import useSWR, { SWRConfig, unstable_serialize } from 'swr'
import { Flex, styled } from "../../styled-system/jsx"

import "./globals.css";
import { SportsList } from "@/components/SportsList";
import { ContextProvider, useTheme } from "@/model/Context";

// @ts-expect-error Default fetcher from useSWR docs
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const {theme, setTheme} = useTheme()

  return <html lang="en" data-theme={theme}>
        <body>
          <SWRConfig value={{ fetcher }}>
              <Flex direction="column">
                <Flex
                  h="80px"
                  position="fixed"
                  bg="linear-gradient(black, rgba(255, 255, 255, 0))"
                  w="100%"/>
                <Navbar />
                <SportsList />
              </Flex>
              <Flex
              direction="column"
              h="50vh"
              w={{base: `100%`, sm: `calc(100% - 56px - 12px)`}}
              float={{ base: "left", sm: "right"}}
              marginTop={{ base: "86px", sm: "64px"}}
              padding={{ base: "0", sm: "md"}}
              zIndex="-1"
              >
                {children}
              </Flex>
            
          </SWRConfig>
        </body>
      </html>
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextProvider>
      <Main>{children}</Main>
    </ContextProvider>
  );
}
