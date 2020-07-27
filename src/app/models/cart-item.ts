export class CartItem {
    id: number;
    productName: string;
    productId: number;
    productImageUrl: string;
    price: number;
    qty: number;
    

    constructor(productName, productId, price, id = 1, productImageUrl = '', qty = 1){
        this.id = id;
        this.productName = productName;
        this.productId = productId;
        this.price = price;
        this.qty = qty;
        this.productImageUrl = productImageUrl;
    }
}

