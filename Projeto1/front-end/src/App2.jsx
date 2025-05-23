import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// rafce

// Arrow Function
// const App2 = () => <h1>Olá, mundo!</h1>;

// Nomeação de componente
// PascalCase
// Nomeação de variável, função...
// camelCase

// export default, posso importar com qualquer nome e sem chaves
// export (sem default), só posso importar com chaves e com o nome exportado

// Self closing tag
{
  /* <header></header> */
}
{
  /* <header /> */
}

// Nomeação de classes .css
// Metodologia BEM
// BLOCKS
// ELEMENTS
// MODIFIERS
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// Nomes compostos são separados por -

// tag vazia em react se chama fragtment ou fragmento

// Componentes recebem "props"

{
  /* {items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )} */
}

//  {Array(items)
//           .fill()
//           .map((currentValue, index) => (
//             <SingleItem key={`${title}-${index}`} />
//           ))}

// Spread operator
// ...
