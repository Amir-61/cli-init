import fs from 'fs';
import chalk from 'chalk'

const init  = (options) => {
  const {file, object} = options

  if ((!object && !file) || (object && file)) {
    console.log(chalk.red('You need to pass either an object or file path'));
  }

  if (object) {
    const newObj = object.replace(/'/g, '"');
    if (!isValidateObj(newObj)) return console.error(chalk.red('INVALID OBJECT PROVIDED'))
    fs.writeFile("data.json", newObj, (err) => {
      if (err)
        console.log(chalk.red(err));
    });
    return   
  } else {
    fs.readFile(`${file}`, "utf8", (err, data) => {
      if (err) console.log(chalk.red(err));
      fs.writeFile("data.json", data, (err) => {
        if (err)
          console.log(chalk.red(err));
      });
    })
  }
}

export const isValidateObj = (obj) => {
  try {
      JSON.parse(obj)

  } catch (e) {
      return false
  }
  return true
}


export default init