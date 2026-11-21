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