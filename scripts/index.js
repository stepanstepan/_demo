import fs from 'fs';
import llm from './llm.js';
import extractApi from './extruct-api.js';
import schema from './schema.js';
import ids from './ids.json' with { type: 'json' };

const structuredLlm = llm.withStructuredOutput(schema);

async function run() {
  try {
    let index = 0;
    while(ids[index]) {
      const id = ids[index];
      const response = await extractApi(id);
      const json = await response.json();
      const companyData =  JSON.stringify(json.result);
      const llmResponse = await structuredLlm.invoke(companyData);
      fs.writeFileSync(`./json/${id}.json`, JSON.stringify(llmResponse));
      index++;
    }
  } catch (err) {
    console.error(err);
  }
}

run();
