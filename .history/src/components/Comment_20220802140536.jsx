import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/viviij.png" alt="Imagem de perfil" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Victor Donizete</strong>
              <time
                title="1 de agosto as 00:13h"
                dateTime="2022-05-11 00:13:46">Cerca de 1h atras
              </time>
            </div>

            <button title="deletar comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>Um comentario muito generico</p>
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