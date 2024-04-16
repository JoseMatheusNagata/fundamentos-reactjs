import { Comment } from './Comment'
import style from './Post.module.css'
import { Avatar } from './Avatar.jsx'

export function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder={true} src="https://github.com/JoseMatheusNagata.png" />
                    <div className={style.authorInfo}>
                        <strong>José Matheus</strong>
                        <span>Web Dev</span>

                    </div>
                </div>

                <time title="11 de Maio as 08:13h " dateTime="22-05-11 08:13:30">Publicado há 1h</time>

            </header>

            <div className={style.content}>

                <p>Fala galeraa 👋 </p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

                <p><a href="" a>jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>

                </p>

            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>
            <div className={style.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>

            </div>

        </article>
    )
}