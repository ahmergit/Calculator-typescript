import inquirer from "inquirer";

async function calculator() {
    while (true) {
        const answer: {
            numberOne: number,
            numberTwo: number,
            operator: string
        } = await inquirer.prompt([
            {
                type: 'number',
                name: 'numberOne',
                message: 'Enter your First num:'
            },
            {
                type: 'number',
                name: 'numberTwo',
                message: 'Enter your Second num:'
            },
            {
                type: 'list',
                name: 'operator',
                choices: ['+', '-', '*', '/'],
                message: 'Select Operator:'
            }
        ]);

        const { numberOne, numberTwo, operator } = answer;

        if (numberOne && numberTwo && operator) {
            let result: number = 0;
            if (operator === '+') {
                result = numberOne + numberTwo;
            }
            if (operator === '-') {
                result = numberOne - numberTwo;
            }
            if (operator === '*') {
                result = numberOne * numberTwo;
            }
            if (operator === '/') {
                result = numberOne / numberTwo;
            }

            console.log(`Your answer is: ${result}`);

            const continueAnswer = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'continue',
                    message: 'Do you want to perform another calculation?'
                }
            ]);

            if (!continueAnswer.continue) {
                break;
            }
        } else {
            console.log('Enter a valid input');
        }
    }
}

calculator();
