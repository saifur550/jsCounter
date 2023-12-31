// set initial count 
let count = 0

//select button & value 

let value = document.querySelector('#value')
let buttons = document.querySelectorAll('.btn')


//console.log(btns);



buttons.forEach(element => {
    element.addEventListener('click' , function(e){
        let styles = e.currentTarget.classList; 
        if(styles.contains('decrease')){
            count--
        }
        value.textContent = count
    })
});