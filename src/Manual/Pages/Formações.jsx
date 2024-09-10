import React from 'react'

const Formações = () => {
    return (
        <div className='text-start pt-2'>
            <h2>Formações e Habilidades</h2>

            <h3>Formações</h3>
            <p>Formações representam áreas de conhecimento ou especialização nas quais o personagem possui <em>Estudo</em>. Elas proporcionam bônus de dados adicionais nas ações relacionadas a essas áreas, ajudando o personagem a ter um desempenho superior. As formações estão divididas em três níveis de proficiência:</p>
            <ul>
                <li><strong>Iniciante</strong> - Concede um bônus de 1d4.</li>
                <li><strong>Especialista</strong> - Concede um bônus de 1d6.</li>
                <li><strong>Mestre</strong> - Concede um bônus de 1d8.</li>
            </ul>
            <p>Um personagem que atinge o nível de Mestre em uma formação recebe um bônus extra de 1d8 positivo ao seu d20 nas ações correspondentes. Além disso, aliados próximos a um Mestre recebem um bônus passivo de 1d4 em suas ações.</p>

            <h4>Exemplo:</h4>

            <p>Imagine um cenário onde um personagem é um <em>Médico Mestre</em> e possui um <em>Especialista</em> e um <em>Leigo</em> como assistentes em uma tarefa médica.</p>

            <p>Quando o <em>Leigo</em> ajuda na medicina, ele contribui com um bônus passivo de <em>1d4</em> devido à presença do Médico Mestre.</p>

            <p>Por outro lado, o <em>Especialista</em> que também está ajudando na tarefa médica recebe um bônus composto. Ele recebe o bônus passivo de <em>1d4</em> por estar próximo ao Médico Mestre, além do bônus adicional de <em>1d6</em> de sua especialização. Assim, o Especialista contribui com um bônus total de <em>1d4 + 1d6</em> para a tarefa.</p>


            <h3>Habilidades</h3>
            <p>Habilidades são ações específicas e únicas que um personagem pode realizar, oferecendo uma variedade de efeitos que podem ser estratégicos ou decisivos no jogo. Esse grupo inclui magias, truques e outras ações especiais que destacam o personagem de formas únicas, permitindo personalização e diversidade nas abordagens durante o jogo.</p>

        </div>

    )
}

export default Formações