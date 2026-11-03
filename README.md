## JOVI V70 - Sprint 4 Web Development e Front-End

## Sobre o projeto
O JOVI V70 é um protótipo de interface de smartphone desenvolvido para as disciplinas de Web Development e Front-End Design.
Nas primeiras etapas, o projeto foi desenvolvido utilizando HTML, CSS e JavaScript. Na Sprint 3, a aplicação foi migrada para React com Next.js, utilizando componentes funcionais, props, estados e outras funcionalidades do React.
Na Sprint 4, o projeto recebeu novas funcionalidades, como autenticação com Context API, proteção de rotas, navegação entre páginas e integração com uma API externa para consulta de contatos.
Além disso, a estilização da aplicação foi refatorada utilizando Tailwind CSS 4.3, substituindo o CSS tradicional por classes utilitárias.

---

## Objetivo da Sprint 4
O objetivo desta Sprint foi dar continuidade ao projeto desenvolvido anteriormente, implementando novas funcionalidades com React e Next.js e realizando a refatoração visual com Tailwind CSS.

Durante o desenvolvimento foram utilizados conceitos como:

- React;
- Next.js;
- Componentes funcionais;
- JSX;
- Props;
- `useState`;
- `useEffect`;
- `useContext`;
- `createContext`;
- `useCallback`;
- Eventos;
- Renderização condicional;
- `map()`;
- `find()`;
- `filter()`;
- `localStorage`;
- `Math.random()`;
- `Math.floor()`;
- Rotas com Next.js App Router;
- Rotas privadas;
- Consumo de API com Axios;
- Tailwind CSS 4.3;
- Classes utilitárias;
- Responsividade com Tailwind CSS para mobile, tablet e desktop;
- useRouter();
- useParams().

---

## Funcionalidades do projeto
**Autenticação e navegação**
- Tela de login com validação;
- Cinco usuários autorizados;
- Gerenciamento da autenticação utilizando Context API;
- Proteção das rotas do smartphone;
- Redirecionamento para o login quando não existe uma sessão autorizada;
- Botão para sair da aplicação;
- Navegação entre as páginas utilizando useRouter().

**Interface do smartphone**
- Simulação visual do JOVI V70;
- Tela inicial com aplicativos;
- Renderização dos aplicativos utilizando map();
- Componentização dos elementos da interface;
- Navegação para a câmera e para os contatos.

**Sistema de câmera**
- Câmera simulada;
- Modo Foto;
- Modo Digitalização;
- Moldura de identificação de documentos;
- Aplicação e remoção de filtro;
- Captura simulada de imagens;
- Mini galeria com a última foto registrada;
- Galeria de fotos;
- Exclusão individual de fotos;
- Armazenamento das fotos utilizando localStorage;
- Persistência da galeria após atualizar a página;
- Identificação das fotos com IDs gerados por Math.random() e Math.floor().

**Sistema de contatos**
- Consumo de API externa utilizando Axios;
- Listagem de contatos;
- Busca de contatos pelo nome;
- Filtragem utilizando filter();
- Navegação para detalhes individuais;
- Exibição de nome, usuário, e-mail, telefone, site, endereço e empresa;
- Mensagem durante o carregamento;
- Tratamento de erros;
- Botão para tentar carregar novamente os contatos.

**Estilização com Tailwind CSS**
- Migração do CSS tradicional para Tailwind CSS 4.3;
- Utilização de classes utilitárias;
- Criação de variáveis com @theme;
- Padronização de cores;
- Padronização de espaçamentos;
- Padronização de bordas arredondadas;
- Estilização dos componentes da câmera, login, home e contatos.

---

## Tecnologias utilizadas
- React;
- Next.js;
- Tailwind CSS 4.3;
- Axios;
- JavaScript;
- Context API;
- JSX;
- HTML;
- Node.js;
- npm;
- localStorage;
- Git;
- GitHub;
- Vercel;

---

## Estrutura do projeto
O projeto foi dividido em páginas, componentes, contextos e serviços para facilitar a organização e a manutenção do código.

```text
app/
├── celular/
│   ├── camera/
│   │   └── page.js
│   ├── contatos/
│   │   ├── [id]/
│   │   │   └── page.js
│   │   └── page.js
│   └── page.js
│
├── components/
│   ├── camera/
│   │   ├── CameraControls.js
│   │   ├── CameraPreview.js
│   │   ├── CameraScreen.js
│   │   └── GalleryPanel.js
│   ├── contacts/
│   │   ├── ContactCard.js
│   │   ├── ContactDetails.js
│   │   ├── ContactList.js
│   │   └── ContactSearch.js
│   ├── home/
│   │   ├── AppIcon.js
│   │   └── HomeScreen.js
│   ├── landing/
│   │   └── LandingPage.js
│   ├── login/
│   │   └── LoginScreen.js
│   └── StatusBar.js
│
├── contexts/
│   ├── AuthContext.js
│   └── ContactsContext.js
│
├── login/
│   └── page.js
│
├── services/
│   └── contactsApi.js
│
├── layout.js
└── page.js

styles/
├── input.css
└── output.css
```

---

## Instalação das dependências
Para executar o projeto é necessário possuir o Node.js instalado.

Após baixar ou clonar o repositório, abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Esse comando instalará as dependências necessárias presentes no arquivo package.json.

---

## Como executar o projeto
O projeto utiliza Next.js e Tailwind CSS 4.3.

Durante o desenvolvimento, é necessário utilizar dois terminais separados, ambos abertos na pasta do projeto.

Terminal 1 — Next.js
Após instalar as dependências, execute:

```bash
npm run dev
```
Esse comando inicia a aplicação em ambiente de desenvolvimento.

Terminal 2 — Tailwind CSS

Execute:

```bash
npm run build:css
```
Esse comando utiliza o Tailwind CSS com --watch, permitindo que o arquivo output.css seja atualizado automaticamente quando houver alterações nos componentes.

Os dois terminais devem permanecer executando durante o desenvolvimento.

Depois, abra no navegador:

http://localhost:3000

---

## Usuários e senhas para teste
A aplicação possui cinco usuários autorizados:

| Usuário | Senha |

| Guilherme | 570835 | 
| Julia | 569203 | 
| Matheus | 571719 | 
| Pedro | 572549 | 
| Tester | 123456 |

Obs: Os nomes de usuário devem ser digitados respeitando letras maiúsculas e minúsculas.

---

## Autenticação com Context API
Na Sprint 4, foi implementado o AuthContext, responsável por gerenciar o estado de autenticação da aplicação.
O contexto disponibiliza informações e funções como:

- usuarioLogado;
- carregando;
- fazerLogin;
- fazerLogout.

As páginas privadas verificam se existe um usuário autenticado antes de permitir o acesso.
Quando não existe uma sessão autorizada, o usuário é redirecionado para a página de login.

---

## Consumo de API e contatos
O sistema de contatos utiliza Axios para realizar requisições à API JSONPlaceholder.

API utilizada:

https://jsonplaceholder.typicode.com/users

O arquivo contactsApi.js configura a comunicação com a API.

O ContactsContext é responsável por disponibilizar os contatos, controlar o carregamento e tratar possíveis erros.

Na interface, os contatos são exibidos por meio do componente ContactList, que utiliza map() para renderizar os componentes ContactCard.

A busca utiliza filter() para encontrar contatos de acordo com o nome digitado.

Ao selecionar um contato, o usuário é direcionado para a rota dinâmica:

/celular/contatos/[id]

Nessa página são exibidas as informações detalhadas do contato selecionado.

---

## Armazenamento com localStorage
O projeto utiliza o `localStorage` do navegador para armazenar as informações das fotos registradas na galeria.

Quando uma nova foto é capturada, ela é adicionada à galeria e os dados são armazenados localmente no navegador.

Dessa forma, mesmo após atualizar a página, as fotos registradas continuam disponíveis.

Quando uma foto é excluída da galeria, os dados armazenados também são atualizados.

---

## Utilização de Math
O projeto utiliza `Math.random()` e `Math.floor()` para gerar um identificador numérico para cada nova foto registrada.

Exemplo:

```javascript
const idFoto = Math.floor(
  Math.random() * 100000
);
```
Esse identificador permite que cada foto possua um ID próprio e auxilia na identificação dos elementos renderizados na galeria.

---

## Componentização e comunicação entre componentes
A aplicação utiliza componentes funcionais para facilitar a organização e a reutilização do código. A comunicação entre componentes pai e filho é realizada por meio de props.

Por exemplo, o componente `CameraScreen` envia informações e funções para componentes filhos como:

- `CameraPreview`;
- `CameraControls`;
- `GalleryPanel`.

O componente `HomeScreen` também envia informações para o componente `AppIcon`, permitindo a criação dos aplicativos da tela inicial através do `map()`.

Na Sprint 4, também foram utilizados contextos para compartilhar informações entre diferentes componentes sem a necessidade de passar todas as propriedades manualmente.

---

## Hooks utilizados no projeto
Durante o desenvolvimento da Sprint 4, foram utilizados hooks do React e do Next.js para controlar estados, executar funcionalidades e realizar a navegação entre páginas.

- **useState:** utilizado para controlar informações que podem mudar durante a execução, como o modo da câmera, a galeria de fotos, os campos do login e a busca de contatos.
- **useEffect:** utilizado para executar ações relacionadas ao carregamento da aplicação, à autenticação, ao consumo de dados e ao armazenamento de informações no `localStorage`.
- **useContext:** utilizado para acessar informações compartilhadas por meio da Context API.
- **useCallback:** utilizado no contexto de contatos para manter a referência da função responsável por buscar os dados da API.
- **useRouter:** utilizado para navegar entre as páginas e redirecionar usuários.
- **useParams:** utilizado para identificar o ID presente na rota dinâmica dos detalhes de um contato.

Também foram criados os hooks personalizados `useAuth()` e `useContacts()`, responsáveis por facilitar o acesso às informações dos contextos de autenticação e contatos.
Esses recursos contribuíram para a organização do código, a reutilização de funcionalidades e a comunicação entre os componentes.

---

## Estilização com Tailwind CSS 4.3
Na Sprint 4, a estilização foi refatorada para Tailwind CSS 4.3, substituindo o CSS tradicional por classes utilitárias.

O arquivo styles/input.css contém a importação do Tailwind e as variáveis do @theme utilizados na aplicação.

Exemplo:
```
@import "tailwindcss";
@source "../app";

@theme {
  --spacing-space-md: 16px;
  --color-primary: #2563eb;
  --color-background: #090d17;
  --color-surface: #121b2d;
  --radius-card: 24px;
}
```

Essas variáveis permitem reutilizar cores, espaçamentos e bordas nos componentes.

Exemplo de utilização:
```
<section className="rounded-card bg-surface p-space-md">
  <h2 className="text-white">Contatos</h2>
</section>
```
O arquivo styles/output.css é gerado pelo Tailwind e importado no app/layout.js.

--- 

## Responsividade
A interface do JOVI V70 foi desenvolvida utilizando Tailwind CSS 4.3, com foco na adaptação para diferentes dispositivos, como mobile, tablet e desktop.

O projeto mantém a aparência de um smartphone, com dimensões de referência de 390 × 820 pixels, utilizando classes utilitárias como `flex`, `grid`, `max-w-full` e `overflow-y-auto` para organizar os elementos e ajustar a interface ao espaço disponível.

Dessa forma, a aplicação busca proporcionar uma experiência visual consistente em diferentes tamanhos de tela, preservando a estrutura e as funcionalidades do smartphone simulado.

## Utilização de Inteligência Artificial
A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento da Sprint 4.
A IA auxiliou na implementação e revisão de componentes React, na compreensão da Context API, na organização das rotas, na identificação e correção de erros e na migração dos estilos para Tailwind CSS 4.3.

As sugestões fornecidas pela IA foram analisadas, testadas e adaptadas pela equipe de acordo com os requisitos e necessidades do projeto e os conteúdos apresentados em aula.

---

## Repositório GitHub
O código-fonte do projeto está versionado utilizando Git e GitHub.

Link do repositório: https://github.com/Julia546803/Sprint-4-Web-Development-e-Front-End

---

## Deploy na Vercel
O projeto será publicado utilizando a Vercel.

Link do deploy: 

---

## Integrantes
As informações dos integrantes da equipe, contendo nome completo e RM, estão disponíveis no arquivo:

INTEGRANTES.TXT

---

## Equipe Desenvolvedora:
Guilherme Alvejan
Julia Lima
Matheus Sá
Pedro Antônio