import { TournamentList } from "@/components/components/TournamentList";
import { Flex, styled } from "../../../../styled-system/jsx"
import { Favorites } from "@/components/components/Favorites";
import { Navbar } from "@/components/Navbar";

export default async function SportLayout({
    params,
    children,
}: Readonly<{
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
}>) {
    const { slug } = await params
    return (
        <Flex
        w="100%">
            <Flex 
            direction="column"
            position="fixed"
            h={`calc(100% - 24px)`}
            w="256px"
            left={`calc(56px + 12px)`}
            top="68px"
            margin="md"
            borderRadius="md"
            gap="lg">
                <TournamentList sport={slug}/>
                <Favorites title="tournaments">(not deployed)</Favorites>
                <Favorites title="teams">(not deployed)</Favorites>
                <Favorites title="players">(not deployed)</Favorites>
            </Flex>
            <Flex
            marginLeft="256px"
            w="100%"
            direction="column">
                {children}
            </Flex>
        </Flex>
    );
}
