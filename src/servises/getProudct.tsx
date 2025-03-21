import { ProductType } from "./getProdcts";

export default async function getProudct(id:string) {
        try {
            const response = await fetch(`https://67d5c4f5286fdac89bc05a75.mockapi.io/products/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const data = await response.json();      
            return data as ProductType ;
        }
         catch (error) {
            console.error('Error:', error);
        }
}