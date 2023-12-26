//import React from "react";
import { link } from "fs";
import Link from "next/link";

type ButtonProps = {
    linkRef: string
    textData: string
}

export default function Button(props: ButtonProps) { //Header(props: string)
 
  //tried to make customizable header, could not figure out dropdown menu yet
  //let names = props.menu.split(',');

  const modStr = props.textData[0].toUpperCase() + props.textData.slice(1);

        return  (
            <>
            <Link className="block w-40 text-center cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200" href={props.linkRef}>{modStr}</Link>
          </>
    );
  }