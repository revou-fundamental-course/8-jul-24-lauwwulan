function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convert cm to meters
    const age = document.getElementById('age').value;

    if (weight <= 0) {
        alert('Berat badan harus lebih dari nol.');
        return;
    }

    if (height <= 0) {
        alert('Tinggi badan harus lebih dari nol.');
        return;
    }

    if (age <= 0) {
        alert('Usia harus lebih dari nol.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);

    document.querySelector('.bmi-value').textContent = bmi;

    let result = '';
    let range_result = '';
    let essay_result = '';
    if (bmi < 18.5) {
        result = 'Berat Badan Kurang';
        range_result = 'Hasil BMI < 18.5';
        essay_result = 'Anda berada dalam kategori kekurangan berat badan.\nHubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result = 'Berat Badan Ideal';
        range_result = 'Hasil BMI diantara 18.5 dan 22.9';
        essay_result = "Anda berada dalam kategori berat badan yang normal.\nTetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";

    } else if (bmi >= 25 && bmi < 29.9) {
        result = 'Berat Badan Lebih';
        range_result = 'Hasil BMI diantara 25 dan 29.9';
        essay_result = "Anda berada dalam kategori overweight atau berat badan berlebih.\nCara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.\nJika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else {
        result = 'Obesitas';
        range_result = 'Hasil BMI > 29.9';
        essay_result = 'Anda berada dalam kategori obesitas.\nUsahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.\nSegera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.';
    }

    document.querySelector('#result-summary h3').textContent = result;
    document.querySelector('#result-summary p').textContent = `Anda memiliki ${result.toLowerCase()}`;
    document.querySelector('#essay-summary h3').textContent = range_result;
    essay_result = essay_result.replace(/\n/g, '<br>');
    document.querySelector('#essay-result').innerHTML = essay_result;
}

function resetForm() {
    document.getElementById('bmi-form').reset();
    document.querySelector('.bmi-value').textContent = '';
    document.querySelector('#result-summary h3').textContent = '';
    document.querySelector('#result-summary p').textContent = '';
}