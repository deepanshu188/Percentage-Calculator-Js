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
    
    setInterval(function()  {
    
    progress(i++)}, 30);
    
    let progress = () => {
    
if( i <= per && i <= 100 )
{
    progressBar.style.width = `${i}%`;
    progressBorder.style.visibility = 'visible';
    perc.style.visibility = 'visible';
    perc.innerHTML = `${i}%`;
    perc.style.left = `${i}px`;
    msg.innerHTML = ''; }
    tmarks.style.borderColor = 'grey';
}
    }