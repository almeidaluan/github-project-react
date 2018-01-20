import React,{Component} from 'react'
import ListRepoButton from './ListRepoButton'
import ListStarred from './ListStarred'

const Actions = ({handleRepos,handleStarred})=>(

      <div className="actions">
        <ListRepoButton handleRepos={handleRepos}/>
        <ListStarred  handleStarred={handleStarred}/>
      </div>
)
export default Actions;
