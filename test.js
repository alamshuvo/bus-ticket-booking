const p1=document.createElement("p");
const p2=document.createElement("p");
const p3=document.createElement("p");
const appendSeat=document.getElementById("added-seat");
const appendSeatdiv=document.getElementById("added-div");
p1.appendChild(appendSeatdiv);
p2.appendChild(appendSeatdiv);
p3.appendChild(appendSeatdiv);


document.getElementById("coupon-code").removeAttribute("disabled");
btn.setAttribute("disabled","disabled");

alert("Dear Passenger You are not able to Buy 4 ticket at a time.");


const totalSeat=document.getElementById("available-seats").innerText;
const converetdSeat=parseInt(totalSeat);
totalSeat.innerText=converetdSeat-1;

// const a=converetdSeat-1;

console.log(totalSeat);