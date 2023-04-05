import { Accordion } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MyAccordionContent from "./accordionContent";

export default function AccordionController() {
    const [chapters, setChapters] = useState([]);
    useEffect(getChapters, []);

    // Get data
    function getChapters() {
        fetch("http://localhost:3000/chapters").then(response => {
            if (!response.ok) {
                console.log("Could Not Get Data");
            } else {
                response.json().then(data => {
                    console.log(data)
                    setChapters(data)
                })
            }
        })
    }

    return (
        <Accordion allowMultiple>
            {chapters.map((chapter, index) => {
                return <MyAccordionContent panel={chapter.content} title={chapter.title} key={index}/>
            })}
        </Accordion>
    );
}