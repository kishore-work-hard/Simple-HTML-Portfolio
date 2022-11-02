

//Calculate Tip
function calculateTip() {
  var days = document.querySelector('#days').value;
  var hours = document.querySelector('#hours').value;


  //validate input
  if (days === "" || hours == 0) {
    alert("Please enter values");
    return;
  }

  //Calculate tip
  var total = (days * hours);
  //Display the tip
  document.querySelector('#totalTip').style.display = "block";
  document.querySelector('#tip').innerHTML = total;

}

//click to call function



window.onload = () =>
    //the function called when Calculate button is clicked.
    {
        /*calling a function calculateTip
         which will calculate the tip for the bill.*/
        document.querySelector('#calculate').onclick = calculateTip;
    }
