import React from 'react'

const Combate = () => {
    return (
        <div className='text-start pt-2'>
            <h2>Ações de Combate</h2>

            <h3>Atacar:</h3>
            <p>O ataque é resolvido através de uma disputa de atributos usando um d20. Um exemplo de ataque simples é uma espada, que desafia a destreza do atacante contra a reação do alvo. Se o atacante vencer a disputa, o dano da arma é aplicado, considerando qualquer resistência passiva do alvo que possa mitigar o golpe.</p>
            <p>O tipo de arma determina o atributo usado pelo atacante:</p>
            <ul>
                <li><strong>Lâminas:</strong> Destreza</li>
                <li><strong>Martelos:</strong> Força</li>
                <li>(Outras armas e atributos podem ser especificados conforme o jogo).</li>
            </ul>

            <h3>Respostas ao Ataque:</h3>
            <p>O alvo de um ataque pode escolher uma das duas respostas:</p>

            <h4>Esquiva:</h4>
            <ul>
                <li>Envolve uma disputa direta entre os resultados de d20 do atacante e do defensor.</li>
                <li>O atributo usado pelo atacante é comparado com a Mobilidade do defensor.</li>
                <li>Se o resultado final do atacante for igual ou maior que o do defensor, o ataque é bem-sucedido e o atacante rola o dano.</li>
                <li>Se o defensor tiver um resultado maior, o ataque falha e nenhum dano é aplicado.</li>
            </ul>

            <h4>Bloqueio:</h4>
            <ul>
                <li>Para bloquear, o defensor deve possuir um escudo.</li>
                <li>Essa opção ignora a disputa de atributos, focando na disputa de dano.</li>
                <li>O atacante rola o dano, e o defensor rola a redução do dano com o escudo.</li>
                <li>O escudo pode reduzir parte ou todo o dano do ataque.</li>
            </ul>

            <h3>Tipos de Armas e Atributos</h3>
            <p>Cada arma tem um tipo que determina o atributo usado para o ataque:</p>
            <ul>
                <li><strong>Lâmina</strong> - Destreza</li>
                <li><strong>Martelo</strong> - Força</li>
                <li><strong>Punhal</strong> - Furtividade</li>
                <li><strong>Projétil</strong> - Pontaria</li>
            </ul>

            <h4>Dano:</h4>
            <p>O dano de todas as armas é baseado nos atributos do personagem e em seu <em>Manuseio</em>. Armas como espadas fariam um cálculo entre <em>Manuseio</em> e <em>Destreza</em> para ter o dano final.</p>
            <p>O cálculo de dano é individual à arma, gerando um valor inteiro (Arredondado pra baixo). Este valor é aplicado em uma tabela, que retorna o dado utilizado para dano. O valor entre parênteses indica o dano máximo da arma em um golpe sem considerar ações especiais.</p>
            <ul>
                <li><strong>0-2:</strong> 1 (1)</li>
                <li><strong>3-6:</strong> 1d4 (4)</li>
                <li><strong>7-10:</strong> 1d6 (6)</li>
                <li><strong>11-14:</strong> 1d8 (8)</li>
                <li><strong>15-18:</strong> 1d10 (10)</li>
                <li><strong>19-22:</strong> 1d12 (12)</li>
                <li><strong>23-26:</strong> 1d12 + 1d4 (12)</li>
                <li><strong>27-32:</strong> 1d12 + 1d6 (12)</li>
                <li><strong>33-36:</strong> 1d12 + 1d8 (14)</li>
                <li><strong>37-40:</strong> 1d12 + 1d10 (14)</li>
                <li><strong>41 ou mais:</strong> 2d12 (16)</li>
            </ul>



            <h3>Ações Especiais</h3>
            <p>As armas também podem efetuar ações especiais ao custo de <em>Esforço</em> do jogador. Cada arma tem seu conjunto de ataques especiais definidos em sua descrição, junto com seu custo de esforço.</p>

            <h4>Exemplos Básicos de Ações Especiais:</h4>
            <ul>
                <li><strong>Ataque extra</strong> - Ataca mais uma vez.</li>
                <li><strong>Ataque forte</strong> - Rola o dano do ataque duas vezes.</li>
            </ul>
        </div>
    )
}

export default Combate