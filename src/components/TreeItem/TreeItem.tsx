import React, { useState } from 'react'
import { MdArrowDropDown, MdArrowRight } from 'react-icons/md';

interface Props { 
    title: string;
    items: string[];
}

export default function TreeItem(props: Props) {

    const [ open, setOpen ] = useState(false)

    function toggleOpenTree() {
        setOpen(!open)
    }

    return (
        <div>
           <MdArrowDropDown onClick={ toggleOpenTree } /> { props.title }
           <div>
                { open && props.items?.map((item: any, index: any) => (<TreeItem key={ index } {...item} />)) }
           </div>
        </div>
    )
}
