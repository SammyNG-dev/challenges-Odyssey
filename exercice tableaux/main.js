let string = "iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f"
let array = string.split("")
let arraySlice = array.slice(16, length-1)
arraySlice.splice(5, 1, "t")
arraySlice.reverse()
arrayJoin = arraySlice.join(" ")
console.log(arrayJoin)