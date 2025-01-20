import fs from "fs"

fs.readFile('input.txt', 'utf8', (err,Values) => {
    if(err){
        throw err
    }
    const Value_from_input = Values;
    console.log(Value_from_input)
})