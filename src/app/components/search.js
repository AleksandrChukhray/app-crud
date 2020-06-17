import React from 'react';
import {Input} from "element-react/next";

function SearchElement (props){
    return (<Input placeholder="Search" onChange={props.onChange} size="large" />)
}

export default SearchElement;