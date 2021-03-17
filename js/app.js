var app = angular.module("myModule", [])
				.controller("myController", ['$scope', function($scope) {
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Samsung Galaxy S7 Edge", p_image: "images/1.jpg", p_price: 28990,
				quantity:10},
					{p_id: "2", p_name: "iPhone 8", p_image: "images/2.png", p_price: 60138,
					quantity:9},
					{p_id: "3", p_name: "Sony Xperia Z3+", p_image: "images/3.png", p_price: 1519000,
					quantity:4},
					{p_id: "4", p_name: "ALIENWARE 17", p_image: "images/4.png", p_price: 75187,
					quantity:6},
					{p_id: "5", p_name: "Luvaglio Laptop", p_image: "images/5.png", p_price: 50115000,
					quantity:7},
					{p_id: "6", p_name: "Motorola Moto G4 16GB", p_image: "images/6.png", p_price: 9013,
					quantity:3}
				];
				$scope.filterProduct = $scope.products;
				
				$scope.add_cart = function(product){
					if(product && !$scope.carts.filter(e =>e.p_id === product.p_id).length){
						$scope.carts.push({p_id: product.p_id, quantity:product.quantity,
							p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
				$scope.searchProduct = function(evt) {
					const re = RegExp(`.*${evt.toLowerCase().split('').join('.*')}.*`)
					$scope.products = $scope.filterProduct.filter(v => v.p_name.toLowerCase().match(re));
					
				}
				$scope.total = 0;
				$scope.checkQuantity = function(value, quantity) {
					if(value <=0 || (value > quantity.quantity)) {
						alert("Exceed or minimum level quantity not avaliable in this product");
					}
				}
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	}]);