import "./Post.css"
import Flame from '../../assets/Flame.png';


export function Post() {
    
    return (
        <article className="post">
            <header>
                <div className="author">
                    <img className="avatar" src={Flame} />
                    <div className="authorInfo">
                        <strong>Matheus Ferreira</strong>
                        <span>Editor - Adobe After Effects</span>
                    </div>
                </div>
                <time dateTime="2022/05/11 08:13:30">Publicado há 1h</time>
            </header>
            <div className="content">
                <p></p>
            </div>
        </article>
    )
}