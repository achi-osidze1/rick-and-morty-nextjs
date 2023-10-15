import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import Filter from "./Filter";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180 text-blue-500" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
export default function AccordionCustomIcon({ gender, setGender, status, setStatus, species, setSpecies, id }) {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="w-full h-full mb-12 sm:w-1/4 bg-white rounded-lg p-4 mx-auto">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={CUSTOM_ANIMATION}>
        <AccordionHeader className={`border-b ${open === 1 ? "border-blue-500" : ""}`} onClick={() => handleOpen(1)}>Filter</AccordionHeader>
        <AccordionBody>
            <Filter gender={gender} setGender={setGender} status={status} setStatus={setStatus} species={species} setSpecies={setSpecies}/>
        </AccordionBody>
      </Accordion>
    </div>
  );
}