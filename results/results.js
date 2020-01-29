const results = JSON.parse(localStorage.getItem('SELECTIONS'));

const selections = [];
const labels = [];

results.forEach(item => {
    selections.push(item.quantity);
    labels.push(item.id);
});
const ctx = document.getElementById('chart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Selections',
            data: selections,
            backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange', 'pink', 'red', 'black', 'grey', 'darkblue', 'darkgreen', 'coral', 'teal', 'plum', 'maroon']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
