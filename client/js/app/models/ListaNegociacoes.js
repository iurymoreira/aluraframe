class ListaNegociacoes {

    constructor() {

        this._negociacoes = []
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        return [].concat(this._negociacoes); //utilizando o [] com o método concat para retornar uma cópia da lista criada, para deixar a inclusão de itens na lista apenas pelo método adiciona
    }

    remove(index) { //adicionando o método remove utilizando o splice para a remoção da linha
        this._negociacoes.splice(index, 1); //vai remover(indice, quantidade a partir do indice)
    }
}