//Function Invoke onClick

let perctg = function()
{    
    //DOM declaration
    
    let progressBar = document.getElementById('progress');
    let progressBorder = document.getElementById('progressBorder');
    let perc = document.getElementById('per');
    let msg = document.getElementById('msg');
    let tmarks =                     document.getElementById("tmarks");
    let marks =         document.getElementById("marks");
    
    //Percentage Formula
    
    let per = marks.value/tmarks.value*100;
    let i = 0;
    
    //Wrong Input Handling

    if( per > 100 )
    {
    progressBar.style.width = 0;
    progressBorder.style.visibility = 'hidden';
    perc.innerHTML = `${0}%`;
    perc.style.visibility = 'hidden';
    msg.innerHTML = 'Wrong input!';
    tmarks.style.borderColor = 'red';
       return;
    }

    //Input is correct

    else {
    
    setInterval(function()  {
    
    progress(i+=.1)}, 3);
    }
    
    let progress = () => {
    
if( i <= per && i <= 100 )
{
    progressBar.style.width = `${i.toFixed(2)}%`;
    progressBorder.style.visibility = 'visible';
    perc.style.visibility = 'visible';
    perc.innerHTML = `${i.toFixed(2)}%`;
    perc.style.left = `${i.toFixed(2)}px`;
    msg.innerHTML = ''; }
    tmarks.style.borderColor = 'grey';
}

    }