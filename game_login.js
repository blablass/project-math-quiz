// we add your name any problem with that?
function adduser(){
    player1foot = document.getElementById("player1foot").value
    player2foot = document.getElementById("player2foot").value
    localStorage.setItem("foot1",player1foot)
    localStorage.setItem("foot2",player2foot)
    window.location = "game_page.html"
}