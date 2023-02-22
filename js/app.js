// slect my tags
const prodcutsContener = document.querySelector(".productsContener");
let data = [];


// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    // get data jsone
  axios
    .get("http://localhost:3000/posts")
    .then((yess) => {
      data = yess.data;
      Products(data);
    })
    .catch((eror) => {
      console.log(eror);
    });
});

// funtion products dinimic :)
function Products() {
  data.forEach((items) => {
    const CretDiv = document.createElement("div");
    CretDiv.classList.add("productsContener");
    CretDiv.innerHTML = `          <div
        class="products flex flex-col w-full  h-[230px] m-2  bg-white shadow-2xl rounded-xl flex-grow-[4] p-2 md:h-[250px]">
    
        <div>
            <div class="flex-grow-[1]">
                <img src="${items.imgs}" alt="" class="w-[100px] m-auto md:w-[130px]">
            </div>
    
            <div class=" h-[20px]  flex-grow-[5] md:flex-grow-[15]">
    
                <div class="flex h-[20px] items-center justify-between ">
                    <div>
                        <span class="text-[12px] text-gray-200">اپل</span>
                    </div>
                    <div class="flex" x-data="{color: 'red'}">
                        <div @click="color = 'red'"
                            class="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full bg-orange-600 -mr-[1px] flex items-center border-solid border-1 border-white">
                            <svg x-show="color === 'red'" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-4 h-4 text-gray-50">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div @click="color = 'blue'"
                            class="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full bg-teal-500 -mr-[1px] flex items-center">
                            <svg x-show="color === 'blue'" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-4 h-4 text-gray-50">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div @click="color = 'green'"
                            class="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full bg-fuchsia-700 -mr-[1px] flex items-center">
                            <svg x-show="color === 'green'" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-4 h-4 text-gray-50">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
    
                </div>
    
                <div class="mt-4">
                    <div>
                        <p class="text-[14px] md:text-[17px]">${items.titel}</p>
                    </div>
    
                  <div>
                  <div class="flex flex-col-reverse">
                  <p class="text-orange-500 text-[15px] float-right">${items.priec}</p>
              </div>
              <hr class="border-[1px] border-gray-200">

              <div class="text-center  mt-[300px]">
                  <p class="text-orange-500 text-[12px] mt-[300px] text-center font-bold md:text-[14px]">مشاهده و سفارش</p>
              </div>
                  </div>
                </div>
            </div>
    
         
        </div>
    
    </div>`;
    prodcutsContener.appendChild(CretDiv);
  });
}
