import style from './Post.module.css'
export default function Post(prop) {
  return (
    <section className={style.post}>
      <div className={style.post_block}>
        <div className={style.post_photo}>
          <img
            src="https://image.shutterstock.com/image-vector/businessman-avatar-profile-picture-260nw-221565274.jpg"
            alt=""
          />
        </div>
        <div className="post_text">{prop.text}</div>
      </div>
    </section>
  );
}
