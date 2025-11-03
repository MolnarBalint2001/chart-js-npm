


document.addEventListener('DOMContentLoaded', function() {
    
    if (typeof Chart === 'undefined') {
        console.error("Hiba: A Chart.js könyvtár nem töltődött be.");
        return;
    }

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Éves teljesítmény',
                data: [45, 60, 30, 75],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});