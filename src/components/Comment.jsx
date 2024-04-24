import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
      onDeleteComment(content);
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/JoseMatheusNagata.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Nagata</strong>
                            <time title="11 de Maio as 08:13h " dateTime="22-05-11 08:13:30">Cerca de 1h atras</time>

                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}