import headerStyles from '../styles/Header.module.css'

export default function Header () {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to data with the lastest web dev news
      </p>
    </div>
  )
}
