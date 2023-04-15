// window.addEventListener('DOMContentLoaded', () => {
const loader = document.querySelector('.container-loader');
const allInputs = document.querySelectorAll('input');

const nameClient = document.getElementById('name-client');
const emailClient = document.getElementById('email-client');
const commentClient = document.getElementById('comment-client');
const buttonForm = document.querySelector('.btn-primary');

window.onload = () => {

    setTimeout(() => {
        loader.style.visibility = 'hidden';
        // document.body.style.overflowY = 'auto';
        loader.style.opacity = '0';
    }, 3000);

    console.log('loader finalizado.');

}
// })

// window.addEventListener('load', () => {

// })

allInputs.forEach((input) => {
    
    input.addEventListener('change', () => {
        input.classList.remove('is-invalid');
    })

})

buttonForm.addEventListener('click', (event) => {
    event.preventDefault();

    const name = nameClient.value;
    const email = emailClient.value;
    const comment = commentClient.value;
    const button = event.currentTarget;

    if (name === '') {

        nameClient.classList.add('is-invalid');

    }if (email === '') {

        emailClient.classList.add('is-invalid');

    }if (name !== '' && email !=='' && comment === '') {
        console.log('Su comentario está vacío');
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: 'Para contactar con nosotros debe detallar su solicitud en el campo <strong>Comentarios</strong>',
        })
    }if (name !== '' && email !=='' && comment!== '') {

        nameClient.classList.remove('is-invalid')
        emailClient.classList.remove('is-invalid')
        commentClient.classList.remove('is-invalid')

        button.textContent = 'Enviando...';
        button.classList.remove('btn-primary');
        button.classList.add('btn-warning');
        
        setTimeout(() => {

            button.textContent = 'Enviado';
            button.classList.remove('btn-warning');
            button.classList.add('btn-success');
            
            nameClient.value = '';
            emailClient.value = '';
            commentClient.value = '';
            
            button.textContent = 'Enviar datos';
            button.classList.remove('btn-success')
            button.classList.add('btn-primary');
            
            swal.fire({
                icon: 'success',
                title: `Hola <strong>${name}</strong>! <i class="fa-regular fa-face-smile" style="color: #e1e100;"></i>`,
                html: ` Nos estaremos comunicando contigo al correo: <br /><strong>${email}</strong>.<br /><br />
                        Tu comentario es:<br /> <div class="container">${comment}</div>`,
            })

        }, 2000);

    }

})