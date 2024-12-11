import extractApi from './extruct-api.js';
import llm from './llm.js';
import ids from './ids.json' with { type: 'json' };

async function run() {
  try {
    const result = [];
    let i = 0;
    while(ids[i]) {
      console.log(ids[i]);
      const response = await extractApi(ids[i]);
      const json = await response.json();
      result.push(json.result);
      i++;
    }

    const response = await llm.invoke(`You are a startup founder who has just raised your first seed round, and now you are looking for the ideal customer support service. The most important criteria for your decision are price and functionality. Analyze the following data and identify additional criteria and parameters that could help you make a better decision. Make your choice based ONLY on the provided data, and you MUST disregard any prior knowledge you have about the companies mentioned in this data. Provide an example of your decision based on the data. Here's the data: ${JSON.stringify(result)}`);
    console.dir(response, { depth: null }); 
  } catch (err) {
    console.error(err);
  }
}

run();
