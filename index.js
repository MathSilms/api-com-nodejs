
function obterUsuário(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: "aladin",
            dataNascimento: new Date(),
        })
    }, 1000);
}

function obterTelefone(id, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1100458485',
            ddd: 11,
        });
    }, 2000)
}

function obterEndereco(id, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "dos bobos",
            numero: 0,
        });
    }, 3000)
}

//----------------------------------------------------------------

function resolverUsuário(err, usuario) {
    console.log(usuario);
};



obterUsuário(function resolverUsuário(erro, usuario) {
    if (erro) {
        console.error("deu ruim Usuário", erro);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
        if (erro1) {
            console.error("deu ruim Telefone", erro1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error("deu ruim Endereço", erro1);
                return;
            }
            console.log(`
            Nome:${usuario.nome},
            Endereço:${endereco.rua}, ${endereco.numero},
            Telefone:(${telefone.ddd}) ${telefone.telefone}
        `)
        })


    })
});
// const Telefone = obterTelefone(usuario.id);
// console.log(Telefone);
// console.log(Endereco);