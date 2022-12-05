import { useState } from "react";

export default function CurrencyDropdown() {
    const [curentCurrency,setCurentCurrency] = useState<string>("")
    let currency = ["EUR", "CZK", "USD"];
    return(
        <select className="currSelect" id = "select">
            <option>EUR</option>
            <option>CZK</option>
            <option>USD</option>
        </select>
    );
}
