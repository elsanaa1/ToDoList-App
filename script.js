let input_el=document.getElementById("input_el");
let btn_add=document.getElementById("add_btn");
let ul_el=document.querySelector("ul");

let length_input=input.value.length;

// add event listeners 
btn_add.addEventListener("click",addTaskClick);
input_el.addEventListener("keypress", addTaskKeypress);




function addTaskClick(){
    	if (length_input > 0) // if the text input is empty,so don't create list element 
		addNewTask();
}



function addTaskKeypress(event) {
	if (length_input > 0 && event.keyCode ===13) { 
        //if you click "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		addNewTask();
	} 
}



function addNewTask(){
    // creation of new element "li"
    let li_el = document.createElement("li"); 
	li_el.appendChild(document.createTextNode(input.value)); //li child  is text value 
	ul_el.appendChild(li_el); //adds li to ul
	input.value = ""; //Reset text input field to empty 



    // add delete button to il element 
    var btn_del = document.createElement("button");
	btn_del.appendChild(document.createTextNode("X"));
	li_el.appendChild(btn_del);
    // add listener to delete btn
	btn_del.addEventListener("click", deleteTask);
    //add class delete_btn (DISPLAY: NONE)
    function deleteTask(){
        li.classList.add("delete_btn")
    }

}


