import Post from "../Post/Post.jsx";
// import Message from "../Message/Message.jsx";
import style from './Main.module.css'

export default function Main() {
  return (
    <main className={style.main}>
      <section className="profile">
        <div className={style.profile_bg}>
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            alt=""
          />
        </div>
        <div className={style.profile_user}>
          <div className="profile_avatar">img</div>
          <div className="profile_info">
            <div className="profile_name">NAME</div>
            <div className="profile_data">
              <ul>
                <li>Date</li>
                <li>City</li>
                <li>Education</li>
                <li>Web Site</li>
              </ul>
            </div>
          </div>
          {/* <Router>
            <Route path="../Message/Message.jsx" />
            <Message />
          </Router> */}
          <Post text="Post text" />
          <Post text="Another text" />
        </div>
      </section>
    </main>
  );
}
