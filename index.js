let temp_database={
    "name":"",
    "email":"",
    "phone":"",
    "plan":"",
    "is_month":true,
    "onlineservice":false,
    "largerstorage":false,
    "customizableprofile":false,
    "total":0
}




const step1=document.querySelector(".step1");
const step2=document.querySelector(".step2");
const step3=document.querySelector(".step3");
const step4=document.querySelector(".step4");
const next=document.querySelector(".next");
const back=document.querySelector(".back");
const head=document.querySelector(".head");
const inputdiv=document.querySelector(".input");
const step1container=document.querySelector(".step1container");
const step2container=document.querySelector(".step2container");
const step3container=document.querySelector(".step3container");
const step4container=document.querySelector(".step4container");
const namee=document.querySelector(".name");
const email=document.querySelector(".email");
const phone=document.querySelector(".phone");
const arcade=document.querySelector(".arcade");
const advanced=document.querySelector(".advanced");
const pro=document.querySelector(".pro");
const toggle=document.querySelector(".toggle")
const free=document.querySelectorAll(".free")
const onlineservice=document.querySelector(".onlineservice")
const largerstorage=document.querySelector(".largerstorage")
const customizable=document.querySelector(".customizable")
const os=document.querySelector(".os");
const ls=document.querySelector(".ls")
const cp=document.querySelector(".cp")
const planamount=document.querySelector(".planamount")
const osamt=document.querySelector(".osamt")
const lsamt=document.querySelector(".lsamt")
const cpamt=document.querySelector(".cpamt")
const total=document.querySelector(".finaltotalamt")
const plandetail=document.querySelector(".plandetail")
const osdetail=document.querySelector(".osdetail")
const lsdetail=document.querySelector(".lsdetail")
const cpdetail=document.querySelector(".cpdetail")
const change=document.querySelector(".changeplan")
temp_database.is_month=true

target=step1;
targetcontainer=step1container;
back.style.visibility="hidden";

head.querySelector("h1").textContent='personal info';
head.querySelector("h4").textContent='please provide your name, email address and phone number';

step1container.classList.remove('hidecontainer')

step1.querySelector(".num").classList.add("navactivate");
step1.addEventListener("click",()=>{

    if(validate_user()){
        calculate()
        navactivator(step1,step1container)
    }
})
step2.addEventListener("click",()=>{
    if(validate_user()){
        calculate()
        navactivator(step2,step2container)
    }
    })
step3.addEventListener("click",()=>{
    if(validate_user()){
        calculate()
        navactivator(step3,step3container)
    }
    })
step4.addEventListener("click",()=>{
    if(validate_user()){
        calculate()
        navactivator(step4,step4container)
    }
    })

next.addEventListener("click",()=>{
    if(target==step1){
        if(validate_user()){
            calculate()
            navactivator(step2,step2container)
        }
    }else if(target==step2){
        calculate()
        navactivator(step3,step3container)
    }else if(target==step3){
        calculate()
        navactivator(step4,step4container)
    }else(thankyou())
})
back.addEventListener("click",()=>{
    if(target==step2){
        navactivator(step1,step1container)
    }else if(target==step3){
        navactivator(step2,step2container)
    }else if(target==step4){
        navactivator(step3,step3container)
    }
})

namee.addEventListener("keyup",()=>{
    if(namee.value==''){
        document.querySelector(".warn1").textContent="This field is required";
        namee.style.borderColor="hsl(354, 84%, 57%)";
    }else{
        document.querySelector(".warn1").textContent="";
        namee.style.borderColor="hsl(229, 24%, 87%)";
    }
})
email.addEventListener("keyup",()=>{
    if(email.value==''){
        document.querySelector(".warn2").textContent="This field is required";
        email.style.borderColor="hsl(354, 84%, 57%)";
    }else{
        document.querySelector(".warn2").textContent="";
        email.style.borderColor="hsl(229, 24%, 87%)";
    }
})
phone.addEventListener("keyup",()=>{
    if(phone.value==''){
        document.querySelector(".warn3").textContent="This field is required";
        phone.style.borderColor="hsl(354, 84%, 57%)";
    }else{
        document.querySelector(".warn3").textContent="";
        phone.style.borderColor="hsl(229, 24%, 87%)";
    }
})
arcade.style.backgroundColor="hsl(217, 100%, 97%)"
arcade.style.borderColor="hsl(243, 100%, 62%)"
temp_database.plan="arcade"
let cancelplan=arcade
arcade.addEventListener("click",()=>{
    temp_database.plan="arcade"
    Selectplan(arcade)})
advanced.addEventListener("click",()=>{
    temp_database.plan="advanced"
    Selectplan(advanced)})
pro.addEventListener("click",()=>{
    temp_database.plan="pro"
    Selectplan(pro)})

toggle.addEventListener("change",()=>{

    if(toggle.checked){
        temp_database.is_month=false
        arcade.querySelector("h5").textContent="$90/yr"
        advanced.querySelector("h5").textContent="$120/yr"
        pro.querySelector("h5").textContent="$150/yr"
        free.forEach(free => {
        free.textContent="2 months free" 
        onlineservice.querySelector("p").textContent="+$10/yr"
        largerstorage.querySelector("p").textContent="+$20/yr"
        customizable.querySelector("p").textContent="+$20/yr"
        });
        

    }else{
        temp_database.is_month=true
        arcade.querySelector("h5").textContent="$9/mo"
        advanced.querySelector("h5").textContent="$12/mo"
        pro.querySelector("h5").textContent="$15/mo"
        free.forEach(free => {
        free.textContent=""
        onlineservice.querySelector("p").textContent="+$1/mo"
        largerstorage.querySelector("p").textContent="+$2/mo"
        customizable.querySelector("p").textContent="+$2/mo"    
        });
    }
})

onlineservice.addEventListener("click",()=>{
    if(os.checked){
        os.checked=false
        temp_database.onlineservice=false
        onlineservice.style.backgroundColor=""
        onlineservice.style.borderColor=""
        osdetail.classList.add("hidecontainer")
    }else{
        os.checked=true
        temp_database.onlineservice=true
        onlineservice.style.backgroundColor="hsl(217, 100%, 97%)"
        onlineservice.style.borderColor="hsl(243, 100%, 62%)"
        osdetail.classList.remove("hidecontainer")
    }

})

largerstorage.addEventListener("click",()=>{
    if(ls.checked){
        ls.checked=false
        temp_database.largerstorage=false
        largerstorage.style.backgroundColor=""
        largerstorage.style.borderColor=""
        lsdetail.classList.add("hidecontainer")
    }else{
        ls.checked=true
        temp_database.largerstorage=true
        largerstorage.style.backgroundColor="hsl(217, 100%, 97%)"
        largerstorage.style.borderColor="hsl(243, 100%, 62%)"
        lsdetail.classList.remove("hidecontainer")
    }

})
customizable.addEventListener("click",()=>{
    if(cp.checked){
        cp.checked=false
        temp_database.customizableprofile=false
        customizable.style.backgroundColor=""
        customizable.style.borderColor=""
        cpdetail.classList.add("hidecontainer")
    }else{
        cp.checked=true
        temp_database.customizableprofile=true
        customizable.style.backgroundColor="hsl(217, 100%, 97%)"
        customizable.style.borderColor="hsl(243, 100%, 62%)"
        cpdetail.classList.remove("hidecontainer")
    }

})

change.addEventListener("click",()=>{
    calculate()
    navactivator(step2,step2container)})

function navactivator(step,stepcontainer){
    if(step==step1){
       back.style.visibility="hidden";
       head.querySelector("h1").textContent='Personal info';
       head.querySelector("h4").textContent='please provide your name, email address and phone number';

    }else{
        back.style.visibility="visible";
    }

    if(step==step2){
        head.querySelector("h1").textContent='Select your plan';
        head.querySelector("h4").textContent='You have the option of monthly or yearly billing';
    }

    if(step==step3){
        head.querySelector("h1").textContent='Pick add-ons';
        head.querySelector("h4").textContent='Add-ons help enhance your gaming experience';
     }
    if(step==step4){
        head.querySelector("h1").textContent='Finishing up';
        head.querySelector("h4").textContent='Double-check everything looks OK before confirming';
        next.style.backgroundColor='hsl(243, 100%, 62%)';
        next.textContent='Confirm';
    }else{
        next.style.backgroundColor='hsl(213, 96%, 18%)';
        next.textContent='Next Step';
    }
    
    target.querySelector(".num").classList.remove("navactivate");
    step.querySelector(".num").classList.add("navactivate");
    target=step;
    stepcontainer.classList.remove("hidecontainer");
    targetcontainer.classList.add("hidecontainer");
    targetcontainer=stepcontainer;

}

function Selectplan(plan){

    cancelplan.style.backgroundColor="white"
    cancelplan.style.borderColor="hsl(229, 24%, 87%)"
    plan.style.backgroundColor="hsl(217, 100%, 97%)"
    plan.style.borderColor="hsl(243, 100%, 62%)"
    cancelplan=plan

}
function validate_user(){
    let flag=true
    if(namee.value==''){
        document.querySelector(".warn1").textContent="This field is required";
        namee.style.borderColor="hsl(354, 84%, 57%)";
        flag=false
    }else{
        document.querySelector(".warn1").textContent="";
        namee.style.borderColor="hsl(229, 24%, 87%)";
        temp_database.name=namee.value
    }

    if(email.value==''){
        document.querySelector(".warn2").textContent="This field is required";
        email.style.borderColor="hsl(354, 84%, 57%)";
        flag=false
    }else{
        document.querySelector(".warn2").textContent="";
        email.style.borderColor="hsl(229, 24%, 87%)";
        temp_database.email=email.value
    }

    if(phone.value==''){
        document.querySelector(".warn3").textContent="This field is required";
        phone.style.borderColor="hsl(354, 84%, 57%)";
        flag=false
    }else{
        document.querySelector(".warn3").textContent="";
        phone.style.borderColor="hsl(229, 24%, 87%)";
        temp_database.phone=phone.value
    }
    return flag


}

function calculate(){
    temp_database.total=0
    if(temp_database.is_month){
        if(temp_database.plan=="arcade"){
            temp_database.total+=9;
            planamount.textContent="$9/mo"
            plandetail.textContent="Arcade (Monthly)"
        }else if(temp_database.plan=="advanced"){
            temp_database.total+=12
            planamount.textContent="$12/mo"
            plandetail.textContent="Advanced (Monthly)"
        }else if(temp_database.plan=="pro"){
            temp_database.total+=15
            planamount.textContent="$15/mo"
            plandetail.textContent="Pro (Monthly)"
        }
        if(temp_database.onlineservice){
            temp_database.total+=1;
            osamt.textContent="+$1/mo"}
        if(temp_database.largerstorage){
            temp_database.total+=2;
            lsamt.textContent="+$2/mo"}
        if(temp_database.customizableprofile){
            temp_database.total+=2;
            cpamt.textContent="+$2/mo"}
        total.textContent='$'+temp_database.total+'/mo'
    }else{
        if(temp_database.plan=="arcade"){
            temp_database.total+=90;
            planamount.textContent="$90/yr"
            plandetail.textContent="Arcade (Yearly)"
        }else if(temp_database.plan=="advanced"){
            temp_database.total+=120
            planamount.textContent="$120/yr"
            plandetail.textContent="Advanced (Yearly)"
        }else if(temp_database.plan=="pro"){
            temp_database.total+=150
            planamount.textContent="$150/yr"
            plandetail.textContent="Pro (Yearly)"
        }
        if(temp_database.onlineservice){
            temp_database.total+=10;
            osamt.textContent="+$10/yr"}
        if(temp_database.largerstorage){
            temp_database.total+=20;
            lsamt.textContent="+$20/yr"}
        if(temp_database.customizableprofile){
            temp_database.total+=20;
            cpamt.textContent="+$20/yr"}
        total.textContent='$'+temp_database.total+'/yr'

    }
}
function thankyou(){
    document.querySelector(".content").classList.add("hidecontainer")
    document.querySelector(".thanku").classList.remove("hidecontainer")
}