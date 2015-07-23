var allFoods = [];

var FoodItem = function  (name, flavor, image) {
	this.name = name;
	this.slug = name.trim().toLowerCase().replace(/ /g, '-')
	this.flavor = flavor;
	this.image = image;
}

var addFood = function  (name, flavor, image) {
	var newFood = new FoodItem(name, flavor, image);
	allFoods.push(newFood)
}

addFood('Pizza', 'Savory', 'http://gezzinyspizza.com/image/cache/data/pizza%20pie-977x395.png')
addFood('Lasagna', 'Good', 'http://i.huffpost.com/gen/1427405/images/o-SAUSAGE-LASAGNA-facebook.jpg')
addFood('Bananas Foster', 'Sweet', 'https://d3cizcpymoenau.cloudfront.net/images/legacy/19469/SFS_BananasFoster_003_article.jpg')
addFood('Escargot', 'Good', 'http://www.lechefsblog.com/wp-content/uploads/2011/02/IMG_1067.jpg')

var foodFind= function(slug){
	
	return allFoods.filter(function(element){
		return element.slug === slug
	})[0]
}

var foodDelete = function(slug){
	// allFoods = allFoods.filter(function(element){
	// 	return element.slug !== slug
	// })
	for(var i = 0; i < allFoods.length; i++){
		if(allFoods[i].slug === slug){
			allFoods.splice(i,1);
			return 
		}
	}
}

module.exports = {
	allFoods : allFoods,
	addFood  : addFood,
	FoodItem : FoodItem,
	foodFind : foodFind,
	foodDelete : foodDelete
}