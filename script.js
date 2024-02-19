const kbd=document.querySelectorAll(".kbd");
let totalSeatCount=40;
let totalPurchaseSeatCount=0;
let totalPrice=0;
let totalPricea=0;
for (const btn of kbd) {
   
    btn.addEventListener("click",function (e) {
       e.target.setAttribute("disabled",true);
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
        const number= document.getElementById("passenger-number").value;
        if (totalPurchaseSeatCount>0 && number.length>0) {
            document.getElementById("next-btn").removeAttribute("disabled");
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

// apply button
const btn=document.getElementById("coupon-code");
btn.addEventListener("click",function () {
    // get input field value
    let inputValue=document.getElementById("input").value;
    const convertedInputValuea=inputValue.split(" ").join("").toUpperCase();
    const convertedInputValueb=inputValue;
    if (totalPurchaseSeatCount===4) {
        if (convertedInputValuea==="NEW15") {
            document.getElementById("apply-div").classList.add("hidden");
            const discount=document.getElementById("discount-total");
            const grandtotal=document.getElementById("grand-total");
            const convertedGrandTotal=parseInt(grandtotal.innerText);
            const discountAmmount=totalPrice*0.15;
            discount.innerText=discountAmmount.toFixed(2);
            const discountTotalAmmount=convertedGrandTotal-discountAmmount;
            grandtotal.innerText=discountTotalAmmount;
            inputValue=document.getElementById("input").value="";
        } 
        else if(convertedInputValueb === "Couple 20"){
            document.getElementById("apply-div").classList.add("hidden");
            const discount=document.getElementById("discount-total");
            const grandtotal=document.getElementById("grand-total");
            const convertedGrandTotal=parseInt(grandtotal.innerText);
            const discountAmmount=totalPrice*0.20;
            discount.innerText=discountAmmount.toFixed(2);
            const discountTotalAmmount=convertedGrandTotal-discountAmmount;
            grandtotal.innerText=discountTotalAmmount;
            inputValue=document.getElementById("input").value="";
        }
        
        else{
            alert("invalid coupon code ")
        }
    }
    else{
        alert ("please shop atleast 4 seat")
    }
})








