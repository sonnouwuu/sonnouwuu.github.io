function calculateY(a, x) {
    try {
        if (x >= 2) {
            // Проверка деления на ноль и корня из отрицательного
            const denominator = Math.pow(x, 3) - 25;
            if (denominator === 0) throw "Ошибка: деление на ноль (x³ - 25 = 0)";
            if (a + x < 0) throw "Ошибка: корень из отрицательного числа (a + x < 0)";
            
            return (a / denominator) + Math.sqrt(a + x);
        } 
        else if (x >= 0 && x < 2) {
            if (a < 0) throw "Ошибка: корень из отрицательного числа (a < 0)";
            return 2 * Math.sqrt(a) - (x / 4);
        } 
        else {
            return 0.3 * x;
        }
    } catch (error) {
        throw error;
    }
}

function calculateFormula() {
    const aInput = prompt("Введите значение параметра a:");
    const xInput = prompt("Введите значение переменной x:");
    
    if (aInput === null || xInput === null) return;
    
    const a = parseFloat(aInput);
    const x = parseFloat(xInput);
    
    if (isNaN(a) || isNaN(x)) {
        alert("Ошибка: введены некорректные числовые значения");
        return;
    }
    
    try {
        const result = calculateY(a, x);
        const outputDiv = document.getElementById('formulaOutput');
        outputDiv.innerHTML = `
            <h3>Результаты расчета:</h3>
            <p><strong>Введенные значения:</strong> a = ${a}, x = ${x}</p>
            <p><strong>Результат вычисления Y:</strong> ${result.toFixed(4)}</p>
            <p><strong>Использованная формула:</strong></p>
            <p>Y = ${x >= 2 ? `a/(x³-25) + √(a+x)` : 
                             (x >= 0 ? `2√a - x/4` : `0.3x`)}</p>
        `;
    } catch (error) {
        alert(error);
    }
}