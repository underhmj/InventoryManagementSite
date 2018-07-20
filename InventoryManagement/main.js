var consumableItem = new ConsumableItem("Red Potion", true,"yao.png");

var potion = new Potion("Blue Potion", true,"url('bluePotion.jpg')");

console.log(consumableItem);
console.log(consumableItem.Name);
console.log(potion);
console.log(potion.Name);

var presentStatus = potion.Consumed;
console.log(presentStatus);

potion.ConsumeItem();
presentStatus = potion.Consumed;
console.log(presentStatus);

var sword = new Sword("Plastic Spork",5,1,9,false,"url('spork.png')");
var shield = new Shield("Cardboard Cutout of Yao Ming",7,1,3,false,"url('yao.jpg')");
var kale = new ConsumableItem("Organic Kale from the Farmer's Market",true,"url('kale.jpg')");
var inventory = new Inventory(4);