import { APIGatewayEvent, Context } from 'aws-lambda';
import fetch from 'node-fetch';
const { NYT_LIST_COMBINED_FICTION_URL} = process.env;
const { NYT_API_KEY } = process.env;

exports.handler = async (event: APIGatewayEvent, context: Context) => {
  const baseURL = `${NYT_LIST_COMBINED_FICTION_URL}${NYT_API_KEY}`;
  try {
    const response = await fetch(baseURL);
    const books = await response.json();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(books)
    }
  } catch (err) {
    console.log(err, 'fetch failed')
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({msg: err.message})
    }
  }
}
