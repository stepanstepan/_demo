import { ChatOpenAI } from '@langchain/openai';

const llm = new ChatOpenAI({ 
  model: 'gpt-4o',
  apiKey: process.argv[2],
  temperature: 0,
  topP: 0.1
});

export default llm;