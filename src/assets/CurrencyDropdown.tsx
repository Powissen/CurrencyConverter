import { useState } from "react";

export default function CurrencyDropdown() {
    const [curentCurrency,setCurentCurrency] = useState<string>("")
    let currency = ["EUR", "CZK", "USD"];
    return(
        {curentCurrency}
    );
}