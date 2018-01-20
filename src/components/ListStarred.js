import React from 'react'

import Button from './Button';

const ListStarred = ({handleStarred}) =>(

  <Button handleClick={handleStarred}>
    Lista de Favoritos
  </Button>

)
export default ListStarred;
