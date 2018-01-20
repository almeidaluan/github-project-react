import React from 'react'
// gerencia todo o conteudo da aplicacao/
import Search from './Search'
import UserInfo from './UserInfo'
import Actions from './Actions'
import Repos from './Repos'

const AppContent = ({userinfo,repos,starred,handleSearch,handleRepos,handleStarred,isFetching}) =>(
  <div className="app">
    <Search handleSearch={handleSearch}/>
    {isFetching && <div>Carregando</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions handleRepos={handleRepos} handleStarred={handleStarred}/>}
    {!!repos.length &&
    <Repos
      className="repos"
      title="Repositorios"
      repos={repos}

    />}

    {!!starred.length &&
    <Repos className="repos" title="Favoritos"
      repos={starred}/>}

  </div>
)

export default AppContent;
