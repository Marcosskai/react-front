import { ThumbsUp, Trash } from 'phosphor-react'
import womanIcon from '../../assets/woman.png'
import './Comment.css'
import { Avatar } from '../Avatar'

export function Comment(){
    return(
        <div className='comment'>
            <Avatar hasBorder={false} src={womanIcon}/>
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
                        <ThumbsUp size={20}/>
                    </button>
                    <span>20</span>
                </footer>
            </div>
        </div>
    )
}