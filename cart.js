
// Showing Categories...
const loadcategories = () =>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then( (res) => res.json())
    .then((json) => displaycategories(json.categories))
};

const displaycategories = (categories) =>{
    const categoryContainer = document.getElementById("category_container");
    categoryContainer.innerHTML = "";

    for(let cat of categories){

        const catDiv = document.createElement('div');
        catDiv.innerHTML = 
        `
        <li onclick ="loadcat(${cat.id})" class="hover:bg-[#15803D] hover:text-white rounded-[4px]"><a>${cat.category_name}</a></li>
        `;
        categoryContainer.append(catDiv);

    }
}

// Displaying category cart
const loadcat = async (id)=>{
    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    const res = await fetch(url);
    const details = await res.json();
    displaycat(details.plants);
}

const displaycat = (plants) =>{
    
    const cartContainer = document.getElementById("cart_container");
    cartContainer.innerHTML = "";

    plants.forEach((plant) => {
    
    console.log(plant)
    console.log(plant.name)
    const cartDiv = document.createElement('div');
    cartDiv.innerHTML = 
        `
        <div class="card bg-base-100 w-[280px] h-[380px] shadow-sm">
                    <figure >
                        <img  src="${plant.image}"
                            alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="cart_name card-title text-[14px] font-bold">
                            ${plant.name}
                        </h2>
                        <p class="text-[12px]">A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div class="card-actions justify-between">
                            <div class="badge rounded-[400px] bg-[#DCFCE7] text-[#15803D]">${plant.category}</div>
                            <div class="cart_price text-[14px] font-bold">৳${plant.price}</div>
                        </div>
                        <div class="mt-[10px]">
                            <a onclick ="loadcart(${plant.id})" class="buy_now tree_cart_btn btn bg-[#15803D] text-white rounded-[999px] border-0 w-[230px]">Add to Cart</a>
                        </div>
                    </div>
                </div>
        `;
        
    cartContainer.append(cartDiv);
  });
  manageSpinner(false);
  };


// Showing Carts...
const loadAllTrees = () =>{
    manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/plants")
    .then( (res) => res.json())
    .then((json) => displayAllTrees(json.plants))
};

const displayAllTrees = (trees) =>{
    const cartContainer = document.getElementById("cart_container");
    cartContainer.innerHTML = "";

    for(let tree of trees){

        const cartDiv = document.createElement('div');
        cartDiv.innerHTML = 
        `
        <div class="card bg-base-100 w-[280px] h-[380px] shadow-sm">
                    <figure >
                        <img  src="${tree.image}"
                            alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="cart_name card-title text-[14px] font-bold">
                            ${tree.name}
                        </h2>
                        <p class="text-[12px]">A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div class="card-actions justify-between">
                            <div class="badge rounded-[400px] bg-[#DCFCE7] text-[#15803D]">${tree.category}</div>
                            <div class="cart_price text-[14px] font-bold">৳${tree.price}</div>
                        </div>
                        <div class="mt-[10px]">
                            <a onclick ="loadcart(${tree.id})" class="buy_now tree_cart_btn btn bg-[#15803D] text-white rounded-[999px] border-0 w-[230px]">Add to Cart</a>
                        </div>
                    </div>
                </div>
        `;
        cartContainer.append(cartDiv);

    }
    manageSpinner(false);
}


// Adding & removing to the cart
let totalPrice = 0;
const loadcart = async (id)=>{
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    const res = await fetch(url);
    const details = await res.json();
    displaycart(details.plants);
}

const displaycart = (cart) =>{
    
    totalPrice = totalPrice + cart.price;
    viewTotalPrice();
    
    const historyContainer = document.getElementById('history_container');
    const div = document.createElement('div');
    div.innerHTML = 
    `
     <div class="bg-[#F0FDF4] m-[14px] p-[10px] flex justify-between items-center rounded-[8px]">
        <div>
            <h4 class="font-semibold">${cart.name}</h4>
            <p class="text-[#8C8C8C]">৳${cart.price} X 1</p>
        </div>
        <div class="remove_btn"> <i class=" fa-solid fa-xmark text-[#8C8C8C] hover:text-white hover:bg-red-500"></i> </div>
        
    </div>
    `
    historyContainer.appendChild(div);
    
    const removeBtn = div.querySelector(".remove_btn");
    removeBtn.addEventListener("click", function () {
    div.remove(); 
    totalPrice = totalPrice - cart.price;
    viewTotalPrice();
  });
}

function viewTotalPrice() {
  const total = document.getElementById("total_price");
  total.innerText = `৳${totalPrice}`;
}

const manageSpinner = (status) =>{
    if(status == true){
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("cart_container").classList.add("hidden");
    }
    else{
        document.getElementById("cart_container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
}

loadcategories();
loadAllTrees();
loadcart();
loadcat();

    

