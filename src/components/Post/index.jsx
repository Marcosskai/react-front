import "./Post.css"
import Flame from '../../assets/Flame.png';
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";


export function Post() {
    
    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar hasBorder={false} src={Flame} />
                    <div className="authorInfo">
                        <strong>Matheus Ferreira</strong>
                        <span>Editor - Adobe After Effects</span>
                    </div>
                </div>
                <time title="11 de Maio às 08:13h" dateTime="2022/05/11 08:13:30">Publicado há 1h</time>
            </header>
            <div className="content">
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>
                    <a href="">#nlw </a>
                   <a href="">#rocketseat</a>
                </p>
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