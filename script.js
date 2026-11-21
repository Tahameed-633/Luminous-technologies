const company_name="Luminous Technologies";
let total_item=4;
const equipment=
[{name:"Excavator",img:"excavator.jpg",rental_price:15000},
    {name:"25 Ton Crane",img:"25 ton crane.jpg",rental_price:20000},
    {name:"100 Ton Crane",img:"100 ton crane.jpg",rental_price:25000},
    {name:"Manlift",img:"manlift.jpg",rental_price:12000}
];
console.log(equipment[1].rental_price);
const section=document.getElementById("equipment");
equipment.forEach(function(item){
    section.innerHTML +=
    `<article>
        <h3>${item.name}</h3>
        <img src="${item.img}" alt="${item.name}">
        <p>Rental Price:৳${item.rental_price.toLocaleString("en-IN")}/day</p>
        <a href="#contacts">Rent Now</a>
    </article>`
}

);
document.getElementById("year").textContent=new Date().getFullYear();

const selected_equipment=document.getElementById("equipment-select");
const rent_duration=document.getElementById("duration");
const total_price=document.getElementById("total-price");
function CalculateBill()
{
    const selected_item=selected_equipment.value;
    const days=Number(rent_duration.value);
    const item=equipment.find(function(e){
       return e.value===selected_item.value;
    });
    if(!item)
    {
        total_price.textContent=" ";
        return;
    }
    if(days<1)
    {
        total_price.textContent="Please enter the number of days";
        return;
    }
    const bill=item.rental_price*days;
    total_price.textContent=`Estimated total: ৳${bill.toLocaleString("en-IN")}`+
    `(${days}days X ৳${item.rental_price.toLocaleString("en-IN")})`; 
}
selected_equipment.addEventListener("change",CalculateBill);
rent_duration.addEventListener("input",CalculateBill);


const quoteForm = document.getElementById("quote_form");
const WHATSAPP_NUMBER = "8801331529976";   
quoteForm.addEventListener("submit", function (event) {
event.preventDefault();   
const customerName = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const equipmentName = selected_equipment.value;
  const days = Number(rent_duration.value);
  const details = document.getElementById("message").value.trim();

  
  if (!/^01[3-9]\d{8}$/.test(phone)) {
    alert("Please enter a valid 11-digit phone number, e.g. 017XXXXXXXX");
    return;
  }

  
  const item = equipment.find(function (e) {
    return e.name === equipmentName;
  });

  let totalLine = "";
  if (item) {
    const bill = item.rental_price * days;
    totalLine = `Estimated total: ৳${bill.toLocaleString("en-IN")}\n`;
  }

  
  const text =
    `Hello Luminous Technologies,\n` +
    `I would like to request a quote.\n\n` +
    `Name: ${customerName}\n` +
    `Phone: ${phone}\n` +
    `Equipment: ${equipmentName}\n` +
    `Duration: ${days} day(s)\n` +
    totalLine +
    `Details: ${details || "N/A"}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});