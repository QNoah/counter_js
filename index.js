let count = 0;


document.getElementById('increaseCount').onclick = function(){
    console.log("werkt");
    count+= 1;
    document.getElementById('count').textContent = `Count: ${count}`;
}