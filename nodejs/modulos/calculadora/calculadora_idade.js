function idade(nome,anoNasc,anoAtual){
    idade= anoAtual-anoNasc;
    return `Olá, ${nome}. Em ${anoAtual} você terá ${idade} anos.`;
};
module.exports = {
    idade
};