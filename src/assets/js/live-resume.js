document.querySelector(".btn-add").addEventListener("click" , function(){
    document.querySelector(".popup_form").classList.add("active");
})
document.querySelector(".close-btn").addEventListener("click" , function(){
    document.querySelector(".popup_form").classList.remove("active");
})

document.querySelector("#chose_pp").addEventListener("change", function() {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
        localStorage.setItem("profil_pic",reader.result)

    })
    reader.readAsDataURL(this.files[0])
})

document.addEventListener("DOMContentLoaded", () => {
    
    const recentImageDataURL = localStorage.getItem("profil_pic")

    if (recentImageDataURL) {
        document.querySelector("#profil_pic").setAttribute("src",recentImageDataURL)
    }
})

function save_exp(){

let year_exp = document.getElementById("year_exp").value
let title_exp = document.getElementById("title_exp").value
let desc_exp = document.getElementById("desc_exp").value

let experience = {
    year : `${year_exp}`,
    title : `${title_exp}`,
    description : `${desc_exp}`
                 } 

    if(localStorage.getItem('experience')==null){
        localStorage.setItem('experience','[]')
    }
    let old_exp = JSON.parse(localStorage.getItem('experience'))
    old_exp.push(experience)

    localStorage.setItem('experience',JSON.stringify(old_exp))

    localStorage.setItem("experience",`${experience}`)
}

document.querySelector('#exp-valide').addEventListener("click" , function(){
    let year_exp = document.getElementById("year_exp").value
let title_exp = document.getElementById("title_exp").value
let desc_exp = document.getElementById("desc_exp").value

let experience = {

    year : `${year_exp}`,
    title : `${title_exp}`,
    description : `${desc_exp}`
                 } 

    if(localStorage.getItem('experience')==null){
        localStorage.setItem('experience','[]')
    }
    let old_exp = (JSON.parse(localStorage.getItem('experience')))
    old_exp.push(experience)

    localStorage.setItem('experience',JSON.stringify(old_exp))

    localStorage.setItem("experience",`${experience}`)
})

console.log(JSON.parse(localStorage.getItem('experience')))

