"use client";

// import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Toolbar = () => {
//   const { user } = useUser();

  return (
    <>
      <Button color="primary" className="text-lg">
        Start Trial
      </Button>
      
    </>
  );
};

export default Toolbar;