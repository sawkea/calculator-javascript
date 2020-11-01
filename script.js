var operande1 = '0';
var operator = '+';
var test = false;

function calculer(g,v){
    // console.log(g,v);
    // selectionner l'écran et le mettre dans une variable
    var ecran = document.querySelector('#ecran');

    // assigner la valeur v à l'écran pour l'afficher
    
    switch (g){
        // Chiffres
        case 'ch':
            if(test) {
                ecran.value = '';
                test = false;
            }
            // efface le 0 au départ
            if(ecran.value =='0') ecran.value = '';

            //affiche les chiffres tant que l'on clic
            ecran.value += v;
        break;

        // La virgule
        case 'dec':
            // affiche qu'une fois la virgule
            if(ecran.value.indexOf('.') == -1) ecran.value += '.';
        break;

        // Les opérateurs
        case 'op':
            calculer('eg');
            operande1 = ecran.value;
            operator = v;
            test = true;
        break;

        // Le égal
        case 'eg':
            switch (operator){
                case '+' :
                    ecran.value = ecran.value*1 + parseFloat(operande1);
                break;
                    
                case '-' :
                    ecran.value = operande1 - ecran.value;
                break;

                case '/' :
                    ecran.value = operande1 / ecran.value;
                break;

                case 'x' :
                    ecran.value = operande1 * ecran.value;
                break;
            }
        break;

        // CE et C
        case 'sp':
            ecran.value = "0";
            operande1 = "0";
            operator = "";
            
            console.log(ecran.value);
            console.log(operande1);
            console.log(operator);

        break;

    }
}

