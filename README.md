# Projeto Spotify

## Proposta:

O projeto spotify é um projeto criado por mim para colocar em prática meus conhecimentos de JavaScript (React) e CSS, ultilizando um banco de dados funcional com a intenção de criar algo semelhante ao spotify que conhecemos. Uma interface bonita e confortável com interações funcionais, e um streaming de musicas usando o banco de dados, também fiz uma integração de uma api de clima para ser exibida no site e incrementar um pouco, também criei uma api própria para gerenciar o banco de dados atualizando e enviando as informações para a página em tempo real.


## Como funciona:

1 - Abra um terminal e entre no diretório do Projeto1/back-end.
2 - Use o comando node --watch ./api/server.js para que assim o servidor seja atualizado em tempo real conforme o DB for alterado (certifique-se de colocar as credenciais de maneira correta e instalar o mongodb no /back-end)
3 - Abra outro terminal e entre no diretório Projeto1/front-end
4 - Use o comando npm run dev para abrir o servidor principal do site que aparecerá logo abaixo no terminal (installe o "vite")

(Existem dois servidores diferentes, o primeiro é o do banco de dados que serve pra manter o site sempre atualizado com o que for modificado no DB. A URL padrão dele é "http://localhost:3001/" mas pode ser alterado em "server.js" e "api.js". Já o segundo é o do proprio site.)
