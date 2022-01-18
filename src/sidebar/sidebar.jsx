import { NavLink } from 'react-router-dom';
import style from './sidebar.module.css'
export default function Sidebar() {
  return (
    <section className={style.sidebar}>
      <ul>
        <li><NavLink to="/Main">Profile</NavLink></li>
        <li> <NavLink to="/Message">Message</NavLink></li>
        <li>News</li>
        <li>Setting</li>
      </ul>
    </section>
  );
}
