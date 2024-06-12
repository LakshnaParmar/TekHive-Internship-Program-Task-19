const btn = () => {
   
    let amount = document.getElementById('bill-amount').value;
   
    let perc = document.getElementById('tip-per').value;
   
    let tip = amount * (perc / 100);
   
    let total = Number(amount) + tip;
   
    document.getElementById('tip-amount').value = tip;

    document.getElementById('total-bill').value = total;
}