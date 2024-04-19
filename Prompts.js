import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNewExpese() {
  return await inquirer.prompt(newExpensePrompt);
}

const newExpensePrompt = [
  {
    type: "input",
    name: "detalle",
    message: "Ingrese el detalle:",
  },
  {
    type: "input",
    name: "monto",
    message: "Ingrese el monto:",
  },
];
