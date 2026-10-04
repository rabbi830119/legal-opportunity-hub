function payWithPaystack(itemName, itemPriceNaira) {
    const paystackPublicKey = "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

    let handler = PaystackPop.setup({
        key: paystackPublicKey,
        email: 'user@example.com',
        amount: itemPriceNaira * 100,
        currency: "NGN",
        ref: 'LHUB_' + Math.floor((Math.random() * 1000000000) + 1),
        callback: function(response) {
            alert('Payment successful! Reference: ' + response.reference);
        },
        onClose: function() {
            alert('Transaction cancelled.');
        }
    });

    handler.openIframe();
}
