var btn = document.querySelector("#btn");
var price = document.querySelector('#price');
var radioButtons = document.querySelectorAll('input[type="radio"]')
var clickedButtonName = radioButtons[0].value;

//Show USD Rate when First Loaded
window.addEventListener('load', function(){
    radioButtons[0].checked = true;
    getAPI()
});


// Show Money Currency on Click
radioButtons.forEach(function(e){
    e.addEventListener('click', function(){
        clickedButtonName = e.value;
        getAPI();
    })
})
// Refresh Current Data
btn.addEventListener('click', getAPI())

//Get  Data from API 
function getAPI(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status ==200){
            var url = JSON.parse(XHR.responseText).bpi[clickedButtonName].rate;
            price.innerHTML = url
        }
    }
    XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    XHR.send();
}