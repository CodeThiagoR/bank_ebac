const form = document.getElementById('form-deposit');
const nomeBeneficiario = document.getElementById('benefits');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('account-number');
    const valorDeposito = document.getElementById('cvalue');
    const mensagemSucesso = `Montante de <strong>${valorDeposito.value}</strong> depositado para o cliente: <strong>${nomeBeneficiario.value}</strong> - conta: <strong>${numeroContaBeneficiario.value}</strong>`;

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value)

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        //nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }

});