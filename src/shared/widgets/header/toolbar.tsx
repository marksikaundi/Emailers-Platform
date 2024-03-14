"use client";

// import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Toolbar = () => {

  return (
    <>
      <Button color="primary" className="text-lg">
        Start Trial
      </Button>
      <Link href={"/sign-up"}>
        Login
      </Link>
      
    </>
  );
};

export default Toolbar;