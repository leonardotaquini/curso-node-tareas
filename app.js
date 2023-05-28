require("colors");
const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");


const main = async () => {
  let opt = "";

  do {

    opt = await inquirerMenu();
    opt !== '0' && await pausa();
    
  } while (opt !== "0");
};
main();
