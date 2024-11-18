import { ThumbsUp, Trash } from 'phosphor-react'
import womanIcon from '../../assets/woman.png'
import './Comment.css'
export function Comment(){
    return(
        <div className='comment'>
            <img src={womanIcon}/>
            <div className='commentBox'>
                <div className='commentContent'>
                    <header>
                        <div className='authorAndTime'>
                            <strong>Maria Angélica</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022/05/11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}