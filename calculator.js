const buttons = document.querySelectorAll('.calculator button');
const input = document.querySelector('input');

buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const text = button.textContent.toLowerCase();

        if(text === 'c'){
            console.log(text);
            input.value = '';
        }
        else if(text === 'del'){
            input.value = input.value.slice(0, input.value.length - 1);
        }
        else if(text === '='){
            console.log(text);
            input.value = eval(input.value.replaceAll('x', '*'));
        }
        else{
            console.log(text);
            input.value += button.textContent;
        }

    })
})

