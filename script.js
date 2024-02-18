const kbd=document.querySelectorAll(".kbd");
let totalSeatCount=40;
let totalPurchaseSeatCount=0;
let totalPrice=0;
let totalPricea=0;
for (const btn of kbd) {
    
    btn.addEventListener("click",function (e) {
        const btnInnerText=btn.innerText;
       
        if (totalPurchaseSeatCount >=4) {
            alert("Dear Passenger You are not able to Buy 4 ticket at a time.");
           
            return; 
        }
        
       
        // count total price
        totalPrice=totalPrice+550;
        document.getElementById("total-price").innerText=totalPrice;
        // count grandtotal
        totalPricea=totalPricea+550;
        document.getElementById("grand-total").innerText=totalPrice;
     
        
        // count purchase seat
        totalPurchaseSeatCount=totalPurchaseSeatCount+1
        const purchaseSeatElement=document.getElementById("seat-count");
        purchaseSeatElement.innerText=totalPurchaseSeatCount;
        if (totalPurchaseSeatCount===4) {
            document.getElementById("coupon-code").removeAttribute("disabled");
        }
       
        // total seat decrease
        totalSeatCount=totalSeatCount-1
        const availableSeat=document.getElementById("available-seats");
        availableSeat.innerText=totalSeatCount;
        // create div section
        const p1=document.createElement("p");
        const p2=document.createElement("p");
        const p3=document.createElement("p");
        const div=document.createElement("div");
        // set inner text
        p1.innerText=btnInnerText;
        p2.innerText="Economy Class";
        p3.innerText=550;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        const addedSeat=document.getElementById("added-seat");
        addedSeat.appendChild(div);
        div.classList.add("flex");
        div.classList.add("flex-row");
        div.classList.add("justify-between");
        div.classList.add("p-5");
        btn.classList.add("bg-[#1dd100]");
        btn.classList.add("text-[#fff]");
       
       
    })
}










// some common shared function
// get value an html element
function getValueForElement(id) {
    const getElement = document.getElementById(id).innerText;
    const convertedValue=parseInt(getElement);
    return convertedValue;
}
// set inner text
function setInnerText(id,value) {
    const getElement=document.getElementById(id).innerText=value;
}
// add class list
function addClassList(id,value) {
    const getElement=document.getElementById(id);
    getElement.classList.add(value);
}
// remove class list
function removeClassList(id,value) {
    const getElement=document.getElementById(id);
    getElement.classList.remove(value);
}
