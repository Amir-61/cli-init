import cli from "commander";
import initMethod from './initHandlers.js'

const INIT = () => {
    return(cli
        .command("INIT")
        .description('Initialize the object')
        .option('-o, --object <object>', 'stringified object')
        .option('-f, --file <file>', 'JSON file')

        .action(initMethod))
}

export default INIT
