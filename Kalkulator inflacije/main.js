function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate').value;
    let money = document.querySelector('#money').value;
    let years = document.querySelector('#years').value;
    let container = document.querySelector('.container');

    inflationRate = parseFloat(inflationRate);
    money = parseFloat(money);
    years = parseFloat(years);

    let proracun = money + (money * (inflationRate / 100));

    for (let i = 1; i < years; i++) {
        proracun += proracun * (inflationRate / 100);
    }

    proracun = proracun.toFixed(2);

    let rezultat = document.createElement('div');
    rezultat.className = 'new-value';
    container.appendChild(rezultat);

    rezultat.innerText = `Za unesenu stopu inflacije od ${inflationRate}%, iznos od ${money}€ za ${years} godina, iznos inflacije ce biti: ${proracun}!`;
}