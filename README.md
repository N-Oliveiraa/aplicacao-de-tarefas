# 📋 Aplicação de Tarefas com React

Aplicação de gerenciamento de tarefas (To-Do List) desenvolvida em **React**, utilizando **React Router**, **Context API**, **Hooks** e **localStorage** para persistência de dados.  
O projeto permite **adicionar, visualizar, editar e excluir tarefas**, com uma interface responsiva e moderna.

---

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte das atividades do programa 
**DevStart – Lab365**, com foco na prática de React, Context API e organização 
de projetos frontend.

---

## 🚀 Demonstração

Aplicação composta por duas páginas principais:

- **Home** – Lista de tarefas
- **Adicionar Tarefa** – Cadastro de nova tarefa

As tarefas permanecem salvas mesmo após recarregar a página, graças ao uso do **localStorage**.

---

## 🛠️ Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)

![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?logo=reactrouter&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

![CSS](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)

![LocalStorage](https://img.shields.io/badge/localStorage-Web_API-FF9800)

---

## 📂 Estrutura do Projeto

``` bash
📦 src/
│
├── 📁 components/             # Componentes reutilizáveis da aplicação 
│   └── 🧩 TaskItem.jsx        # Item individual da lista de tarefas 
│
├── 📁 context/                # Context API (estado global) 
│   └── 🌐 TaskContext.jsx     # Lógica de gerenciamento das tarefas 
│
├── 📁 pages/                  # Páginas da aplicação (rotas) 
│   ├── 🏠 Home.jsx            # Página inicial (lista de tarefas) 
│   └── ➕ AddTask.jsx         # Página para adicionar nova tarefa 
│
├── 📁 style/                  # Estilos globais 
│   └── 🎨 global.css          # CSS principal e responsivo 
│
├── ⚛️ App.jsx                 # Configuração das rotas 
├── 🚀 main.jsx                # Ponto de entrada da aplicação 
└── 🌐 index.html              # Template HTML

```

---

## 📌 Funcionalidades

- ✅ Adicionar tarefas
- 📋 Listar tarefas
- ✏️ Editar tarefas
- 🗑️ Excluir tarefas com confirmação do usuário  
  💬 Mensagem de confirmação antes da exclusão, evitando remoções acidentais  
- 💾 Persistência de dados com localStorage
- 🔀 Navegação entre páginas com React Router
- 📱 Layout totalmente responsivo

---

## 🧠 Conceitos Aplicados

### ✔ Context API
Gerenciamento global do estado das tarefas, evitando **prop drilling** e centralizando a lógica da aplicação.

### ✔ React Router
Criação de múltiplas páginas sem recarregar a aplicação:

- `/` → Página inicial (Home)
- `/add-task` → Página de cadastro de tarefas

### ✔ Hooks
- `useState` → Controle de estado
- `useEffect` → Sincronização com localStorage
- `useContext` → Consumo do contexto global

---

## 🔄 Fluxo da Aplicação

1. O usuário acessa a **Home**
2. Caso não haja tarefas, é exibida uma mensagem informativa
3. O usuário pode navegar para **Adicionar Tarefa**
4. A tarefa é salva no **Contexto**
5. O **useEffect** salva automaticamente no localStorage
6. A lista é atualizada em tempo real

---

## 🧩 Contexto Global (`TaskContext`)

Responsável por:

- Armazenar a lista de tarefas
- Adicionar novas tarefas
- Editar tarefas existentes
- Remover tarefas
- Persistir dados no localStorage

### Funções disponíveis no contexto:

- `addTask(task)`
- `removeTask(id)`
- `editTask(updatedTask)`

---

## 🖥️ Componentes Principais

### `TaskItem`
- Exibe cada tarefa individualmente
- Permite editar o título da tarefa
- Permite excluir a tarefa

### `Home`
- Lista todas as tarefas cadastradas
- Exibe estado vazio quando não há tarefas
- Navegação para adicionar novas tarefas

### `AddTask`
- Formulário para cadastro de nova tarefa
- Redirecionamento automático para Home após salvar

---

## 🎨 Estilização

- Layout moderno e clean
- Design responsivo para:
  - Celulares
  - Tablets
  - Notebooks
  - Monitores grandes
- Utilização de **Flexbox** e **Media Queries**
- Fonte **Poppins** para melhor legibilidade

---

## 📦 Persistência de Dados

As tarefas são armazenadas no **localStorage**, garantindo que os dados não sejam perdidos ao recarregar a página.

```js
localStorage.setItem('tasks', JSON.stringify(tasks));
```

## ▶️ Como Executar o Projeto

#### Clone o repositório:

``` bash
git clone <url-do-repositorio>

```

``` bash
npm install

```

``` bash
npm run dev

```

``` bash
http://localhost:5173

```

## 👨‍💻 Autor

**Nivaldo Oliveira**  
Acadêmico de TSI – Tecnólogo em Sistemas para Internet – UESPI

💪 Buscando evoluir a cada dia, um código de cada vez.
