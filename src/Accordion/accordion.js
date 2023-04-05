import { Accordion } from "@chakra-ui/react";
import MyAccordionContent from "./accordionContent";

export default function MyAccordion({accordions}) {
    return (
        <Accordion allowMultiple>
            {accordions.map((accordion) => {
                return accordion
            })}
        </Accordion>
    );
}