// script.js

// Function to handle button clicks for each feature
function activateFeature(feature) {
    switch (feature) {
        case 'cctv':
            alert('CCTV Monitoring Activated');
            // Here you can add code to display the live feed
            break;
        case 'alerts':
            alert('Real-time Alerts Activated');
            // Here you can add code to check alerts
            break;
        case 'access-control':
            alert('Access Control Activated');
            // Here you can add code to manage access
            break;
        case 'behavior-monitoring':
            alert('Behavior Monitoring Activated');
            // Here you can add code to view reports
            break;
        case 'emergency-response':
            alert('Emergency Response Activated');
            // Here you can add code to initiate response
            break;
        default:
            alert('Feature not recognized');
    }
}

// Attach event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button[onclick*="CCTV"]').addEventListener('click', function() {
        activateFeature('cctv');
    });
    document.querySelector('button[onclick*="Real-time Alerts"]').addEventListener('click', function() {
        activateFeature('alerts');
    });
    document.querySelector('button[onclick*="Access Control"]').addEventListener('click', function() {
        activateFeature('access-control');
    });
    document.querySelector('button[onclick*="Behavior Monitoring"]').addEventListener('click', function() {
        activateFeature('behavior-monitoring');
    });
    document.querySelector('button[onclick*="Emergency Response"]').addEventListener('click', function() {
        activateFeature('emergency-response');
    });
});