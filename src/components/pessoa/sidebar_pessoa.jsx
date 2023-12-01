import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  IdentificationIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
 
export function SideBarPessoa() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Card className="h-[91.2vh] w-auto max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-900 rounded-none ">
      <List>
        
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <IdentificationIcon className="h-5 w-5" color="white"/>
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Gerenciar
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <Accordion>
              <ListItem className="text-white p-0" selected={open === 2} >
                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className={`h-3 w-5 transition-transform ${open === 2 ? "rotate-90" : ""}`} />
                  </ListItemPrefix>
                    <Typography color="white" className="mr-auto font-normal">
                      Doador
                    </Typography>
                </AccordionHeader>
              </ListItem>
                <AccordionBody className="py-1">
                  Registrar Doador 
                </AccordionBody>
            </Accordion>


              <ListItem className="text-white">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Usuário
              </ListItem>

          </AccordionBody>
        </Accordion>
        <ListItem className=" text-white">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Atualizações
          <ListItemSuffix>
            <Chip value="999" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className=" text-white">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Pefil
        </ListItem>
        <ListItem className=" text-white">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Configurações
        </ListItem>
        <ListItem className=" text-white">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}