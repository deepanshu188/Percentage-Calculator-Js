onload = () => {       
    // DOM declaration
    let msg = document.getElementById('msg');
     let input2 = document.getElementById("input2");
    let input1 = document.getElementById("input1");
    let p1 = document.querySelector('#p1');
    let p2 = document.querySelector('#p2');
    let label1 = document.querySelector('#label1');
    let label2 = document.querySelector('#label2');
    let options = document.querySelector('#options');
    let perAnime = document.querySelector('#perAnime');
    let per;
}

const change = () => {
        input1.value = '';
        input2.value = '';
        msg.innerHTML = '';
        perAnime.style.display = 'none';

    if(options.value === 'p1')
        label2.innerHTML = '% of Quantity:';
    else
        label2.innerHTML = 'Respective Quantity:';
};

const check = () => {
    let perc = document.getElementById('per');
    let progressBar = document.getElementById('progress');
    let progressBorder = document.getElementById('progressBorder');
    let i = 0;
    let click = false;
    let i2;
    let loading;

    if(options.value === 'p1')
    {
        let inputLength1 = input1.value.length;
        let inputLength2 = input2.value.length;
        perAnime.style.display = 'none';
        msg.style.color ="lime";

        if(inputLength1!== 0 && inputLength2 !== 0)
        {
             per = input1.value * input2.value / 100;
             msg.style.fontSize = '2rem';
            let quantityAnime = setInterval(() => {
                if(i < inputLength1 * 10)
                {
                    msg.innerHTML = (Math.random() * (inputLength1  * 100)).toFixed(2);
                    i++;
                }
                else
                {
                    clearInterval(quantityAnime);
                    msg.style.fontFamily = 'orbitron';
                    msg.innerHTML = per;
                }
                    
            },10)
        }
    }
    else
    {
        per = input2.value*100/input1.value;
        msg.style.fontSize = '1.3rem';
        perAnime.style.display = 'block';
        msg.style.color = 'red';
        // Wrong Input Handling
        if( per > 100)
        {
            progressBar.style.width = 0;
            progressBorder.style.visibility = 'hidden';
            perc.innerHTML = `${0}%`;
            perc.style.visibility = 'hidden';
            msg.innerHTML = 'Wrong input!';
            input1.style.borderColor = 'red';
               return;
        }
    
        // If input is correct
        else if(per <= 100)
        {
                if(!click)
                {
                    btn.disabled = true;
                    click = true;
                }
            
            loading = setInterval(function() 
            {
                progress(i+=1);
            }, 1);
        }
        
        // Animation Function
            let progress = () => 
            {
                
                if( i <= per*10 && i <= 1000)
                {
                    i2 = i/10;
                    progressBar.style.width = `${i2.toFixed(2)}%`;
                    progressBorder.style.visibility = 'visible';
                    perc.style.visibility = 'visible';
                    perc.innerHTML = `${i2.toFixed(2)}%`;
                    perc.style.left = `${i2.toFixed(2)}px`;
                    msg.innerHTML = '';
                    input1.style.borderColor = '#ccc';
                }
                else
                {
                    click = false;
                    btn.disabled = false;
                    clearInterval(loading);
                }
            };
    }
};
