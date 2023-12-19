import axios from "axios";

const url = "https://web-technologies-delta.vercel.app";

export async function sendPriceViaAxios(product) {
  try {
    console.log("Axios API reached.", product);

    const response = await axios.post(url, product);

    console.log("Axios response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Axios error:", error.message);

    // Optionally, you can throw the error to propagate it to the calling code
    throw error;
  }
}
