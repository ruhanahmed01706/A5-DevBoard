// alert('alert')

document.getElementById('shop-btn').addEventListener('click',function(event){
    alert('alert')
    event.preventDefault();
    const task = document.getElementById('task').innerText;
    const convertedtask =parseFloat(task);
    
    

    const checkboxNumber = document.getElementById('checkbox-number').innerText;
    const conCkBx=parseFloat(checkboxNumber);


    const number = 1;
    const tasksum = convertedtask - number;
    const maintask = document.getElementById('task').innerText = tasksum;


    const checkboxSum = conCkBx + number;
    const mainCkBx = document.getElementById('checkbox-number').innerText = checkboxSum;



})