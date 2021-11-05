let number1;
let number2;
let operation;

function clearInput(){
    number1 = null;
    number2 = null;
    operation = "null";
    document.getElementById("numberInput1").value = null;
    document.getElementById("numberInput2").value = null;
    document.getElementById("operationSelection").value = "null";
    document.getElementById("resultOutput").value = null;
}

function calculate(){
    number1 = document.getElementById("numberInput1").value;
    number2 = document.getElementById("numberInput2").value;

    if (number1 === "" || number2 === "")
    {
        alert("Sayı kutucuklarına gerçekten sayı girmelisiniz :(");
        return;
    }

    number1 = Number(number1);
    number2 = Number(number2);
    operation = document.getElementById("operationSelection").value;

    switch(operation){
        case "add":
            document.getElementById("resultOutput").value = String(number1 + number2);
            break;

        case "sub":
            document.getElementById("resultOutput").value = String(number1 - number2);
            break;

        case "mul":
            document.getElementById("resultOutput").value = String(number1 * number2);
            break;

        case "div":
            if (number2 !== 0){
                document.getElementById("resultOutput").value = String(number1 / number2);
            }
            else{
                alert("Sıfıra bölemezsiniz :(");
            }
            break;
        default:
            alert("İşlem seçmelisiniz :(");
            break;
    }
}