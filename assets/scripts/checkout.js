const payButton = document.querySelector('.payment-button');
const inputs = document.querySelectorAll('.input');

payButton.addEventListener('click', () => {
    let allFilled = true;

    inputs.forEach(input => {
        if(input.value.trim() === ""){
            allFilled = false;
            input.style.border = "1px solid red";
        }else{
            input.style.border = "1px solid #8A8A8A";
        }
    });

    if(allFilled) {
        alert('Payment was successfull!');
        inputs.forEach((input)=>{
            input.value = '';
        });
    }else{
        alert('Please fill in all fields');
    }
});
