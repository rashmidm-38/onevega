"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

const LeftPageData = () => {
  const [leftData, setLeftData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://demo6396395.mockable.io/bcf-boards");
    const data = await response.json();
    console.log(data, "data");
    setLeftData(data.boards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Accordion
      type="single"
      collapsible
      className="px-4 w-1/4 text-white bg-[#480750]"
    >
      {leftData.map((item: any, index) => (
        <AccordionItem value={item.id} key={index}>
          <AccordionTrigger className="text-sm">{item.name}</AccordionTrigger>
          {item.bcfs.map((bcf: any) => (
            <AccordionContent key={bcf.id}>
              <Accordion type="single" collapsible>
                <AccordionItem value={item.id} key={index}>
                  <AccordionTrigger className="text-xs pl-9">
                    {bcf.name}
                  </AccordionTrigger>
                  {bcf.bcfBoards.map((board: any) => (
                    <AccordionContent className="text-xs pl-20" key={board.id}>
                      {board.name}
                    </AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default LeftPageData;
