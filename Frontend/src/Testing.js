import react from "react";
import { useState } from "react";
import { sendPriceViaAxios } from "./services/api";

function Testing(){

    const [product, setProduct] = useState({
        price: 1500,
        maker: "Japan"
    });

    async function sendPrice(){
        console.log("button clicked..");
        await sendPriceViaAxios(product);
    }

    return <div>
        <button onClick={sendPrice}>Send Data</button>
    </div>
}

export default Testing;