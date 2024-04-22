import {Text} from "@chakra-ui/react";
import { NavBarProvider } from "domain/provider/NavBarProvider";
import { RootScaffold } from "presentation/common/RootScaffold";

export function BlogPage() {
    return (
        <RootScaffold selectedNavButton={NavBarProvider.blog}>
            <Text>Blog TODO</Text>
        </RootScaffold>
    )
}