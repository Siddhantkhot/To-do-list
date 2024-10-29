const inputBox = document.querySelector("#inputbox")
const listContainer = document.querySelector("#list-container")
const btn = document.querySelector("button")
const error =document.querySelector("#error")


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(inputBox.value == ""){
        error.innerHTML = "You must add Something !"
    }
    else{
        error.classList.add('hidden')
        let li = document.createElement('li')
        li.className="relative cursor-pointer"
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement('span')  
        span.innerHTML = "\u00d7"
        span.className = "absolute right-2 cursor-pointer bg-red-500 rounded-full w-4 h-4 text-center top-2 leading-3"
        li.appendChild(span)
        span.addEventListener('click',()=>{
            li.innerHTML = ""

            })
        
    }
    inputBox.value = ""
})
