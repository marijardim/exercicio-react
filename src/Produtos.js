import React from 'react'
import Titulo from './Titulo'
import Produto from './Produto'

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    { nome: 'Pizza', propriedades: ['Grande', 'Carne com bacon'] },
    { nome: 'Carne', propriedades: ['400g', 'Angus'] },
    { nome: 'Blusa', propriedades: ['Tam M', '90 reais'] },
    { nome: 'Calça', propriedades: ['Tam 36', '128reais'] },
  ];
  return (
    <section>
      <Titulo titulo='Produtos'/>
      {produtos.map((produto) =>(
        <Produto key={produto.nome} {...produto}/>
      ))}

    </section>
  )
}

export default Produtos
