const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePasswordOne(){    
    let passwordOne = []
    let passwordOneEl = document.getElementById("password-one-el")
    
    for (let i = 0; i < 15; i++){
        
        let randomIndex = Math.floor(Math.random() * characters.length)
        let newCharacter = characters[randomIndex]
        // console.log(newCharacter)
        passwordOne.push(newCharacter)
    }   
    let passwordOneNoCommas = passwordOne.join("")
    passwordOneEl.textContent = passwordOneNoCommas
}

function generatePasswordTwo(){    
    let passwordTwo = []
    let passwordTwoEl = document.getElementById("password-two-el")
    
    for (let i = 0; i < 15; i++){
        
        let randomIndex = Math.floor(Math.random() * characters.length)
        let newCharacter = characters[randomIndex]
        // console.log(newCharacter)
        passwordTwo.push(newCharacter)
    }   
    let passwordTwoNoCommas = passwordTwo.join("")
    passwordTwoEl.textContent = passwordTwoNoCommas
    // console.log(passwordTwo.length)
}
// generatePasswordOne()
// generatePasswordTwo()





