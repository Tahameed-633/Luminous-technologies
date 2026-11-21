const company_name="Luminous Technologies";
let total_item=4;
const equipment=
[{name:"Excavator",img:"excavator.jpg",rental_price:150000},
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
        <img src="${item.img}" alt="${item.name}"></img>
        <p>Rental Price:৳${item.rental_price.toLocaleString("en-IN")}/day</p>
        <a href="#contacts">Rent Now</a>
    </article>`
}

);
document.getElementById("year").textcontent=new Date().getFullYear();