import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import Filter from "../filter/Filter";
 
function Icon() {
  return (
    <svg  
      aria-hidden="true" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 20 18"
      className='w-6 h-5 text-gray-800 dark:text-gray-300'
    >
      <path 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
        d="m2.133 2.6 5.856 6.9L8 14l4 3 .011-7.5 5.856-6.9a1 1 0 0 0-.804-1.6H2.937a1 1 0 0 0-.804 1.6Z"
      />
    </svg>
  );
}

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
export default function dropDown(props) {
  const { gender, setGender, status, setStatus, species, setSpecies, setPage } = props
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="w-full h-full mb-12 lg:w-1/4 bg-white rounded-lg p-4 mx-auto">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={CUSTOM_ANIMATION}>
        <AccordionHeader className={`border-b dark:text-white ${open === 1 ? "border-b-blue-500" : ""}`} onClick={() => handleOpen(1)}>Filter</AccordionHeader>
        <AccordionBody>
          <Filter gender={gender} setGender={setGender} status={status} setStatus={setStatus} species={species} setSpecies={setSpecies} setPage={setPage}/>
        </AccordionBody>
      </Accordion>
    </div>
  );
}