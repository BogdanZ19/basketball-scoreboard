document.getElementById("home-score").textContent = 0
document.getElementById("guest-score").textContent = 0


function add(btn) {
    let team 
    let num = 0
    if (btn.id.startsWith("h"))
    {
        team = "home-score"
    }
    else
        team = "guest-score"
    num = Number(btn.id[btn.id.length - 1])
    
    score = Number(document.getElementById(team).textContent)
    score += num
    console.log(score)
    console.log(num)
    document.getElementById(team).textContent = score
}