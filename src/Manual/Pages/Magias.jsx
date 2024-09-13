import React from 'react'

const Magias = () => {
    return (
        <div className='text-start pt-2'>
            <h2>Magias</h2>
            <p>Existem quatro classes de magias no sistema: <strong>Mundanas</strong>, <strong>Espirituais</strong>, <strong>Sagradas</strong> e <strong>de Sangue</strong>. Cada uma possui características e requisitos específicos para sua execução e aprendizado.</p>

            <strong>Molde</strong>
            <ul>
                <li><strong>Nome:</strong></li>
                <li><strong>Classes:</strong></li>
                <li><strong>Atributo:</strong></li>
                <li><strong>Descrição:</strong></li>
            </ul>

            <p>As classes de uma habilidade determinam quais formações devem impactar no uso dessas magias. Ao se tornar <strong>Mestre</strong> em alguma das classes em que a magia pertence, o custo de <em>Elevação</em> e/ou <em>Concentração</em> é diminuido ou zerado, dependendo da magia.</p>


            <h3>Magias Mundanas</h3>
            <p>As magias mundanas são executadas através de <strong>Inteligência</strong> ou <strong>Performance</strong>. Elas são magias específicas que quase qualquer pessoa pode aprender, desde que dedique tempo ao estudo e à prática. Incluem habilidades como alquimia, transmutação, telepatia e telecinese. Embora geralmente sejam de baixa potência, sua versatilidade e utilidade podem ser vastas se o conjurador souber utilizá-las de maneira criativa.</p>

            <h5>exemplo:</h5>

            <p className='mb-0'><strong>"Combusto"</strong></p>
            <ul>
                <li><strong>Classe:</strong> Mundana</li>
                <li><strong>Atributo:</strong> Performance</li>
                <li><strong>Descrição:</strong> Cria uma faísca em um ponto próximo desejado, podendo ativar uma ignição em objetos inflamáveis.</li>
            </ul>

            <h3>Magias Espirituais</h3>
            <p>As magias espirituais são executadas exclusivamente por meio da <strong>Intuição</strong>. Envolvem o contato com o mundo dos mortos, manipulações espirituais e habilidades investigativas além do plano físico. Essas magias são difíceis de aprender e requerem um talento natural, tornando-as inacessíveis para a maioria das pessoas comuns.</p>

            <h5>exemplo:</h5>

            <p className='mb-0'><strong>"Eus Critium"</strong></p>
            <ul>
                <li><strong>Classe:</strong> Espiritual</li>
                <li><strong>Atributo:</strong> Intuição</li>
                <li><strong>Elevação:</strong> 3</li>
                <li><strong>Descrição:</strong> Força uma entidade visível a revelar sua verdadeira natureza (Humana, Angelical ou Demoníaca), mantendo-a presa por um turno.</li>
            </ul>

            <h3>Magias Sagradas</h3>
            <p>As magias sagradas são realizadas apenas por meio da <strong>Fé</strong>. Elas incluem magias de ataque, desarme, proteção contra criaturas malignas, espirituais ou carnais. O aprendizado dessas magias exige um processo rigoroso de santificação e um profundo compromisso com a fé. Quanto maior a concentração e a devoção a Deus, maior é o acesso aos dons divinos que permitem realizar essas magias poderosas.</p>

            <h5>exemplo:</h5>

            <p><strong>"Lux Veritas"</strong></p>
            <ul>
                <li><strong>Classe:</strong> Sagrada</li>
                <li><strong>Atributo:</strong> Fé</li>
                <li><strong>Elevação:</strong> 1</li>
                <li><strong>Catalisador:</strong> Crucifixo sagrado</li>
                <li><strong>Descrição:</strong> Causa 1d4 de dano luminoso a um alvo etéreo.</li>
            </ul>

            <h3>Magias de Sangue</h3>
            <p>As magias de sangue são executadas exclusivamente pela <strong>Performance</strong> e são concedidas por entidades inatas e poderosas. Essas magias podem ser adaptadas para quase qualquer situação, mas sempre exigem um preço para manter o equilíbrio da natureza. Se o preço não for pago corretamente, o conjurador corre o risco de ser consumido pela própria magia. O acesso a essas magias é reservado para aqueles que possuem um dom natural para manipular o sangue e as forças da natureza.</p>

            <h5>exemplo:</h5>
            <p><strong>"Dolonotre"</strong></p>
            <ul>
                <li><strong>Classe:</strong> Sangue</li>
                <li><strong>Atributo:</strong> Performance</li>
                <li><strong>Elevação:</strong> 1</li>
                <li><strong>HP:</strong> 1</li>
                <li><strong>Descrição:</strong> O conjurador corta a própria palma e transforma o sangue em uma névoa negra, densa e ácida, causando 1d6 + 1 de dano ao alvo. Em um efeito crítico, causa um dano adicional de 1d6.</li>
            </ul>
        </div>

    )
}

export default Magias