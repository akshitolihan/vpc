import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-jsx.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  var codeSample = `${props.code}`;

  return (
    <main>
      <pre className="line-numbers">
        <code className="language-jsx">{codeSample}</code>
      </pre>
    </main>
  );
}
