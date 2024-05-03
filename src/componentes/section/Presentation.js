import styles from './Presentation.module.css'
import ButtonA from '../Elementos/ButtonA'
import ButtonB from '../Elementos/ButtonB'

function Presentation(){
    return(
        <div className={styles.presentation} id='Presentation'> 
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu vou Luiz Gustavo!</h1>
            <p>
                Sou apaixonado por programação.<br/>
                Como desenvolvedor Full-Stack, eu tenho o compromisso de desenvolver<br/>
                sites bem trabalhados, responsivos e interativos para os negócios.<br/>
                Meus projetos já mostraram muito das minhas habilidades, mas estou<br/>
                sempre em busca de novos desafios para me superar.
            </p>

            <ButtonA link='https://www.linkedin.com/in/luiz-gustavo-nates-caldato/' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation