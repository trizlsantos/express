/** Requisições
 * 1. - Métodos
 * 1.1 - Get -> Busca/lista dados
 * 1.2 - Post -> Cria recurso/dados
 * 1.3 - Put -> Atualiza recurso/dados
 * 1.4 - Delete -> Deleta recurso/dados
 * 1.5 - Patch -> Atualizar UMA informação de um recurso/dado
 * 2. - Receber informações 
 * 2.1 - Query Params -> Filtros
 * 2.1.1. - http://exemplo.com/projetos?nome=Web&author=Carlos
 * 2.2 - Route Params -> Identificar um recurso
 * 2.2.1. - http://exemplo.com/projetos/30
 * 2.3 - Body Params -> {obj JSON}
 * 2.3.1. - {nome: Carlos, idade: 33}
 * 3. Status code http
 * 3.1 - 100 -> Informativo
 * 3.2 - 200 -> Tudo Ok
 * 3.3 - 300 -> Recurso movido
 * 3.4 - 400 -> Erro do cliente
 * 3.5 - 500 -> Erro do servidor
 */

import express from 'express';

const app = express();

app.get('/locations', (request, response) => {
    const { page, page_size } = request.query;
    console.log(page, page_size);
    response.status(200).json(['location 1', 'location 2']);
});

app.post('/locations', (request, response) => {
    response.status(201).json(['location1', 'location2', 'location3']);
    console.log('Cria uma nova localização');
});

app.put('/locations', (request, response) => {
    response.status(200).json(['location1', 'location2', 'location50']);
    console.log('Atualiza uma nova localização');
});

app.delete('/locations', (request, response) => {
    response.status(200).json(['location1', 'location2']);
    console.log('Deleta uma localização');
});

app.use((request, response) => {
    response.status(200).json({ "oi": "OI" });
});

app.listen(3333, () => {
    console.log('Servidor iniciado em http://localhost:3333');
});