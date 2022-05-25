import React from "react";
import Code from "../../components/Code";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  var code1 = `var x, y, z;  // Declare 3 variables
  x = 5;    // Assign the value 5 to x
  y = 6;    // Assign the value 6 to y
  z = x + y;  // Assign the sum of x and y to z
  
  document.getElementById("demo").innerHTML =
  "The value of z is " + z + ".";`;

  var code2 = `print("Hello world")
print("Hello world")`;

  return (
    <div className="flex justify-center">
      <main className="max-w-2xl lg:w-[800px] sm:w-[800px] w-72">
        <pre className="line-numbers">
          <code className="language-jsx">{code1}</code>
        </pre>
        <pre className="line-numbers">
          <code className="language-jsx">{code2}</code>
        </pre>
      </main>
    </div>
  );
}
