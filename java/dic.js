const form = document.getElementById("form");
const at1 = document.getElementById("at1");
const at2 = document.getElementById("at2");
const at3 = document.getElementById("at3");
const at4 = document.getElementById("at4");
const at5 = document.getElementById("at5");
const at6 = document.getElementById("at6");
const at7 = document.getElementById("at7");
const at8 = document.getElementById("at8");
const at9 = document.getElementById("at9");
const at10 = document.getElementById("at10");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkInputAt1();
    checkInputAt2();
    checkInputAt3();
    checkInputAt4();
    checkInputAt5();
    checkInputAt6();
    checkInputAt7();
    checkInputAt8();
    checkInputAt9();
    checkInputAt10();
    
})

function checkInputAt1(){
    const at1Value = at1.value;

    if(at1Value === "4"){
       Input(at1, "certa resposta")

    }else{
        InputError(at1,"tente de novo")
    }
}

function checkInputAt2(){
    const at2Value = at2.value;

    if(at2Value === "348.57"){
       Input(at2, "certa resposta")

    }else{
        InputError(at2,"tente de novo")
    }
}

function checkInputAt3(){
    const at3Value = at3.value;

    if(at3Value === "87.14"){
       Input(at3, "certa resposta")

    } else if(at3Value === "87.1"){
       Input(at3, "utilize duas casas decimais")
    }else{
        InputError(at3,"tente de novo")
    }
}

function checkInputAt4(){
    const at4Value = at4.value;

    if(at4Value === "12,01"){
       Input(at4, "certa resposta")

    }else{
        InputError(at4,"tente de novo")
    }
}

function checkInputAt5(){
    const at5Value = at5.value;

    if(at5Value === "4192510,56"){
       Input(at5, "certa resposta")

    } else if(at5Value === "4192510"){
       Input(at5, "utilize duas casas decimais")
    }else{
        InputError(at5,"tente de novo")
    }
}

function checkInputAt6(){
    const at6Value = at6.value;

    if(at6Value === "20"){
       Input(at6, "certa resposta")

    } else if(at6Value === "209625"){
       Input(at6, "utilize duas casas decimais")
    }else{
        InputError(at6,"tente de novo")
    }
}

function checkInputAt7(){
    const at7Value = at7.value;

    if(at7Value === "145.10"){
       Input(at7, "certa resposta")

    }else{
        InputError(at7,"tente de novo")
    }
}

function checkInputAt8(){
    const at8Value = at8.value;

    if(at8Value === "7.255"){
       Input(at8, "certa resposta")

    }else{
        InputError(at8,"tente de novo")
    }
}

function checkInputAt9(){
    const at9Value = at9.value;

    if(at9Value === "24"){
       Input(at9, "certa resposta")

    } else if(at9Value === "11"){
       Input(at9, "quase")
    }else{
        InputError(at9,"tente de novo")
    }
}

function checkInputAt10(){
    const at10Value = at10.value;

    if(at10Value === "5555"){
       Input(at10, "certa resposta")

    } else if(at10Value === "11"){
       Input(at10, "quase")
    }else{
        InputError(at10,"tente de novo")
    }
}























function Input(input, message){
    const formItem = input.parentElement;
    const textMassage = formItem.querySelector("a")

    textMassage.innerText = message;

    formItem.className = "form-content true"

}

function InputError(input, message){
    const formItem = input.parentElement;
    const textMassage = formItem.querySelector("a")

    textMassage.innerText = message;

    formItem.className = "form-content error"

}