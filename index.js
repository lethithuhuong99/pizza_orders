function Inventory(id, name, pizzas) {
    this.id = id;
    this.name= name;
    this.pizzas = pizzas;

}

Inventory.prototype.displayPizza = function(pizza){
    console.log('PIZZA ' + pizza.id);
    console.log('Name: ' + pizza.name);
    console.log('Description: ' + pizza.description);
    console.log('Medium Size Price: ' + pizza.mediumSizePrice) + 'đ';
    console.log('Big Size Price: ' + pizza.bigSizePrice + 'đ') ;
    console.log('In Stock: ' + pizza.quantityInStock + ' items');
}

Inventory.prototype.addPizza = function(newPizza){
    this.pizzas.push(newPizza);
}

Inventory.prototype.findPizza = function(pizzaId){
    var result = null; 
      result = this.pizzas.find(function(pizza){
        return pizza.id === pizzaId;
      })
    return result;
}

Inventory.prototype.removePizza = function(pizzaId){
    var result = this.findPizza(pizzaId); 
        
    if (result != null){
      var index = this.pizzas.indexOf(result);
      this.pizzas.splice(index,1);
      console.log('[DELETE] Pizza ' + result.id + ' deleted!');
      this.displayPizza(result);
    }
    else {
      console.log('Pizza is not exist!');
    }

}

Inventory.prototype.updatePizza = function(pizzaId,updatedPizza){
    var result = this.findPizza(pizzaId); 
   
    if (result != null){
      var index = this.pizzas.indexOf(result);
      Object.assign(this.pizzas[index], updatedPizza);
      console.log('[UPDATE] Piza ' + pizzaId + " updated!" );
      this.displayPizza(this.pizzas[index])
    }
    else {
      console.log ('Pizza is not exist!');
    }
}

function Pizza(id, name, description, mediumSizePrice, bigSizePrice, quantityInStock, isAvailable, isOnSale, discount){
    this.id = id;
    this.name = name;
    this.description = description;
    this.mediumSizePrice = mediumSizePrice;
    this.bigSizePrice = bigSizePrice;
    this.quantityInStock = quantityInStock;
    this.isAvailable = isAvailable;
    this.isOnSale = isOnSale;
    this.discount = discount; 
}
 var pizza01 = new Pizza("pz001", "PIZZA MATCHA BẠCH TUỘC XỐT TERIYAKI", "Đế bánh truyền thống vị Matcha (Trà xanh Nhật) kết hợp bạch tuộc tẩm ướp kèm xốt Teriyaki, ớt chuông xanh, hành tây, hành tím, hành lá, gừng hồng và da cá bào trên bề mặt bánh tạo hương vị hài hòa độc đáo", 319000, 419000, true, true, 20);


var pizzaExample02 = {
    id: "pz002",
    name: "PIZZA MATCHA BẠCH TUỘC XỐT TERIYAKI",
    description: "Đế bánh truyền thống vị Matcha (Trà xanh Nhật) kết hợp bạch tuộc tẩm ướp kèm xốt Teriyaki, ớt chuông xanh, hành tây, hành tím, hành lá, gừng hồng và da cá bào trên bề mặt bánh tạo hương vị hài hòa độc đáo",
    mediumSizePrice: 319000,
    bigSizePrice: 419000,
    quantityInStock: 70,
    isAvailable: true,
    isOnSale: true,
    discount: 20 // percentage
}

var pizzaExample03 = {
    id: "pz003",
    name: "PIZZA MATCHA Gà",
    description: "Đế bánh truyền thống vị Matcha (Trà xanh Nhật) kết hợp bạch tuộc tẩm ướp kèm xốt Teriyaki, ớt chuông xanh, hành tây, hành tím, hành lá, gừng hồng và da cá bào trên bề mặt bánh tạo hương vị hài hòa độc đáo",
    mediumSizePrice: 319000,
    bigSizePrice: 419000,
    quantityInStock: 0,
    isAvailable: false,
}

var inventory01 = new Inventory("01", "01", []);
console.log(inventory01);
inventory01.addPizza(pizzaExample02)
inventory01.updatePizza("pz002", pizzaExample03);
inventory01.removePizza("pz002");
console.log(inventory01);
