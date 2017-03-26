// Exercise 5a
function jsStyle() {
    // function to change style
    // Change the color and the size of the font
    // in the paragraph with id='text'
    var element = document.getElementById("text")
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

// Exercise 5e
function divide(){
    // Function will divide the element with id firstoperand
    // by the element with id secondoperand
    // @return The quotient of first and second or "undefined" if second is 0

    var first = parseInt(document.getElementById("firstoperand").value);
    var second = parseInt(document.getElementById("secondoperand").value);

    var result = document.getElementById("result");

    if(second === 0){
        result.innerHTML = "Undefined";
    }else{
        result.innerHTML = (first / second);
    }

}

function multiply(){
    // Function will multiply the element with id firstoperand
    // by the element with id secondoperand
    // @return the product of first and second

    var first = parseInt(document.getElementById("firstoperand").value);
    var second = parseInt(document.getElementById("secondoperand").value);

    document.getElementById("result").innerHTML = (first*second);

}
