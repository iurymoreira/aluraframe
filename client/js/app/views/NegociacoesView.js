class NegociacoesView extends View{

    // constructor(elemento) {
    //     super(elemento);
    // }

    //para remoção utilizei a propriedade removeRow, incluindo um índice para identificar qual linha remover
    //adicionei um index para a inclusão dos

    template(model) {

        return `
        <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>EXCLUIR</th>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map((n, index) => ` 
                            <tr>
                                
                                <td><button onclick="negociacaoController.removeRow(${index}, this)" class="btn-danger text-center align-items-center">excluir</button></td> 
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                            `
                        ).join('')}
                    </tbody>
                    
                    <tfoot>
                        <td colspan="4"></td>
                        <td>
                            ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                        </td>
                    </tfoot>
            </table>
            `;
    }
}
