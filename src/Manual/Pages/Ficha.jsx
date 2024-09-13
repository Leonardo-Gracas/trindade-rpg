import React from 'react'

const Ficha = () => {
    return (
        <div className='row text-start pt-2'>
            <div className='col-md-6'>
                <h2>Ficha de Personagem</h2>
                <p>A ficha de personagem possui três atributos principais que definem as capacidades gerais do personagem:</p>

                <h3>Atributos Principais</h3>
                <ul>
                    <li><strong>Atletismo</strong>: Define as capacidades físicas e motoras do personagem, como força, resistência e agilidade.</li>
                    <li><strong>Presença</strong>: Define a capacidade intelectual, social e espiritual do personagem, englobando inteligência, carisma e habilidades de percepção.</li>
                    <li><strong>Estudo</strong>: Representa as formações e habilidades adquiridas pelo personagem, como conhecimentos técnicos, mágicos ou especializados.</li>
                </ul>

                <p>Os valores desses atributos variam de 0 a 3, com as seguintes classificações:</p>
                <ul>
                    <li><strong>0:</strong> Fraco</li>
                    <li><strong>1:</strong> Regular</li>
                    <li><strong>2:</strong> Bom</li>
                    <li><strong>3:</strong> Excepcional</li>
                </ul>

                <h3>Outros Atributos Essenciais</h3>
                <ul>
                    <li><strong>Manuseio</strong>: Determina a proficiência do personagem com armas, sendo calculado pela soma de Destreza, Pontaria e Reflexo.</li>
                    <li><strong>HP (Pontos de Vida)</strong>: Define a resistência vital do personagem, calculada pela soma de Força e Resistência + 4.</li>
                    <li><strong>Esforço</strong>: Representa o recurso usado para ações físicas especiais, como ataques extras ou evasões, calculado pela soma de Furtividade e Mobilidade + 1.</li>
                    <li><strong>Concentração</strong>: Recurso referente a capacidade de foco e uso de magias mundanas ou conjurações complexas, definido pela soma de Inteligência e Performance.</li>
                    <li><strong>Elevação</strong>: Recurso referente a aptidão para realizar magias sagradas, profanas ou espirituais, calculada pela soma de Fé e Intuição.</li>
                </ul>

                <p>Os recursos sempre estarão cheios ao início de um confronto, a não ser que algum fator determine especificamente que não, como uma viagem longa limitaria o esforço dos jogadores por conta do cansaço.</p>


            </div>
            <div className='col-md-6'>
                <h3>Corpo</h3>
                <p>Os atributos desta área são determinados pelo valor de <strong>Atletismo</strong>. O total de pontos disponíveis para distribuição é calculado como <strong>Atletismo x 5</strong>. Ao distribuir pontos em um atributo, cada ponto aplicado também contribui com meio ponto para os atributos adjacentes na ficha final. É importante planejar a distribuição com cuidado, pois valores fracionados são arredondados para baixo, o que pode resultar na perda de pontos.</p>

                <h3>Atributos do Corpo</h3>
                <ul>
                    <li><strong>Força</strong>: Mede a capacidade do personagem para mover objetos pesados e manejar armas de grande porte.</li>
                    <li><strong>Resistência</strong>: Define a resistência física a golpes, efeitos adversos e reflete o condicionamento geral do personagem.</li>
                    <li><strong>Reflexo</strong>: Avalia a capacidade de reagir rapidamente a surpresas e detectar ameaças ocultas.</li>
                    <li><strong>Pontaria</strong>: Relacionada à precisão em arremessos e disparos de longo alcance.</li>
                    <li><strong>Destreza</strong>: Representa a habilidade em manusear objetos e armas com agilidade, incluindo técnicas de prestidigitação.</li>
                    <li><strong>Furtividade</strong>: Envolve habilidades de movimentação silenciosa, camuflagem e o uso de punhais em combate discreto.</li>
                    <li><strong>Mobilidade</strong>: Define a capacidade de movimento rápido e ágil, além de habilidades de esquiva em combate.</li>
                </ul>

                <h3>Interação</h3>
                <p>Os atributos desta área são determinados pelo valor de <strong>Presença</strong>. O total de pontos disponíveis para distribuição é calculado como <strong>Presença x 8</strong>. Esses atributos refletem as capacidades intelectuais, sociais e espirituais do personagem, influenciando desde a comunicação até o uso de magias e habilidades especiais.</p>

                <h3>Atributos de Interação</h3>
                <ul>
                    <li><strong>Persuasão</strong>: Habilidade de convencer, intimidar e influenciar outros personagens. Inclui a capacidade de mentir com eficácia e encorajar aliados.</li>
                    <li><strong>Inteligência</strong>: Relaciona-se ao uso de magias mundanas e ao raciocínio lógico. É fundamental para a aplicação de formações técnicas e análise de situações complexas.</li>
                    <li><strong>Investigação</strong>: Capacidade de observar e rastrear detalhes em um ambiente. Inclui a habilidade de procurar informações, objetos ocultos ou pessoas desaparecidas.</li>
                    <li><strong>Intuição</strong>: Essencial para o uso de magias espirituais e para responder a manifestações etéreas ou sobrenaturais. Reflete a sensibilidade e o discernimento do personagem em situações místicas.</li>
                    <li><strong>Fé</strong>: Mede a integridade espiritual do personagem e sua capacidade de realizar magias sagradas. Representa a conexão com forças divinas ou superiores.</li>
                    <li><strong>Performance</strong>: Envolve o uso de magias de sangue e habilidades de interpretação artística. Representa a expressão criativa do personagem através da arte e rituais complexos.</li>
                </ul>
            </div>
        </div>

    )
}

export default Ficha