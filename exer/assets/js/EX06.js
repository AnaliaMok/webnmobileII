/**
 * File Name: EX06.js
 * Description: File contains all functions described
 * for both exercises five and six.
 *
 * Submitted: March 9, 2017
 * @author: Analia Mok
 */

// Exercise 5a
function jsStyle() {
    // function to change style
    // Change the color and the size of the font
    // in the paragraph with id='text'
    var element = document.getElementById("text");
    element.style.color = "red";
    element.style.fontSize = "2em";
}

// Exercise 5b
function getFormValues() {
    // function to send first and last names
    // to an 'alert' message.
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var fullName = firstName + " " + lastName;
    alert(fullName);
}

// Exercise 5c
function getOptions() {
	// function to display the number of options in an alert()
	var totalOptions = document.getElementById("mySelect").getElementsByTagName("OPTION").length;
    alert(totalOptions);
}

// Exercise 5d
function mouseToRed(elem){
    // Function that is called when an element is hovered
    // over. Color will be changed to red from black
    elem.style.color = "red";
}

function mouseToBlack(elem){
    // Function that is called when the mouse on the current
    // element hovers out. Color will change from red to black.
    elem.style.color = "black";
}

// Exercise 5e & 6e
function divide(){
    // Function will divide the element with id firstoperand
    // by the element with id secondoperand
    // Inserts the quotient of first and second or "undefined" if 
    // second is 0 into the "result" span

    var first = parseInt(document.getElementById("firstoperand").value);
    var second = parseInt(document.getElementById("secondoperand").value);

    var mathForm = document.getElementById("math_form");
    
    // Removing the old paragraph text
    mathForm.removeChild(document.getElementById("answer"));
    var innerText = "The answer: ";
    
    // Changing the text as appropriate
    if(second === 0){
        // Writing 'Undefined'
        var newPara = document.createElement("p");
        newPara.setAttribute("id", "answer");
        newPara.appendChild(document.createTextNode(innerText + "Undefined"));
        mathForm.appendChild(newPara);
    }else{
        // Writing the quotient
        var newPara = document.createElement("p");
        newPara.setAttribute("id", "answer");
        newPara.appendChild(document.createTextNode(innerText + (first/second)));
        mathForm.appendChild(newPara);
    }

} // End of divide


function multiply(){
    // Function will multiply the element with id firstoperand
    // by the element with id secondoperand

    var first = parseInt(document.getElementById("firstoperand").value);
    var second = parseInt(document.getElementById("secondoperand").value);

    // Reference to the math form
    var mathForm = document.getElementById("math_form");
    
    // Removing old paragraph
    mathForm.removeChild(document.getElementById("answer"));
    
    // Recreating paragraph tag
    var innerText = "The answer: ";
    var newPara = document.createElement("p");
    newPara.setAttribute("id", "answer");
    newPara.appendChild(document.createTextNode(innerText + (first * second)));
    
    // Appending to form
    mathForm.appendChild(newPara);

} // End of multiple


// Exercise 6 Functions

// Exercise 6a

var boundary = "500px";

/**
 * moveRighTen - Method that grabs the "move_text"
 *      paragraph and moves the element to the right by
 *      10px. Each time the "move_text_btn" is pressed,
 *      the text will be moved an additional 10px until
 *      the text's current position is 500px.
 */
function moveRightTen(){
    
    var moveTextSpan = document.getElementById("move_text");
    
    // Moves the paragraph element "move_text" to the
    // right 10px
    var currPos = moveTextSpan.style.left;
    if(currPos === ""){
        //moveTextP.style.position = "relative";
        currPos = "0px";
    }
    
    if(currPos === boundary){
        // At a certain boundary, the text will be placed back to it's initial location
        moveTextSpan.style.left = "0px";
    }else{
        // Otherwise, move right 10px
        moveTextSpan.style.left = parseInt(currPos) + 10 + "px";
    }
    //console.log(moveTextP.style.left);
} // End of moveRightTen

// Exercise 6b

/**
 * howmany - Finds "regForm" from EX05.html and
 *      looks for all inputs that are children of 
 *      the form. These inputs are counted as a total.
 *      Then the total number of inputs that are type
 *      text are then located and counted.
 */
function howmany(){
    
    // Form Object
    var regForm = document.getElementById("regFormTwo");
    regForm.childNodes
    // All Inputs
    var formInputs = regForm.getElementsByTagName("INPUT");
    var totalFormInputs = formInputs.length;
    
    // Only Text Inputs
    var totalTextInputs = 0;
    for(var i = 0; i < totalFormInputs; i++){
        if(formInputs[i].type == "text"){
            totalTextInputs = totalTextInputs + 1;
        }
    }
    
    // One Alert Message for both
    var output = "Total Inputs: " + totalFormInputs + "\n" +
        "Total Text Inputs: " + totalTextInputs + "\n";
    
    // Send out alert
    alert(output);
    
} // End of howmany


/**
 * colorchanger - Function that looks for the div of
 *      exercise 5c and changes it background color
 *      based on the option selected
 */
function colorchanger(){
    var selector = document.getElementById("mySelect");
    var color = selector.options[selector.selectedIndex].value;
    
    // Changing background color of div
    document.getElementById("exer_five_c").style.backgroundColor = color;
    
} // End of colorchanger


/**
 * changeTextColor - Function that changes the text color 
 *      of the paragraph in exercise 6d - based on the color
 *      selected in exercise 5c
 */
function changeTextColor(para){
    // Getting the selected color
    var selector = document.getElementById("mySelect");
    var color = selector.options[selector.selectedIndex].value; 
    
    // Changing Color of Paragraph
    para.style.color = color;
}


