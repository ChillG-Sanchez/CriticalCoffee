import './style.css';

const alertMessage = document.getElementById('alertMessage') as HTMLDivElement;
const severityRange = document.getElementById('severityRange') as HTMLInputElement;

const alertClasses = ['alert-dark', 'alert-info', 'alert-primary', 'alert-warning', 'alert-danger'];

severityRange.addEventListener('input', function() {
    const severity = parseInt(severityRange.value);
    alertMessage.className = `alert ${alertClasses[severity]} text-center`;
});