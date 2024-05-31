let price = 1.87;
document.querySelector("#price-display span").textContent = `$${price}`;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];
let values = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
];

let cidReversed = cid.reverse();
let  desValues = values.reverse();
console.log(desValues);
console.log(cidReversed)
let purchase = document.getElementById("purchase-btn");
let custInput = document.getElementById("cash").value;
let changeDue = document.getElementById("change-due");
const changeSpans = document.querySelectorAll("#change-in-drawer span");

const updateCID= ()=>{
  for(let i=0; i < changeSpans.length; i++){
    changeSpans[i].textContent = `$${cid[i][1]}`
  }
}

const calcChange = (paid,total)=>{
  let changeNeeded = parseFloat(paid-price).toFixed(2);
  let change = [];
  if(paid < total){
alert("Customer does not have enough money to purchase the item");
  }else if(paid === total){
    changeDue.textContent = "No change due - customer paid with exact cash";
  } else {}
  


}
