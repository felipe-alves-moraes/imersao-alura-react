import db from '../../db.json';

export default function dbHandler(request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHeader('Access-Controle-Allow-Credentials', true);
  response.setHeader('Access-Controle-Allow-Origin', '*');
  response.setHeader('Access-Controle-Allow-Mothods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  response.json(db);
}
