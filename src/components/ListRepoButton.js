import React from 'react';
import Button from './Button';

const ListRepoButton = ({handleRepos}) =>(

  <Button handleClick={handleRepos}>
    Lista de Repositorios
  </Button>

)

export default ListRepoButton;
