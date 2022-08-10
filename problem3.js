// problem 3: oilPrice

function oilPrice (dijel, petrol, octaine){
          const oneLiterDijelPrice = 114;
          const oneLiterPetrolPrice = 130;
          const oneLiterOctainePrice = 135;
          
          const dijelPrice = dijel * oneLiterDijelPrice;
          const petrolPrice = petrol * oneLiterPetrolPrice;
          const octainePrice = octaine * oneLiterOctainePrice;

          const totalOilPrice = dijelPrice + petrolPrice + octainePrice ;

          return totalOilPrice;
}
const totalPrice1 = oilPrice(1,1,1)
console.log(totalPrice1, "tk");
const totalPrice2 = oilPrice(30,20,10)
console.log(totalPrice2, "tk");
const totalPrice3 = oilPrice(1,0,2)
console.log(totalPrice3, "tk");
const totalPrice4 = oilPrice(0,2,3)
console.log(totalPrice4, "tk");