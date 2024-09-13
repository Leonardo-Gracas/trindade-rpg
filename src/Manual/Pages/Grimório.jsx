import React from 'react'

const Grimório = () => {
    return (
        <div className='text-start mt-2 row'>
            <div className='col-md-6'>
                <h2>Grimório</h2>

                <p>Esta sessão irá listar todas as magias canônicas do universo Trindade, assim como seus requerimentos e rituais.</p>

                <h3>Mundanismo</h3>

                <h4>Conjurações:</h4>
                <div>
                    <p className='mb-0'><strong>"Inoccentia"</strong></p>
                    <ul>
                        <li><strong>Classe:</strong> Mundanismo, Manipulação</li>
                        <li><strong>Atributo:</strong> Performance</li>
                        <li><strong>Concentração:</strong> 3</li>
                        <li><strong>Descrição:</strong> Testa contra a Fé de um alvo. Em caso de sucesso, o alvo ficará impossibilitado de falar mentiras por um tempo limitado. É necessário manter contato visual com o alvo para que a magia funcione.</li>
                    </ul>
                </div>
                <div>
                    <p className='mb-0'><strong>"Impetro Cogitatia"</strong></p>
                    <ul>
                        <li><strong>Classe:</strong> Mundanismo, Manipulação</li>
                        <li><strong>Atributo:</strong> Performance</li>
                        <li><strong>Concentração:</strong> 3</li>
                        <li><strong>Descrição:</strong> Injeta uma ideia na mente do alvo, desafiando sua Fé. É necessário manter contato visual com o alvo para que a magia funcione.</li>
                    </ul>
                </div>
                <div>
                    <p className='mb-0'><strong>"Combusto"</strong></p>
                    <ul>
                        <li><strong>Classe:</strong> Mundana</li>
                        <li><strong>Atributo:</strong> Performance</li>
                        <li><strong>Descrição:</strong> Cria uma faísca em um ponto próximo desejado, podendo ativar uma ignição em objetos inflamáveis.</li>
                    </ul>
                </div>
                <div>
                    <p className='mb-0'><strong>"Lumnus"</strong></p>
                    <ul>
                        <li><strong>Classe:</strong> Mundana, Transmutação</li>
                        <li><strong>Atributo:</strong> Inteligência</li>
                        <li><strong>Descrição:</strong> Transforma areia fina em luz por tempo variado. Quanto mais transparente a areia, maior o brilho; quanto mais fina, maior a duração da luz.</li>
                    </ul>
                </div>
            </div>
            <div className='col-md-6'>
                <h3>Espiritualismo</h3>

                <h4>Conjurações:</h4>

                <div>
                    <p className='mb-0'><strong>"Eus Critium"</strong></p>
                    <ul>
                        <li><strong>Classe:</strong> Espiritual</li>
                        <li><strong>Atributo:</strong> Intuição</li>
                        <li><strong>Elevação:</strong> 3</li>
                        <li><strong>Descrição:</strong> Força uma entidade visível a revelar sua verdadeira natureza (Humana, Angelical ou Demoníaca), mantendo-a presa por um turno.</li>
                    </ul>
                </div>

                <h4>Rituais:</h4>

                <div>
                    <p className='mb-0'><strong>"Apartae"</strong></p>
                    <ul>
                        <li><strong>Classe:</strong> Espiritual</li>
                        <li><strong>Atributo:</strong> Intuição</li>
                        <li><strong>Materiais:</strong> 3 velas vermelhas, sal</li>
                        <li><strong>Descrição:</strong> Ritual para contatar uma alma perdida e ajudá-la a passar para o pós-vida. Identifique qual dos "Campos do Ser" (corpo, mente ou alma) está preso por um trauma, purifique-o e liberte a alma da ligação com o mundo terreno.</li>
                        <li><strong>Procedimento:</strong>
                            <ol>
                                <li>Desenhe três formas geométricas no chão com sal: um círculo para o corpo, um quadrado para a mente e um triângulo para a alma.</li>
                                <li>Coloque uma vela vermelha no centro de cada figura geométrica.</li>
                                <li>Acenda as velas e diga "Apartae" para separar temporariamente sua mente e alma do corpo, permitindo a visualização do mundo dos mortos.</li>
                                <li>Chame o nome da alma que deseja libertar e compreenda o trauma que a prende.</li>
                                <li>Para finalizar, aponte para a vela correspondente ao campo identificado e recite a frase adequada:
                                    <ul>
                                        <li><em>"Corpsun Apartae"</em> para purificar o corpo,</li>
                                        <li><em>"Mentum Apartae"</em> para purificar a mente,</li>
                                        <li><em>"Animum Apartae"</em> para purificar a alma.</li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Grimório