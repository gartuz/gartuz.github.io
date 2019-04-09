var button = document.getElementById("enter");
var inputText = document.getElementById('userinput');
var ol = document.querySelector("ol");
/* Append Item at Order Item List */

function inputLength(){
    
    return inputText.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputText.value));
    ol.appendChild(li);
    inputText.value="";
}

function addListAfterClick(){

    if(inputLength() > 0){
      createListElement();
    }
}

function addListAfterEnter(event){

   if(inputLength() > 0 && event.keyCode === 13){
    createListElement();
  }

}

button.addEventListener("click", addListAfterClick);

inputText.addEventListener("keypress", addListAfterEnter);
