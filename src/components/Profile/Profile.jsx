import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://media.istockphoto.com/id/174621222/fr/photo/abstrait-couleur-fum%C3%A9e.jpg?s=170667a&w=0&k=20&c=D7_pXWdMovvXHKuGxVZscgs9i6LFX5bPo8x33E8rw8g=' />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>

}

export default Profile;
