import { get, save } from "./filesMethods.js";
import inquirer from "inquirer";
import { promptNewExpese } from "./Prompts.js";

const main = async () => {
  let run = true;
  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosen",
        message: "Elija por favor:",
        choices: [
          { value: 1, name: "Mostrar todos los gastos" },
          { value: 2, name: "Cargar nuevo gasto" },
          { value: 99, name: "Salir" },
        ],
      },
    ]);
    switch (action.chosen) {
      case 1:
        await getAllExpense();
        break;
      case 2:
        await createNewExpense();
        break;
      case 99:
        run = false;
        break;
      default:
        run = false;
        break;
    }
  }
  console.log("Muchas Gracias");
};

main();

async function createNewExpense() {
  console.log("Agregando nuevo gasto...");
  const newExpenseData = await promptNewExpese();
  console.log("Creando:", newExpenseData);
  const currentExpense = await get("Expense");
  currentExpense.push(newExpenseData);
  await save("Expense", currentExpense);
}

async function getAllExpense() {
  const currentExpense = await get("Expense");
  console.log(currentExpense);
}
