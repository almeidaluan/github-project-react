import React,{Component} from 'react'


const UserInfo = ({userinfo})=>(

      <div className="user-info">
        <img  src={userinfo.avatar_url}/>
        <h1 className="username">
          <a href={`https://github.com/${userinfo.login}`}>{userinfo.name}</a>
         </h1>
        <ul className="repos-info">
          <li>Seguidores: {userinfo.followers}</li>
          <li>Seguindo:{userinfo.following}</li>
        </ul>
      </div>
    )
export default UserInfo;
