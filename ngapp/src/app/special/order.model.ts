export class OrderModel{
    constructor(
        
        public itemName:String, 
        public itemCode:String,
        public quantity:Number,
        public unitPrice:Number,
        public userName:String,
        public userId:String,
        public orderDate:Date
    ){}
}