function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value; 
    let serviceQuality = document.getElementById('serviceQuality').value; 
    let numberOfPeople = document.getElementById('people').value; 

    if(bill == "" | serviceQuality == 0) {
        alert("Por favor, preencha corretamente os valores")
        return;
    }

    if(numberOfPeople == "" | numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQuality) / numberOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";

}

//Bloquando os elementos presente no HTML
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

//enviando o formulário
document.getElementById('tipsForm').addEventListener("submit", calculateTip);
