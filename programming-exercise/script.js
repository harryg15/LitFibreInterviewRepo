const bakeryProducts = [
  {
    name: "brownie",
    unitPrice: 3.5,
    calories: 300,
  },
  {
    name: "carrot cake",
    unitPrice: 3.0,
    calories: 100,
  },
  {
    name: "sponge",
    unitPrice: 2.5,
    calories: 120,
  },
  {
    name: "blueberry muffin",
    unitPrice: 2.5,
    calories: 170,
  },
  {
    name: "toast",
    unitPrice: 1.0,
    calories: 50,
  },
  {
    name: "savoury muffin",
    unitPrice: 1.5,
    calories: 70,
  },
  {
    name: "sandwich",
    unitPrice: 1.9,
    calories: 60,
  },
];

const cafeProducts = [
  {
    name: "tea",
    unitPrice: 1.0,
    calories: 20,
  },
  {
    name: "coffee",
    unitPrice: 1.5,
    calories: 20,
  },
  {
    name: "iced coffee",
    unitPrice: 2.3,
    calories: 50,
  },
  {
    name: "hot chocolate",
    unitPrice: 2.0,
    calories: 100,
  },
];

const promotions = [
  {
    name: "breakfast to go",
    applicableFromBakery: ["toast", "savoury muffin"],
    applicableFromCafe: ["tea", "coffee"],
    promotionPrice: 1.8,
  },
  {
    name: "elevenses",
    applicableFromBakery: [
      "brownie",
      "carrot cake",
      "sponge",
      "blueberry muffin",
    ],
    applicableFromCafe: ["tea", "coffee", "iced coffee", "hot chocolate"],
    promotionPrice: 3.5,
  },
  {
    name: "winter special",
    applicableFromBakery: ["savoury muffin"],
    applicableFromCafe: ["hot chocolate"],
    promotionPrice: 2.5,
  },
];

const calculateBasket = (products) => {

  // setting up our inital values
  let orderCals = 0;
  let orderPrice = 0;

  /******** bakeryProducts Total********/
  
    const bakeryArr = bakeryProducts.map(product => product.name)

    // if our (products) name == the (bakeryArr) name, it will add that 
    // corresponding calories & unit price
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < bakeryArr.length; j++) {
        if (products[i] == bakeryArr[j]) {
          orderCals += bakeryProducts[j].calories;
          orderPrice += bakeryProducts[j].unitPrice;
        }
      }
    }

    /******** cafeProducts Total********/
    
    const cafeArr = cafeProducts.map(product => product.name)


    // same as above, going through cafeProducts
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < cafeArr.length; j++) {
        if (products[i] == cafeArr[j]) {
          orderCals += cafeProducts[j].calories;
          orderPrice += cafeProducts[j].unitPrice;
        }
      }
    }
    console.log(orderPrice)
    // CURRENT TOTALS
    // e.g. ["savoury muffin", "coffee", "hot chocolate"] 
    // orderCals = 190
    // orderPrice = 5
  }
