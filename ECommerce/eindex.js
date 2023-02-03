let error_paragraph = document.getElementById("error")
let available_shoes = 5
function purchase(){
    available_shoes-=1
    if (available_shoes<=0){
        error_paragraph.textContent = "Error Happened"
    }
}