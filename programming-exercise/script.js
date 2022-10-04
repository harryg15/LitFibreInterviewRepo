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

    // CURRENT TOTALS
    // e.g. ["savoury muffin", "coffee", "hot chocolate"] 
    // orderCals = 190
    // orderPrice = 5

    /******** Promotion Price Check ********/

    const bakeryPromo = promotions.map(promo => promo.applicableFromBakery)
    const cafePromo = promotions.map(promo => promo.applicableFromCafe)
    const fullList = bakeryProducts.concat(cafeProducts)


    let combo = [];
    let productMatches = []; 
    let newPrice = [];
    const promoTotals = [];

    // looping through every possible pair combination from applicableFromBakery (bakeryPromo) 
    // & applicableFromCafe (cafePromo) arrays
    for (let i = 0; i < bakeryPromo.length; i++) {
        for (let j = 0; j < bakeryPromo[i].length; j++) {
          for (let k = 0; k < cafePromo[i].length; k++) {
            combo.push(bakeryPromo[i][j])
            combo.push(cafePromo[i][k])
            
            
            // With the current discount combo, we'll loop through our 
            // order for matching items
            for (let l = 0; l < products.length; l++) {
              for (let m = 0; m < combo.length; m++) {
                if (products[l] == combo[m]) {
                  productMatches.push(products[l])
                }
              } 
            }

            // if productMatches === 2, it means our order matches 
            // the current combo! Before adding the promotional offer, 
            // we need to take away the original price of the items,
            // searching through the (fullList)
            if (productMatches.length === 2) {

              for (let n = 0; n < productMatches.length; n++) {
                for (let o = 0; o < fullList.length; o++) {
                  if (productMatches[n] == fullList[o].name) {
                      orderPrice = orderPrice -= fullList[o].unitPrice;
                      newPrice.push(orderPrice)
                  } 
                }
              }
              
              // in case more than one promotional offer/combo is eligible
              // (avoiding orderPrice to be deducted a 2nd time)
              orderPrice = newPrice[1]
              
              // SO FAR
              // e.g. ["savoury muffin", "coffee", "hot chocolate"] 
              // productMatches = ["savoury muffin", "coffee"]
              // orderPrice = 5 - 1.5(savoury muffin) - 1.5(coffee) = 2


              promoTotals.push(orderPrice += promotions[i].promotionPrice)
              // orderPrice = 2 + 1.8 = 3.8
              // our end result!
            }

            // Resetting the arrays so it can move onto the next combo 
            // combination
            productMatches = [];
            combo = [];
          }      
        }
    }


    /******** End Result ********/

    // promoTotals now contain all the discounted totals possible!
    // e.g. ["savoury muffin", "coffee", "hot chocolate"]
    // promoTotals = [3.8, 4.5]

    // we can now determine the most cost effective option! 
    cheapestPrice = Math.min(...promoTotals)
    
    // if no promotion was found
    if (cheapestPrice === Infinity) {
      cheapestPrice = orderPrice;
    }

    return {
      totalPrice: cheapestPrice,
      totalCalories: orderCals
    }

  // JavaScript exercise
  // This function mysteriously got wiped from our online ordering system, and there's no history of it in source control...
  // The function takes an array of product names (see the calls below).
  // It needs to calculate the order total both in terms of price and of calories and return them in an object:
  // {
  //     totalPrice: ???,
  //     totalCalories: ???
  // }
  // The bakeryProducts and cafeProducts arrays contain all the details you'll need about the business' products (pretend the data is from a database or REST API).
  //
  // For extra points, check if any promotions (from the promotions array) can be applied, based on the products that are passed in, and reflect any change in total price.
  // Promotions should override the price of a pair of products,
  // where one of the products is found in the "applicableFromBakery" array and the other is found in the "applicableFromCafe" array.
  // Example:
  // products = ["toast", "tea", "blueberry muffin"]
  // totalPrice would normally be 1.0 (toast) + 1.0 (tea) + 2.5 (muffin) = 4.5
  // With the "breakfast to go" promotion, we can override the cost of the tea and toast with 1.8:
  // totalPrice becomes 1.8 (toast + tea promotion) + 2.5 (muffin) = 4.3
  //
  // A basic implementation could search for valid pairs of products and apply promotions in the order that it finds them
  // A more advanced version could calculate the ideal promotions to apply, resulting in the lowest possible total
  //
  // Do as little or as much as you feel like of this exercise, the point isn't to pass/fail your JavaScript skills,
  // but to see how you go about using the language and how you approach solving a given problem
};

// Exercise output (don't change anything of these but feel free to add more tests)
//  console.log(calculateBasket(["brownie", "iced coffee"]));

//  console.log(calculateBasket(["blueberry muffin", "carrot cake"]));

  console.log(calculateBasket(["savoury muffin", "coffee", "hot chocolate"]));

//  console.log(
//    calculateBasket([
//     "brownie",
//      "carrot cake",
//      "sandwich",
//      "coffee",
//      "coffee",
//      "iced coffee",
//    ])
//  );

//  console.log(
//    calculateBasket(["sponge", "tea", "savoury muffin", "coffee", 
//    "sponge"])
//  );

