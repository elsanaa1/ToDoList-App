

let input_el=document.getElementById("input_el");
let btn_add=document.getElementById("add_btn");
let ul_el=document.querySelector("ul");


// add event listeners 
btn_add.addEventListener("click",addTaskClick);
input_el.addEventListener("keypress", addTaskKeypress);

// function to get the length of input every time 
function length_input(){
	return input_el.value.length;
}


function addTaskClick(){
	alert(length_input())
    	if (length_input()> 0) // if the text input is empty,so don't create list element 
		  { 
			addNewTask();}
}



function addTaskKeypress(event) {
	if (length_input() > 0 && event.keyCode ===13) { 
        //if you click "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		addNewTask();
	} 
}



function addNewTask(){
	
    // creation of new element "li"
    let li_el = document.createElement("li"); 
	li_el.appendChild(document.createTextNode(input_el.value)); //li child  is text value 
	ul_el.appendChild(li_el); //adds li to ul
	input_el.value = ""; //Reset text input field to empty 



    // add delete button to il element 
    let btn_del = document.createElement("button");
	btn_del.appendChild(document.createTextNode("X"));
	li_el.appendChild(btn_del);
    // add listener to delete btn
	btn_del.addEventListener("click", deleteTask);
    //add class delete_btn (DISPLAY: NONE)
    function deleteTask(){
        li_el.classList.add("delete_btn")
    }




	
	// check completed task by changing its color 
	li_el.addEventListener("click",greenCompleted);
	function greenCompleted() {
		li_el.classList.toggle("completed");
	}







}


