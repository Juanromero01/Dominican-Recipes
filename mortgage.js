function calculateMortgage() {

    let loanAmount =
        parseFloat(document.getElementById("loanAmount").value);

    let annualInterestRate =
        parseFloat(document.getElementById("interestRate").value);

    let loanYears =
        parseFloat(document.getElementById("loanYears").value);

    let monthlyInterestRate =
        annualInterestRate / 100 / 12;

    let totalPayments =
        loanYears * 12;

    let mortgagePayment =
        (loanAmount * monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments)) /

        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    document.getElementById("monthlyPayment").innerHTML =
        "$" + mortgagePayment.toFixed(2);
}