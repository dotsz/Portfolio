document.getElementById('feedbackBtn').addEventListener('click', function() {
    var popup = document.getElementById('feedbackPopup');
    popup.classList.toggle('visible');
});


// FormSpree 
document.getElementById('myFeedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var popup = document.getElementById('feedbackPopup');
    popup.classList.toggle('visible');
    var form = this;
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json'); // This header tells Formspree to send a JSON response

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status === 200) {
            form.reset();
            alert('Thanks for your feedback!'); // Success message
        } else {
            alert('Oops! There was a problem.'); // Error message
        }
    };
    xhr.send(data);
});