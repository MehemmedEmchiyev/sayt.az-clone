const closeBar = document.getElementById("closeBar")
const openBar = document.getElementById("openBar")
const bar = document.getElementById("bar")
const otherPage = document.getElementById("otherPage")
const seo = document.getElementById("seo")
const ecommerce = document.getElementById("ecommerce")
webSiteOther()
getSeo()
getEcommerce()
openBar.onclick = function(){bar.style.display = "block"}
closeBar.onclick = function(){bar.style.display = "none"}
function getEcommerce(){
    let kod = ''
    product[2].map(item => {
        kod += 
        `
        <div class="w-full flex items-center justify-between">
            <span class="font-medium">${item.name}</span>
            <div onclick="changePlace(this)" class="w-15 h-8 duration-500 rounded-2xl bg-[#E5E7EB] p-1" >
                <div class="h-full w-6 rounded-full duration-500 bg-white"></div>
            </div>
        </div>
        `
    })
    ecommerce.innerHTML = kod
}
function getSeo(){
    let kod = ''   
    product[1].map(item => {
        kod += 
        `
            <div class="flex items-center gap-3"><input type="checkbox"/> <span class="mt-px text-gray-700 cursor-pointer select-none">${item.name}</span></div>
        `
    })
    seo.innerHTML = kod
}
function webSiteOther(){
    let kod = ''   
    product[0].map(item => {
        kod += 
        `
            <div class="w-full flex items-center justify-between">
                <span class="font-medium">${item.name}</span>
                <div onclick="changePlace(this)" class="w-15 h-8 duration-500 rounded-2xl bg-[#E5E7EB] p-1" >
                    <div class="h-full w-6 rounded-full duration-500 bg-white"></div>
                </div>
            </div>
        `
    })
    otherPage.innerHTML = kod
}
function changePlace(th){
    const circle = th.querySelector("div")
    circle.classList.toggle("translate-x-7")
    th.classList.toggle("bg-root-color") = "#924DE2"

}