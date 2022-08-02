import "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/viviij.png" alt="Foto do perfil" />
        </div>
        <div className={styles.authorInfo}>
          <strong>Victor Donizete</strong>
          <span>Web developer</span>
        </div>

        <time title="1 de agosto as 00:13h" dateTime="2022-05-11 00:13:46">Publicado a uma hora</time>
      </header>
    </article>
  )
}