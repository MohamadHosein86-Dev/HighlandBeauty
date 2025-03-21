export interface ProductType{
    image:string
    price:number
    name:string
    productCode:string
    brand:string
    category:string
    isFavorite:boolean
    discount:number,
    description:string,
    inStock:boolean,
    id:string,
    quantity:number
}
export async function getProdcots() {
    try {
        const response = await fetch('https://67d5c4f5286fdac89bc05a75.mockapi.io/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        
        return data as ProductType[] ;
    }
     catch (error) {
        console.error('Error:', error);
    }
}