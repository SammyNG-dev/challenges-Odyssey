import cowsay from "cowsay"

import "dotenv/config"

console.log(cowsay.say({
    text : `Bonjour, je suis ${process.env.NAME} de ${process.env.CAMPUS} !`
}))