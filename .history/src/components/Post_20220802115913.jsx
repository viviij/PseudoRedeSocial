import styles from "./Post.module.css"

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

      <div className={styles.content}>
        <p> In today`s post, we provide an update on the technical investigations we`ve undertaken in</p> <p> the last year and share our evolving vision for Hytale. Plus: a peek at the changing face </p>
        <p> of Orbis, powerful new tools, and more! ☀️ </p>
        <p>New blog post live <a href="https://hytale.com/news/2022/7/summer-2022-development-update">Summer 2022</a></p>

        <p><a href="#">#PatoDourado</a></p>{' '}
        <p><a href="#">#FeijaoComArroz</a></p>{' '}
        <p><a href="#">#SupremaciaTOF</a></p>{' '}
        <p><a href="#">#Hytale</a></p>
      </div>
    </article>
  )
}