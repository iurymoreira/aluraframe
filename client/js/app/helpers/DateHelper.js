class DateHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaInput(data) {
        const ano = data.getFullYear();
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const dia = data.getDate().toString().padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
    }

}
