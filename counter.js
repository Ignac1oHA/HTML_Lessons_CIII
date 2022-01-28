let c = 0;
function count() {
    c += 1;
    document.querySelector('h1').innerHTML = `You have clicked ${c} times`
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('button').onclick = count;
});