const closeBar = document.getElementById("closeBar")
const openBar = document.getElementById("openBar")
const bar = document.getElementById("bar")
const otherPage = document.getElementById("otherPage")
const seo = document.getElementById("seo")
const ecommerce = document.getElementById("ecommerce")
const pageCountInput = document.getElementById("pageCountInput")
const pageCount = document.getElementById("pageCount")
const pageCriter = document.getElementById("pageCriter")
const wsoTag = document.getElementById("wsoTag")
const seoSalary = document.getElementById("seoSalary")
const ecoTag = document.getElementById("ecoTag")
const logoRange = document.getElementById("logoRange")
const logoCost = document.getElementById("logoCost")
const totalSeo = document.getElementById("totalSeo")
const staticPageTotal = document.getElementById("staticPageTotal")
const totalOther = document.getElementById("totalOther")
const ecommerceTotal = document.getElementById("ecommerceTotal")
const totalLogo = document.getElementById("totalLogo")
const totalGlobal = document.getElementById("totalGlobal")
let globalTotal = 0
let wsoArr = []
let ecoArr = []
webSiteOther()
getSeo()
getEcommerce()
logoRange.oninput = function(){
    let value = logoRange.value
    logoCost.innerHTML = `₼ ${value * 100}`
    totalLogo.innerHTML = `₼ ${value * 100}`
    renderTotal()
}
pageCriter.oninput = function(){getPageValue()}
pageCountInput.oninput = function (){getPageValue()}
function getPageValue(){
    let value = pageCountInput.value
    pageCount.innerHTML = `${value} səhifə / ₼ ${value * pageCriter.value * 100  }`   
    staticPageTotal.innerHTML = `₼ ${value * pageCriter.value * 100}`
    renderTotal()
}
openBar.onclick = function(){bar.style.display = "block"}
closeBar.onclick = function(){bar.style.display = "none"}
function getEcommerce(){
    let kod = ''
    product[2].map(item => {
        kod += 
        `
        <div class="w-full flex items-center justify-between">
            <span class="font-medium">${item.name}</span>
            <div onclick="changePlace(this,${item.id},2,ecoArr,ecoTag,ecommerceTotal)" class="w-15 h-8 duration-500 rounded-2xl bg-[#E5E7EB] p-1" >
                <div class="h-full w-6 rounded-full duration-500 bg-white"></div>
            </div>
        </div>
        `
    })
    ecommerce.innerHTML = kod
}
function getSeo(){
    pageCount.innerHTML = `${pageCountInput.value} səhifə / ₼ ${pageCountInput.value * 100}`
    let kod = ''   
    product[1].map(item => {
        kod += `<div class="flex items-center gap-3"><input onclick="getSeoProblem(this,'${item.id}')" type="checkbox"/> <span class="mt-px text-gray-700 cursor-pointer select-none">${item.name}</span></div>`
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
                <div onclick="changePlace(this,${item.id},0,wsoArr,wsoTag,totalOther)" class="w-15 h-8 duration-500 rounded-2xl bg-[#E5E7EB] p-1" >
                    <div class="h-full w-6 rounded-full duration-500 bg-white"></div>
                </div>
            </div>
        `
    })
    otherPage.innerHTML = kod
}
function changePlace(th,id,k,arr,tag,otag){    
    const circle = th.querySelector("div");
    circle.classList.toggle("translate-x-7");
    th.classList.toggle("bg-root-color")
    let newObj = product[k].find(item => item.id == id)
    let index = arr.indexOf(newObj)
    th.classList.contains("bg-root-color") ? arr.push(newObj) : arr.splice(index,1)
    let salary = arr.reduce((acc,item) => acc + item.price ,0)
    tag.innerHTML = `₼ ${salary}`
    otag.innerHTML = `₼ ${salary}`
    renderTotal()
}
let seoArr = []
function getSeoProblem(param,id){
    let newObj = product[1].find(item => item.id == id)
    let index = seoArr.indexOf(newObj)
    param.checked ? seoArr.push(newObj) : seoArr.splice(index,1) 
    let salary = seoArr.reduce((acc,item) => acc + item.price,0)
    seoSalary.innerHTML = `₼ ${salary}`
    totalSeo.innerHTML = `₼ ${salary}`
    renderTotal()
}
function renderTotal(){
    globalTotal = +totalSeo.innerHTML.replace("₼","") +
                  +totalOther.innerHTML.replace("₼","") + 
                  +totalLogo.innerHTML.replace("₼","") + 
                  +ecommerceTotal.innerHTML.replace("₼","") +
                  +staticPageTotal.innerHTML.replace("₼","")
    totalGlobal.innerHTML = `₼ ${globalTotal == 400 ? 450 : globalTotal}`
}
renderTotal()