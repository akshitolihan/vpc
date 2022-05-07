import React from 'react'
import Prism from 'prismjs';
import { useEffect } from 'react';
import { CopyBlock,dracula } from "react-code-blocks";

const Code = (props) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, []);
  return (
    <>
    <div>
      <h3>Code Snip</h3>
      <CopyBlock
      text="print('Akshit Kumar')\n input('hi')"

      language='python'
      showLineNumbers='true'
      wrapLines
      theme={dracula}
    />
    </div>
    </>
  )
}

export default Code;
