import React, { memo } from 'react';
import TextBox from "./TextBox";

function Quiz ( { question, answer } ) {
    console.log( 'Question rendered' );
    return ( <>
        <TextBox data={ question } display={ true } />
        <hr />
        <TextBox data={ answer } display={ false } />
    </> )
}

export default memo( Quiz );