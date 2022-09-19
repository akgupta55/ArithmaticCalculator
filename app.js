window.onload = () => {
    let buttona = document.querySelector("#add");
    let buttons = document.querySelector("#sub");
    let buttonm = document.querySelector("#mul");
    let buttond = document.querySelector("#div");

    // Function for calculating arithmatic
    buttona.addEventListener("click", calculateArithmaticAdd);
    buttons.addEventListener("click", calculateArithmaticSub);
    buttonm.addEventListener("click", calculateArithmaticMul);
    buttond.addEventListener("click", calculateArithmaticDiv);
};

function calculateArithmaticAdd() {

    /* Getting input from user into first no. variable.
    Input is string so typecasting is necessary. */
    let first = parseInt((document
        .querySelector("#first") || {}).value);

    /* Getting input from user into second no. variable.
    Input is string so typecasting is necessary.*/
    let second = parseInt((document
        .querySelector("#second") || {}).value);

    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (first === "" || isNaN(first))
        result.innerHTML = "Provide a valid no a.!";

    else if (second === "" || isNaN(second))
        result.innerHTML = "Provide a valid no b.!";

    // If both input is valid, calculate the add
    else {

        let add = first + second;

        result.innerHTML = `Addtion of two no. is : <span>${add}</span>`;
    }
}
function calculateArithmaticSub() {

    /* Getting input from user into first no. variable.
    Input is string so typecasting is necessary. */
    let first = parseInt((document
        .querySelector("#first") || {}).value);

    /* Getting input from user into second no. variable.
    Input is string so typecasting is necessary.*/
    let second = parseInt((document
        .querySelector("#second") || {}).value);

    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (first === "" || isNaN(first))
        result.innerHTML = "Provide a valid no a.!";

    else if (second === "" || isNaN(second))
        result.innerHTML = "Provide a valid no b.!";

    // If both input is valid, calculate the sub
    else {

        let sub = first - second;

        result.innerHTML = `Substraction of two no. is : <span>${sub}</span>`;
    }
}
function calculateArithmaticMul() {

    /* Getting input from user into first no. variable.
    Input is string so typecasting is necessary. */
    let first = parseInt((document
        .querySelector("#first") || {}).value);

    /* Getting input from user into second no. variable.
    Input is string so typecasting is necessary.*/
    let second = parseInt((document
        .querySelector("#second") || {}).value);

    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (first === "" || isNaN(first))
        result.innerHTML = "Provide a valid no a.!";

    else if (second === "" || isNaN(second))
        result.innerHTML = "Provide a valid no b.!";

    // If both input is valid, calculate the mul
    else {

        let mul = first * second;

        result.innerHTML = `Multiplication of two no. is : <span>${mul}</span>`;
    }
}
function calculateArithmaticDiv() {

    /* Getting input from user into first no. variable.
    Input is string so typecasting is necessary. */
    let first = parseInt((document
        .querySelector("#first") || {}).value);

    /* Getting input from user into second no. variable.
    Input is string so typecasting is necessary.*/
    let second = parseInt((document
        .querySelector("#second") || {}).value);

    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (first === "" || isNaN(first))
        result.innerHTML = "Provide a valid no a.!";

    else if (second === "" || isNaN(second))
        result.innerHTML = "Provide a valid no b.!";

    // If both input is valid, calculate the div
    else {

        // Fixing upto 6 decimal places
        let div = first / second.toFixed(6);

        result.innerHTML = `Division of two no. is : <span>${div}</span>`;
    }
}
