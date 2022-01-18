import style from'./Header.module.css';
export default function Header() {
  return (
    <header className={style.head}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt="images"
      />
    </header>
  );
}
