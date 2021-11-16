import React from 'react'
import TreeItem from '../TreeItem/TreeItem';

interface Tree {
    title: string;
    items: {
        title: string;
    }[];
};

interface Props {
    tree: Tree[]
}

export default function TreeView(props: Props) {
    return (
        <div>
            { props.tree.map((item: any, index: any) => (<TreeItem key={ index } {...item} />)) }
        </div>
    )
}
