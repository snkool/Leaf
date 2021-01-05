# Leaf
Leaf é um serviço de streaming similar a Netflix desenvolvido para um trabalho de Engenharia de Software. 

# Rodando o Projeto

1. Abrir a pasta do projeto no Visual Studio.
2. Instalar o MongoDB na máquina.

### Instalando 

1. Instalar pacotes do NPM
   ```sh 
    npm install
   ```
      
2. Selecionar o caminho do banco de dados (Caminho da instalação do mongoDB --dbpath caminho da pasta data/db do projeto)
     
    > 'C:\'Program Files'\MongoDB\Server\4.2\bin\mongod.exe –dbpath "C:\Users\Lucas\Desktop\Leaf\Leaf_c\data\db'
    

3. Realizar as preparações necessárias para executar o projeto.
    ```sh 
    npm run build 
    ```

4. Executar o projeto. 
    ```sh
    npm start
    ```

### Visualizando o Projeto

1. Depois de executar todos esses comandos, basta acessar o

   ```sh
   http://localhost:3000/
   ```
5. Ao acessar você será direcinado para a página principal.
