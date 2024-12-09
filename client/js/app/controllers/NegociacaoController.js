class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //utiliza-se o bind para juntar o document com o querySelector usando o $ do Jquery
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    // Botão de exclusão (ok)
    // Quantidade maxima é 500 (ok)
    // A partir de Quantidade 200 o Valor maximo é 150 (ok)
    // Valor ou Quantidade não podem serem negativos (ok)
    // Caso Valor seja de até 2,50 a Quantidade minima deve ser 100 e a maxima 750 (ok)

    // Data maxima deve ser até 90 dias

    // contaDias() {
        
    // }

    adiciona(event) {
        event.preventDefault();

        const quantidade = parseFloat(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        const dataHoje = new Date();
        const dataInfo = new Date(this._inputData.value);
        const diferenca = dataInfo - dataHoje;
        const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
        let dataMin = 0;
        let dataMax = 90;


        if (dias < dataMin) {
            this._mensagem.texto = 'Data inválida, não pode ser retroativa';
            this._mensagemView.update(this._mensagem);
            console.log(this._mensagem);
            return;
        }

        if (dias > dataMax) {
            this._mensagem.texto = 'Data inválida, não pode ser superior a 90 dias';
            this._mensagemView.update(this._mensagem);
            console.log(this._mensagem);
            return;
        }

        if (quantidade < 1 || valor < 1) {
            this._mensagem.texto = 'Quantidade e valor não podem ser menores que 1';
            this._mensagemView.update(this._mensagem);
            console.log(this._mensagem);
            return;
        }

        if (valor > 2.50 && (quantidade > 500)) {
            this._mensagem.texto = 'Quantidade máxima é 500';
            this._mensagemView.update(this._mensagem);
            console.log(this._mensagem);
            return;
        }

        if (quantidade >= 200 && valor > 150) {
            this._mensagem.texto = 'A partir de 200, o valor máximo é 150';
            this._mensagemView.update(this._mensagem);
            console.log(this._mensagem);
            return;
        }

        if (valor <= 2.50 && (quantidade < 100 || quantidade > 750)) {
            this._mensagem.texto = 'Para valor até 2,50, a quantidade mínima é 100 e a máxima é 750';
            this._mensagemView.update(this._mensagem);
            console.log(this._mensagem);
            return;
        }

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();

        // // this._listaNegociacoes.negociacoes.push(this._criaNegociacao()); linha de codigo feita apenas para teste, para mostrar que era possível alimentar a lista de forma alternativa ao método adiciona
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {

        // this._inputData.value = new Date;
        this._inputData.value = '2024-12-03';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 1;

        this._inputValor.focus();
    }

    removeRow(index) {

        // Remove a negociação da lista
        this._listaNegociacoes.remove(index);

        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação removida com sucesso';
        this._mensagemView.update(this._mensagem);
    }
}
