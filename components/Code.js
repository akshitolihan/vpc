import { useEffect } from "react";
import Prism from "prismjs";
// import "prismjs/themes/prism-tomorrow.css";
import "prism-themes/themes/prism-darcula.css";
import "prismjs/components/prism-jsx.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  // var codeSample = `${props.code}`;

  return (
    <div className="flex justify-center">
      <main className="max-w-2xl lg:w-[800px] sm:w-[700px] w-96">
        <pre className="line-numbers shadow-lg rounded-none">
          <code className="language-jsx">{props.code}</code>
        </pre>
      </main>
    </div>
  );
}
