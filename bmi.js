const weightEl = document.getElementById('Weight');
const heightEl = document.getElementById('height');
let weightInput = document.querySelector('.weightvalue');
let heightInput = document.querySelector('.heightvalue');
const resultHtml=document.querySelector('.result');
const bmivalue=document.querySelector('.bmi-value');
const wel_container=document.querySelector('.wel-container');
const btnContainer=document.querySelector('.btn-container');

function btnEvent(){
    const btn = document.querySelector('.btn');
    btn.addEventListener('click',()=>{
        bmicalc();
    });
}
btnEvent();

weightInput.addEventListener('keydown',(event)=>{
    if(event.key=="Enter"){
        if(heightInput.value!==""){
            bmicalc();
        }else{
            heightInput.focus();
        }
    }
});


heightInput.addEventListener('keydown',(event)=>{
    if(event.key=="Enter"){
        if(weightInput.value!==''){
            bmicalc();
        }else{
            weightInput.focus();
        }
    }
});

function bmicalc(){
    let weightType=weightEl.value;
    let heightType=heightEl.value;
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    wel_container.innerHTML=``;

    btnContainer.innerHTML=`
    <button class="clear">Clear</button>
    `;
    clear_value();

    if(weightType=="pounds"){
        weight=weight*2.20462;
    }
    if(heightType=="cm"){
        height=height/100;
    }
    if(heightType=="inch"){
        height/=39.37;
    }
    if(heightType=="feets"){
        height*=0.3048;
    }


    if (!isNaN(height) && !isNaN(weight) ) {
        let result = weight / (height * height);
        let resultType=``;
        if(result<=16.0 || result>=40.0){
            bmivalue.innerHTML=`
        <div>I think you provided information was Wrong. Kindly Provide the correct Information</div>
        `;
        return;
        }
        else if(result<=18.5){
            resultType=`You are underweight !!.Exercise to be Fit,Not skinny.
            Eat to nourish your body and always 
            Be Worth more than you realise`;
        }
        else if(result<=25.0){
            resultType=`You are Healthy Normal !!.
            Your commitment to a healthy lifestyle is inspiring. 
            Keep embracing the habits that make you feel good inside and out.`;
        }
        else if(result<=40.0){
            resultType=`You are Over Weight !!.
            I appreciate you for who you are, 
            not just how you look. 
            Your worth is not determined by your weight.
            Go to gym and Make your Worth more.
            `;
        }
        bmivalue.innerHTML=`
        <div>Your BMI is..</div>
        <h1 class="bmi-calc">${(result.toFixed(2))}
        </h1>
        `;
        resultHtml.innerHTML=`${resultType}`;
    } 
    else {
        bmivalue.innerHTML=`
        <h3>Invalid Input!!</h3>
        `;
        resultHtml.innerHTML=``;
    }
}
function clear_value(){
    let clear=document.querySelector('.clear');
    clear.addEventListener('click',()=>{
        heightInput.value=``;
        weightInput.value='';
        bmivalue.innerHTML=``;
        resultHtml.innerHTML=``;
        wel_container.innerHTML=`
        <h5>Welcome !!</h5>
        <div>Enter your Height and Weight and you'll see your BMI result here</div>
        `;
        btnContainer.innerHTML=`
        <button class="btn">Calculate</button>
        `;
        btnEvent();
    });
}

header();



function header(){
    const headerhtml=document.querySelector('.header');
    let head="Body Mass Index";
    let i=1;

    setInterval(()=>{
        headerhtml.innerHTML=`${head.slice(0,i)}`;
        if(i==head.length){
            i=0;
        }
        i++;
    },300);
}