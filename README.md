# 🏨 Mega Reservations API

API RESTful para gerenciamento de reservas e acomodações (hotéis, apartamentos e pousadas).

---

## 🚀 Sobre o projeto

O **Mega Reservations** é um projeto fullstack desenvolvido para praticar conceitos de desenvolvimento fullstack, com foco em:

- Arquitetura de APIs REST
- CRUD completo
- Organização em camadas (routes, controllers, models)
- Integração com banco de dados NoSQL
- Autenticação com JWT
- Cookies HTTP Only

---

## 🛠️ Tecnologias utilizadas

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- JWT  
- Cookie Parser  
- Bcrypt  

---

## 📁 Estrutura do projeto

```txt
src/
  controllers/
  middlewares/
  models/
  routes/
  config/
```

---

## 📌 Funcionalidades

### 🏠 Properties (Acomodações)

- Criar uma acomodação  
- Listar todas as acomodações  
- Buscar acomodação por ID  
- Editar uma acomodação  
- Deletar uma acomodação  

### 👤 Users (Usuários)

- Criar conta  
- Fazer login  
- Fazer logout  
- Buscar usuário autenticado  
- Autenticação com JWT  
- Cookies HTTP Only  

---

## 🔗 Endpoints

# 🏠 Properties

### ➕ Criar propriedade
```http
POST /properties
```

### 📄 Listar propriedades
```http
GET /properties
```

### 🔍 Buscar por ID
```http
GET /properties/:id
```

### 🔄 Editar uma propriedade
```http
PUT /properties/:id
```

### 🗑️ Deletar uma propriedade
```http
DELETE /properties/:id
```

---

# 👤 Users

### ➕ Criar usuário
```http
POST /users/signin
```

### 🔐 Login
```http
POST /users/login
```

### 🚪 Logout
```http
POST /users/logout
```

### 👤 Usuário autenticado
```http
GET /users/me
```

---

## ▶️ Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar o servidor
npm start
```

---

## 📦 Variáveis de ambiente

Crie um arquivo `.env` na raiz com:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

---

## 📈 Últimos finalizados
- [X] Sistema de propriedades completo
- [X] Sistema de autenticação com JWT
- [X] Cookies HTTP Only
- [X] Rotas protegidas

---

## 📈 Próximos passos

- [ ] Iniciar CRUD de reservas
- [ ] Reservar uma acomodação
- [ ] Cancelar uma reserva
- [ ] Integração com frontend

---

## 📄 Licença

Este projeto é apenas para fins de estudo.

---

## 👨‍💻 Autor

Desenvolvido por Augusto Kauan 🚀