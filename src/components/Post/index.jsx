import "./Post.css"
import Flame from '../../assets/Flame.png';
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";


export function Post({ author, publishedAt}) {
    const publishedAtDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
        
    }).format(publishedAt);

    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={author.avatarUrl} />
                    <div className="authorInfo">
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13h" dateTime="2022/05/11 08:13:30">
                 {publishedAtDateFormatted}
                </time>

            </header>
            <div className="content">

            </div>

            <form className="commentForm">
                <strong>Deixe seu Feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className="commentList">
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}