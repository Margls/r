import { NavLink } from 'react-router-dom';
import style from './message.module.css'
//массив имен
let name_users=[
  {id:1,name:"Michael"},{
  id:2,name:"Rojas"},
  {id:3,name:"Isaac"}];
//вывод имен 
let nameElement= name_users.map( (user)=><DialogName name={user.name} id={user.id}/>)
//массив сообщений
let messages=[
{id:1,text:"Я-русский, со мной Бог"},
{id:2,text:"Hola, amigo"},
{id:3,text:"..."}];
//вывыод сообщений
let mesElement= messages.map((mes)=><Chat text={mes.text}/>)

export  function DialogName(prop){
  return(
    <div className={style.dialog_name}><NavLink to={"/message/" + prop.id}>{prop.name}</NavLink>
    <div class={style.line}></div></div>
    
  );
}
export function Chat(prop){
    return(
      <div className={style.chat}>{prop.text}</div>
    )
}

export default function Post(prop) {
  return (
  <section className={style.Message}>
    <div className={style.dialog_users}>
      {nameElement}
    </div>
    <div className={style.chats}>
      {mesElement}
    </div>
  </section>
  );
}
