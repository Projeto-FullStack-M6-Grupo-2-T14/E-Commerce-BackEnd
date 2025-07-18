# Use uma imagem oficial do Node.js como base
# Use a versão do Node que você está usando no seu projeto (ex: 18, 20, etc.)
FROM node:18-alpine

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
# O '*' garante que ambos os arquivos sejam copiados
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o resto do código do seu projeto para o diretório de trabalho
COPY . .

# ---> PASSO 1: COMPILE O CÓDIGO TYPESCRIPT <---
# Este comando executa o script "build" do seu package.json
RUN npm run build

# Exponha a porta em que sua aplicação roda (ex: 3000, 8080, etc.)
# Troque 3000 pela porta que seu servidor usa
EXPOSE 3000

# ---> PASSO 2: INICIE A APLICAÇÃO COMPILADA <---
# O comando para iniciar sua aplicação quando o contêiner for executado
# Ele vai executar o script "start" do seu package.json
CMD [ "npm", "start" ]