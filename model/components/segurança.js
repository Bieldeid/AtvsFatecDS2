// npm install sha1 --- API
function ocultarSenha(senha){
    var sha1 = required('sha1');
    console.log(senha);
    var hash = sha1(senha);
    console.log(hash);
    return hash;
}

module.exports = {ocultarSenha}