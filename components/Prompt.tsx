"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";
import CircleCheck from "../public/signal-solid.svg";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "../components/ui/card";

const Prompt = () => {
  const [promptData, setPromptData] = useState([]);
  const [searchPrompt, setSearchPrompt] = useState("");

  useEffect(() => {
    fetchPromptData();
  }, []);

  const fetchPromptData = async () => {
    const response = await fetch("https://demo6396395.mockable.io/prompts");
    const data = await response.json();
    setPromptData(data);
  };

  const filterData = () => {
    return promptData.filter((item: any) =>
      item.name.toLowerCase().includes(searchPrompt.toLowerCase())
    );
  };
  return (
    // <Card className="">
    <div className="bg-[#85568b] w-4/5">
      <div className="m-5">
        <input
          type="text"
          placeholder="Search..."
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          className="px-4 w-full rounded-3xl py-[3px]"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filterData().map((item: any) => (
          <Card className="m-3 w-36 flex flex-col justify-between">
            <CardHeader className="p-4">
              <CardTitle className="text-[#480750] text-center text-xl">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="pb-0">
              <Image
                src={CircleCheck}
                alt="Icon"
                className="text-[#480750] w-2/5 m-auto"
              />
            </CardContent>
            <CardFooter className="text-xs pt-4 text-[#480750] justify-center">
              {moment(item.createdAt).format("MMMM d, YYYY")}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Prompt;
