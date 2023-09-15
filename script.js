function getDegree() {
    let degree = document.getElementById("degree").value;
    convertTemp(degree);
}

function convertTemp (value) {
    const dropdown = document.getElementById("dropdown");
    const measurement = dropdown.value;
    const result = document.getElementById("result");
    if(measurement === "celsius") {
        const num = ((value * 9/5) + 32).toFixed(3);
        result.innerHTML = num + "°F";
    }
    else {
        const num = ((value - 32) * 5/9).toFixed(3);
        result.innerHTML = num + "°C";
    }
}

const convertBtn = document.getElementById("convert");
convertBtn.addEventListener("click", getDegree);