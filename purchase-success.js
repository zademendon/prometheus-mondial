window.onload = function () {
    const totalValue = localStorage.getItem('totalValue')

    if (totalValue) {
        const transIdNum = document.querySelector('body > div.body-section > div > div > div.payment-success-content > div > div.col-md-6 > div > div > p:nth-child(2) > a').textContent

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
            event: 'purchase',
            ecommerce: {
                transaction_id: transIdNum,
                value: +totalValue,
                currency: 'USD',
            }
        });

        window.uetq = window.uetq || [];
        window.uetq.push('event', '', {"revenue_value":totalValue,"currency":"USD"});
        
    }
}
