import React,{Component} from 'react'

const Button = ({children,handleClick}) =>(

  <button class="botoes" onClick={handleClick}>{children}</button>

)
export default Button;
