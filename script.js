// Chapas Grêmio Estudantil
var nomsChapas = ['Conjunto Prioridade', 'InterAÇÃO Jovem'];
var chps = JSON.parse(localStorage.getItem('chps_json')) || [0, 0];

function showVisor( num ){
    numbr1 = document.getElementById('vs1').value;
    numbr2 = document.getElementById('vs2').value;
    if (numbr1 == "") {
        document.getElementById("vs1").value = num.innerHTML;
    } else if (numbr2 == "") {
        document.getElementById("vs2").value = num.innerHTML;
    }
}

function corrigir(){
    var vs1 = document.getElementById('vs1');
    var vs2 = document.getElementById('vs2');
    numbr1 = ''; numbr2 = '';
    vs1.value = numbr1; vs2.value = numbr2;
}

function reset(){
    var img = document.getElementById('LgChapa');
    var inp = document.getElementById('nmChapa');
    img.setAttribute('src', './imgs/voting.png');
    inp.value = '';
    corrigir()
}

function enviar(){
    var numbr1 = document.getElementById('vs1').value;
    var numbr2 = document.getElementById('vs2').value;
    var numbr = numbr1.concat(numbr2)
    var img = document.getElementById('LgChapa');
    var inp = document.getElementById('nmChapa');
    if(numbr1 != '' && numbr2 != '' && numbr != ''){
        switch( numbr ){
            case '16':
                result = chps[0] += 1;
                saveToStorege();
                inp.value = nomsChapas[0];
                img.setAttribute('src', './imgs/Conjunto Prioridade.png');
                setTimeout(function(){ reset(); }, 3000);
                break;
            case '14':
                result = chps[1] += 1;
                saveToStorege();
                inp.value = nomsChapas[1];
                setTimeout(function(){ reset(); }, 3000);
                break;
            default:
                alert('Número Nulo, troque de número e tente novamente.')
                corrigir()
        }  
    }else{
        alert('Os dois campos de número precisam estar preenchidos corretamente.')
    } 
}

function saveToStorege(){
    localStorage.setItem('chps_json',JSON.stringify(chps));
}