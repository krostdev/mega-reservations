# 🏨 Mega Reservations API

API RESTful para gerenciamento de reservas e acomodações (hotéis, apartamentos e pousadas).

---

## 🚀 Sobre o projeto

O **Mega Reservations** é um projeto backend desenvolvido para praticar conceitos de desenvolvimento fullstack, com foco em:

- Arquitetura de APIs REST
- CRUD completo
- Organização em camadas (routes, controllers, models)
- Integração com banco de dados NoSQL

---

## 🛠️ Tecnologias utilizadas

- Node.js  
- Express  
- MongoDB  
- Mongoose  

---

## 📁 Estrutura do projeto

    src/
      controllers/
      models/
      routes/
      config/

---

## 📌 Funcionalidades

### 🏠 Properties (Acomodações)

- Criar uma acomodação  
- Listar todas as acomodações  
- Buscar acomodação por ID  

---

## 🔗 Endpoints

### ➕ Criar propriedade
POST /properties

### 📄 Listar propriedades
GET /properties

### 🔍 Buscar por ID
GET /properties/:id

---

## ▶️ Como rodar o projeto

    # instalar dependências
    npm install

    # rodar o servidor
    npm start

---

## 📦 Variáveis de ambiente

Crie um arquivo `.env` na raiz com:

    MONGO_URI=your_mongodb_connection_string
    PORT=3000

---

## 📈 Próximos passos

- [ ] Atualizar propriedades (PUT)
- [ ] Deletar propriedades (DELETE)
- [ ] Sistema de reservas completo
- [ ] Autenticação de usuários
- [ ] Integração com frontend

---

## 📄 Licença

Este projeto é apenas para fins de estudo.

---

## 👨‍💻 Autor

Desenvolvido por Augusto Kauan 🚀