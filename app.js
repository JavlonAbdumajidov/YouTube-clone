document.getElementById('goToPage2').addEventListener('click', function() {
    showLoader();
    setTimeout(function() {
        document.getElementById('page1').classList.add('hidden');
        document.getElementById('page2').classList.remove('hidden');
        hideLoader();
    }, 2000); // Simulating a delay
});

document.getElementById('goToPage1').addEventListener('click', function() {
    showLoader();
    setTimeout(function() {
        document.getElementById('page2').classList.add('hidden');
        document.getElementById('page1').classList.remove('hidden');
        hideLoader();
    }, 2000); // Simulating a delay
});

function showLoader() {
    document.getElementById('loader').classList.remove('hidden');
}

function hideLoader() {
    document.getElementById('loader').classList.add('hidden');
}
