const BUILD_TIME = '2025.8.7 18:31:51';

function updateBuildTime() {
    const elements = document.querySelectorAll('.build-time');
    elements.forEach(element => {
        element.textContent = BUILD_TIME;
    });
}

document.addEventListener('DOMContentLoaded', updateBuildTime);
document.addEventListener('pjax:reinitialize', updateBuildTime);