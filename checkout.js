window.onload = function () {
    const submitBtnEl = document.querySelector('#MaintContent_btnSubmitOrder');
    submitBtnEl.addEventListener('click', () => {
        const totalValue = document.querySelector('#MaintContent_lblUnitTotal').textContent;
        localStorage.setItem('totalValue', totalValue);
    });
};
