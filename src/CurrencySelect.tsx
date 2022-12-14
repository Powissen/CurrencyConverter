export default function CurrencySelect({ onChange, currentCurrency }) {

    return(
        <div>
            <a>{currentCurrency}</a>
            <br/>
            <select value={currentCurrency} onChange={(e) => { onChange(e) }}>
                <option value="€">EUR</option>
                <option value="kč">CZK</option>
                <option value="$">USD</option>
            </select>
	    </div>
    );
}

