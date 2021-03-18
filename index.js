
const util = require('util');

const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuário() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: "aladin",
                dataNascimento: new Date(),
            })
        }, 1000);
    });
};



function obterTelefone(id) {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            return resolve({
                telefone: '1100458485',
                ddd: 11,
            });
        }, 2000)
    })
};

function obterEndereco(id, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "dos bobos",
            numero: 0,
        });
    }, 3000)
};

//----------------------------------------------------------------

main();
async function main() {
    try{
        console.time('medida-promise')
        const usuario = await obterUsuário();
        const telefone = await obterTelefone(usuario.id);
        const endereco = await  obterEnderecoAsync(usuario.id);

        console.log(`
            nome:${usuario.nome},
            Telefone:(${telefone.ddd}) ${telefone.telefone},
            Endereço: ${endereco.rua}, ${endereco.numero}
        `);
        console.timeEnd('medida-promise')
    }catch(err){
        console.error("Deu ruim", err)
    }
};








// const userPromise = obterUsuário()

// userPromise.then(user => {    return obterTelefone(user.id)
//         .then(telefone => {
//             return {
//                 usuario: {
//                     nome: user.nome,
//                     id: user.id
//                 },
//                 telefone: {
//                     numero: telefone.telefone,
//                     ddd: telefone.ddd
//                 }
//             }
//         })
// }).then(result =>{
//     const endereco = obterEnderecoAsync(result.usuario.id)
//     return endereco.then(endereco =>{
//         return {
//             usuario: result.usuario,
//             telefone: result.telefone,
//             endereco:endereco,
//         }
//     });
// })
// .then(resultado => {
//     console.log("resultado", resultado)
// })
//     .catch(err => {
//         console.error("deu ruim", err)
//     })
// // obterUsuário(function resolverUsuário(erro, usuario) {
// //     if (erro) {
// //         console.error("deu ruim Usuário", erro);
// //         return;
// //     }

// //     obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
// //         if (erro1) {
// //             console.error("deu ruim Telefone", erro1);
// //             return;
// //         }

// //         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
// //             if (error2) {
// //                 console.error("deu ruim Endereço", erro1);
// //                 return;
// //             }
// //             console.log(`
// //             Nome:${usuario.nome},
// //             Endereço:${endereco.rua}, ${endereco.numero},
// //             Telefone:(${telefone.ddd}) ${telefone.telefone}
// //         `)
// //         })


// //     })
// // });
// // const Telefone = obterTelefone(usuario.id);
// // console.log(Telefone);
// // console.log(Endereco);