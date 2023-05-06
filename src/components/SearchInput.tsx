import {Input, InputGroup, InputLeftAddon} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import React, {useRef} from "react";

export const SearchInput: React.FC<{onSearch: (searchText: string) => void}> = ({onSearch}) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
       <form onSubmit={(event) => {
           event.preventDefault();
           if(ref.current) onSearch(ref.current.value);
       }}>
           <InputGroup>
               <InputLeftAddon children={<BsSearch />} />
               <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
           </InputGroup>
       </form>

    );
};