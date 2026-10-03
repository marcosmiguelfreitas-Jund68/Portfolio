# Portfólio — Marcos Freitas

Site estático (HTML, CSS e um pouco de JavaScript), publicado pelo GitHub Pages.
Este repositório contém só a vitrine: textos e imagens aprovados. O código dos
projetos fica em repositórios privados.

## Arquivos
- `index.html` — página inicial
- `meeting.html` — estudo de caso do Meeting
- `style.css`, `script.js` — visual e comportamento (copiar e-mail, índice lateral)
- `img/` — imagens aprovadas para publicação
- `.nojekyll` — faz o GitHub Pages servir os arquivos como estão

## Incluir um novo projeto
1. Copiar `meeting.html` para `nome-do-projeto.html` e trocar os textos e imagens.
2. Em `index.html`, duplicar o bloco `<article class="project">` na seção Projetos.
3. Atualizar a linha "N estudos de caso" e a data na faixa de destaque.
4. Conferir que não há código, chaves, endereços de infraestrutura nem dados de clientes.
5. `git add .`, `git commit`, `git push` — o site atualiza em cerca de 1 minuto.
