require('./bootstrap');
import 'bootstrap';

const confirmationOverlay = document.getElementById('confirmation-overlay');
if (confirmationOverlay) {
    const confirmationForm = confirmationOverlay.querySelector('form');


    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function() {
            // mostrare l'overlay di conferma
            confirmationOverlay.classList.remove('d-none');
            confirmationForm.action = confirmationForm.dataset.base + '/' + this.dataset.id;
        });
    });


    document.getElementById('btn-no').addEventListener('click', function() {
        confirmationForm.action = '';
        confirmationOverlay.classList.add('d-none');
    })
}
