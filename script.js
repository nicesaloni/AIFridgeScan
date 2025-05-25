// Tab switching
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        showTab(tabName);
    });
});

// "View Produce" links
document.getElementById('view-use-soon').addEventListener('click', (e) => {
    e.preventDefault();
    showTab('use-soon-produce');
});

document.getElementById('view-throw-away').addEventListener('click', (e) => {
    e.preventDefault();
    showTab('throw-away-produce');
});

document.getElementById('view-fresh-produce').addEventListener('click', (e) => {
    e.preventDefault();
    showTab('fresh-produce');
});

document.getElementById('view-check-produce').addEventListener('click', (e) => {
    e.preventDefault();
    showTab('check-produce');
});

// Back buttons for each produce view page
document.getElementById('back-from-use-soon').addEventListener('click', (e) => {
    e.preventDefault();
    showTab('produce-status');
});

document.getElementById('back-from-throw-away').addEventListener('click', (e) => {
    e.preventDefault();
    showTab('produce-status');
});

document.getElementById('back-from-fresh').addEventListener('click', (e) => {
    e.preventDefault();
    showTab('produce-status');
});

document.getElementById('back-from-check').addEventListener('click', (e) => {
    e.preventDefault();
    showTab('produce-status');
});

// Function to handle showing tabs and hiding others
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

    const tabToShow = document.getElementById(tabName);
    if (tabToShow) {
        tabToShow.classList.add('active');
    }

    // Re-activate tab button if it's a main tab (produce-status, recipes, settings)
    const mainTabs = ['produce-status', 'recipes', 'settings'];
    if (mainTabs.includes(tabName)) {
        const correspondingBtn = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
        if (correspondingBtn) {
            correspondingBtn.classList.add('active');
        }
    }
}
