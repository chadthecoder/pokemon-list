import Head from 'next/head';
import Link from 'next/link';
import React from "react";
//import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

//import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import '../css/Header.css'
//import { useLinkClickHandler } from 'react-router-dom';

//figure out loop render in tsx/react?

/*function renderStuff(names)
{
  for(let i = 0; i < names.length; i++)
        {
          let test = names[i].split('.');
          if(test.length == 2 )
          {
            return (<Nav.Item><Nav.Link href={test[1]}>{test[2]}</Nav.Link></Nav.Item>);
          }
          else
          {
      
          }
        }
}*/

export default function Header() { //Header(props: string)
 
  //tried to make customizable header, could not figure out dropdown menu yet
  //let names = props.menu.split(',');

        return  (
            <nav>
            <Link className="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200" href='/'>Home</Link>
          </nav>
    );
  }