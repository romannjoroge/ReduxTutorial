import { AccordionButton, AccordionItem, AccordionPanel, Box, AccordionIcon } from "@chakra-ui/react";

export default function MyAccordionContent({panel, title}) {
    return (
        <AccordionItem width="50%" margin="auto">
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' padding={10}>
                        {title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{panel}</AccordionPanel>
        </AccordionItem>
    );
}