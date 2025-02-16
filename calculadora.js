
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero.";
    }
    return a / b;
}

// Menú interactivo
function calculadora() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(
            "Selecciona una operación:\n" +
            "1. Sumar\n" +
            "2. Restar\n" +
            "3. Multiplicar\n" +
            "4. Dividir\n" +
            "5. Salir"
        );

        if (opcion === "5") {
            continuar = false;
            alert("¡Hasta luego!");
            continue;
        }

        let num1 = parseFloat(prompt("Ingresa el primer número:"));
        let num2 = parseFloat(prompt("Ingresa el segundo número:"));

        let resultado;

        switch (opcion) {
            case "1":
                resultado = sumar(num1, num2);
                break;
            case "2":
                resultado = restar(num1, num2);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                break;
            case "4":
                resultado = dividir(num1, num2);
                break;
            default:
                alert("Opción no válida.");
                continue;
        }

        alert("Resultado: " + resultado);
    }
}

calculadora();