// node modules
const fs = require('fs');
const readline = require('readline');
const validator = require('validator');
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});

// Path file contacts.json
const dataPath= './data/contacts.json'
// cek file JSON

// Function cek folder JSON
const cekData = async() =>{
    // Path folder data
    const dirPath=`./data`
    // Cek Folder Data
    if(!fs.existsSync(dirPath)){    
        // Buat folder jika belum ada
        fs.mkdirSync(dirPath)
    }
}

// Function cek data JSON
const cekFile = async() =>{
    if(!fs.existsSync(dataPath)){
        // Buat file JSON jika belum ada 
        fs.writeFileSync(dataPath, '[]', 'utf-8')
    }
}


// Membuat fungsi bertanya (input)
const questions = (ask) =>{
    return new Promise((resolve, reject) =>{
        rl.question(ask,(inputVarible) =>{
            resolve(inputVarible)
        })
    })
}

// Function Main
const main = async() =>{
    // Pemanggilan fungsi 2 pertanyaan
    const name = await questions('Input nama anda :')
    const phone = await questions('Nomor telpon anda: ')
    const email = await questions('Email anda: ')

    const contact = {name, phone, email}
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)
    contacts.push(contact)
    fs.writeFileSync(dataPath, JSON.stringify(contacts))
    console.log("Success input data!")
    rl.close()
}


// add the code below
module.exports = { cekData, cekFile, main,questions };