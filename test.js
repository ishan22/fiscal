var submits = document.querySelectorAll("#submitOrderButtonId, #bottomSubmitOrderButtonId");

var buttonHtml = '<span id="submitFakeOrderButtonId" class="a-button a-button-span12 a-button-primary continue-button celwidget buy-button-height buy-button-sky-fix"><span class="a-button-inner"><input name="fakeOrderPlace" id="fakeOrder" class="a-button-input" type="button"><span id="submitFakeOrderButtonId-announce" class="a-button-text" aria-hidden="true"><span class="place-order-button-text buy-button-line-height">Place your order please.</span></span></span></span>';

for (let index = 0; index < submits.length; index++) {
    console.log(submits[index].id);

    if (submits[index].nextElementSibling.textContent.trim() === "Place your order" && submits[index].parentElement.parentElement.id != "submitFakeOrderButtonId") {
        var el = submits[index].parentElement.parentElement;
        el.insertAdjacentHTML("afterend", buttonHtml);
        el.parentNode.removeChild(el);
    }
}