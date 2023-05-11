import React from 'react'
function Paragraph({texts,classNames}){
    return (
            <p class={classNames}>{texts}</p> 
         )
}

export default Paragraph;