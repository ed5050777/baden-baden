const price = document.querySelector('#price');
const money = new Intl.NumberFormat('en-IE', {style:'currency',currency:'EUR',maximumFractionDigits:0});
function updateYield(){ const value=Number(price.value)*1000000;document.querySelector('#price-value').value=money.format(value);document.querySelector('#yield').textContent=(2500000/value*100).toFixed(2)+'%';document.querySelector('#per-room').textContent=money.format(value/153); }
price.addEventListener('input',updateYield);updateYield();