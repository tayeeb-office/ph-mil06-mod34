
// Call Button Funtionalities...
    const carts = document.querySelectorAll(".buy_now"); 

    for (const cart of carts) {
        
        cart.addEventListener("click", function () {

            let cartName = document.getElementById('cart_name').innerText;
            let cartPrice = parseInt(document.getElementById('cart_price').innerText);

            console.log( cartName );
            console.log( cartPrice );
            
            let totalPrice = 0;
            totalPrice = totalPrice + cartPrice;

            const historyContainer = document.getElementById('history_container');
            const div = document.createElement('div');
            div.innerHTML = `
                
                    <div class="bg-[#F0FDF4] m-[14px] p-[10px] flex justify-between items-center rounded-[8px]">
                        <div>
                            <h4 class="font-semibold">${cartName}</h4>
                            <p class="text-[#8C8C8C]">${cartPrice} X 1</p>
                        </div>
                        <i class="fa-solid fa-xmark text-[#8C8C8C] hover:text-white hover:bg-red-500"></i>
                    </div>

                `

                historyContainer.appendChild(div);

            });

    }

// // Clear Button Funtionalities...
// const call = document.querySelector(".clearAction"); 
        
//         call.addEventListener("click", function () {

//                 document.getElementById('historyContainer').innerHTML= " ";

//         });

    