import { useState } from "react";

export default function Converter({ onChange }) {
      const [result, setResult] = useState("0.000");

    return(
        <div>
            <input type="number" onChange={(e) => { onChange(e) }}/>
            <a>=</a>
            <a>{result}</a>
            <div></div>
            <br/>
            <a> <img src="src/exchange.png" height ="40" width="40" /> </a>
        </div>
    );
}

