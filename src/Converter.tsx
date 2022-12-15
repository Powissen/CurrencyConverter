export default function Converter({ onChange, onClick, result }) {

    return(
        <div>
            <input type="number" onChange={(e) => { onChange(e) }}/>
            <a>=</a>
            <a>{result}</a>
            <div></div>
            <br/>
            <div id="center">
                <a> <img src="src/exchange.png" height="40" width="40" onClick={onClick}/> </a>
            </div>
        </div>
    );
}

