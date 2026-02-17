// This JavaScript is mainly things I have learned from other classes but I did my best to incorperte things I had learned in class
window.onload = function() {
    var buttons = document.querySelectorAll('button'); //looks for all my buttons in my HTML file
    var subtotal = 0;
    function updateSubtotal() { //defines the updated subtotal used later in the file
        document.getElementById('subtotal').textContent = subtotal.toFixed(2); //grabs the existing subtotal from my HTML file
    }
    for (var i = 0; i < buttons.length; i++) { //if statement to run my button clicking
        buttons[i].onclick = function() { //mouse pressed detection
            var price = parseFloat(this.getAttribute('price')); //a varibale float value that gets the price of the items from my HTML file
            if (!isNaN(price)) {
                subtotal += price; //updating the subtotal of the items
                updateSubtotal(); //running the updated subtotal
            }
        };
    }
}
