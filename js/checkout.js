// function load(){
//  var urlParams = (new URL(document.location)).searchParams;
//  var total_cost = urlParams.get('total');
//  var inputField1 = urlParams.get('name');
//  let inputField2 = urlParams.get('cantact');
 
//  document.getElementById("total_cost").innerHTML = total_cost;
//  document.getElementById("inputField1").innerHTML = inputField1;
//  document.getElementById("email").value= inputField2;
// }
function expand(){
    const editBtn = document.querySelector('.edit-btn');
const editFields = document.querySelector('.edit-fields1');

// Add event listener to edit button

  // Toggle the display of the edit fields
  if (editFields.style.display === 'none') {
    editFields.style.display = 'block';
    editBtn.innerText = 'Close';
  } else {
    editFields.style.display = 'none';
    editBtn.innerText = 'Edit';
  }
}

function expand2(){
  const editBtn2 = document.querySelector('.edit-btn2');
  const editFields2 = document.querySelector('.edit-fields2');
  
  // Add event listener to edit button
  
    // Toggle the display of the edit fields
    if (editFields2.style.display === 'none') {
      editFields2.style.display = 'block';
      editBtn2.innerText = 'Close';
    } else {
      editFields2.style.display = 'none';
      editBtn2.innerText = 'Edit';
    }
    console.log('ergergerg');
  }
function save1(){
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    document.getElementById("address_data").innerHTML = address1+", "+address2+", "+city+", "+state+", "+zip;

}

function save2(){
    var contactnum = document.getElementById("contactnum").value;
    var email = document.getElementById("email").value;
    document.getElementById("number").innerHTML = "Contact number: "+contactnum;
    document.getElementById("email1").innerHTML = "Email: "+email;
    

}
function back(){
    window.location.href ="/Student1_Bimsara/buy/buy.html";
}
 
function save3(){
    var address1 = document.getElementById("address1");
    var city = document.getElementById("city");
    var zip = document.getElementById("zip");
    var cardnumber = document.getElementById("cardnumber");
    var Cardholder_name = document.getElementById("Cardholder_name");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var pin = document.getElementById("pin");
    if(address1.value=="" || city.value==""|| zip.value==""|| cardnumber.value==""||month.value==""||year.value==""||pin.value==""||Cardholder_name.value=="") {
        alert("Please fill all the starred fields!!");
    }else{
        alert("Payment Successful!");
    }
    
}

function setData(){

  var total = localStorage.getItem("total");
  var email = localStorage.getItem("email");
    
  document.getElementById("inputField1").innerHTML = "<p>"+email+"</P>";
  document.getElementById("total_cost").innerHTML = "<p>$"+total+"</P>";

  console.log(total);

  }

  setData();

// const editBtn = document.querySelector('.edit-btn');
// const editFields = document.querySelector('.edit-fields');

// // Add event listener to edit button
// editBtn.addEventListener('click', () => {
//   // Toggle the display of the edit fields
//   if (editFields.style.display === 'none') {
//     editFields.style.display = 'block';
//     editBtn.innerText = 'Cancel';
//   } else {
//     editFields.style.display = 'none';
//     editBtn.innerText = 'Edit';
//   }
// })