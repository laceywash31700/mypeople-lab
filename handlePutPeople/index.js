'use strict';

const dynamoose = require('dynamoose');

const schmea = new dynamoose.Schema({ id: String, name: String, age: Number });

const peopleModel = dynamoose.model('people', schmea);

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: null,
    body: null,
  };

  let id = event.pathParameters.id;
  let parsedBody = JSON.parse(event.body);
  try {
    const results = await peopleModel.update(id, { ...parsedBody });
    response.statusCode = 200;
    response.body = JSON.stringify(results);
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }

  return response;
};
