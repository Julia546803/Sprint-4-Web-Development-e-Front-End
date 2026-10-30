## JOVI V70 - Sprint 3 Web Development

## Sobre o projeto
O JOVI V70 é um protótipo de interface de smartphone desenvolvido para o projeto de Web Development, nas sprints anteriores o protótipo foi desenvolvido utilizando HTML, CSS e JavaScript. Na Sprint 3, o projeto foi migrado para React com Next.js, utilizando componentes funcionais, imports, props, estados e outras funcionalidades do React. A aplicação possui uma tela de login, interface inicial de um smartphone e um sistema de câmera simulado com captura de fotos, digitalização de documentos, filtros e galeria.

---

## Objetivo da Sprint 3
O objetivo desta Sprint foi realizar a migração do protótipo desenvolvido anteriormente para React, mantendo suas principais características e funcionalidades.

Durante o desenvolvimento foram utilizados conceitos como:

- React;
- Next.js;
- Componentes funcionais;
- JSX;
- Props;
- Comunicação de componentes pai para filho;
- `useState`;
- `useEffect`;
- Eventos;
- Renderização condicional;
- `map()`;
- `find()`;
- `filter()`;
- `localStorage`;
- `Math.random()`;
- `Math.floor()`.

---

## O projeto possui atualmente:

- Tela de login com validação;
- Cinco usuários autorizados;
- Interface de smartphone;
- Tela inicial com aplicativos;
- Renderização dos aplicativos utilizando `map()`;
- Sistema de câmera simulado;
- Modo Foto;
- Modo Digitalização;
- Moldura de identificação no modo Digitalização;
- Filtro de imagem;
- Captura de fotos;
- Mini galeria com a última foto registrada;
- Galeria de fotos;
- Exclusão individual de fotos;
- Armazenamento das fotos utilizando `localStorage`;
- Persistência da galeria após atualizar a página;
- Identificação das fotos por IDs gerados com `Math.random()` e `Math.floor()`;
- Navegação entre a Home e a Câmera.

---

## Tecnologias utilizadas
- React;
- Next.js;
- JavaScript;
- JSX;
- CSS;
- HTML;
- Node.js;
- npm;
- localStorage;
- Git;
- GitHub;
- Vercel;

---

## Estrutura de componentes
O projeto foi dividido em componentes para facilitar a organização, reutilização e manutenção do código.

```text
app/
├── components/
│   ├── camera/
│   │   ├── CameraControls.js
│   │   ├── CameraPreview.js
│   │   ├── CameraScreen.js
│   │   └── GalleryPanel.js
│   │
│   ├── home/
│   │   ├── AppIcon.js
│   │   └── HomeScreen.js
│   │
│   ├── login/
│   │   └── LoginScreen.js
│   │
│   └── StatusBar.js
│
├── globals.css
├── layout.js
└── page.js
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
Após instalar as dependências, execute:

```bash
npm run dev
```

Depois, abra no navegador:

http://localhost:3000

O projeto será executado em ambiente de desenvolvimento pelo Next.js.

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
A aplicação foi dividida em componentes funcionais para facilitar a organização e a reutilização do código, a comunicação entre componentes pai e filho é realizada através de props.

Por exemplo, o componente `CameraScreen` envia informações e funções para componentes filhos como:

- `CameraPreview`;
- `CameraControls`;
- `GalleryPanel`.

O componente `HomeScreen` também envia informações para o componente `AppIcon`, permitindo a criação dos aplicativos da tela inicial através do `map()`.

Os estados da aplicação são controlados utilizando `useState`, enquanto o `useEffect` é utilizado para atualizar o `localStorage` quando ocorrem alterações na galeria.

---

## Utilização de Inteligência Artificial
A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento da Sprint 3, principalmente na migração do projeto anteriormente desenvolvido em HTML, CSS e JavaScript para React e Next.js.

A IA também auxiliou na organização final da estrutura de componentes, na explicação de conceitos utilizados durante a transição do projeto para React, na identificação e correção de erros e na revisão de trechos do código.

As sugestões fornecidas pela IA foram analisadas, testadas e adaptadas pela equipe de acordo com as necessidades do projeto.

---

## Repositório GitHub
O código-fonte do projeto está versionado utilizando Git e GitHub.

Link do repositório: https://github.com/Julia546803/Sprint-3---Web-Development.git

---

## Deploy na Vercel
O projeto será publicado utilizando a Vercel.

Link do deploy: https://sprint-3-web-development.vercel.app

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
