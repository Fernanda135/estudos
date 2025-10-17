window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('ilogin');
    const senhaInput = document.getElementById('isenha');

    // Preenche o campo de email com valor salvo (se existir)
    const emailSalvo = localStorage.getItem('email');
    if (emailSalvo) {
        emailInput.value = emailSalvo;
    }

    // Evento de envio do formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita envio real

        const email = emailInput.value;
        const senha = senhaInput.value;

        // Armazena no Local Storage
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha); // ⚠️ Apenas para testes!

        alert('Login simulado! Dados salvos no Local Storage.');
    });
});
