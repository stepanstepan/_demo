import { makeAutoObservable } from 'mobx';
import AlertStore from './Alert';
import Company from './Company';

class StorageBase {

  selectedId = null;
  ids = [];
  data = {};
  keys = [
    'trial',
    'pricing',
    'integration',
    'support', 
    'scalability',
    'customization',
    'reviews_pros',
    'reviews_cons'
  ];

  constructor() {
    makeAutoObservable(this);
  }

  async fetch(id) {
    try {
      const response = await fetch(`/json/${id}.json`);
      const json = await response.json();
      const company = new Company(json, id);
      const index = this.ids.findIndex(_id => _id === id);
      if (index < 0) {
        this.ids.push(id);
        this.data[id] = company;
      }
    } catch (err) {
      AlertStore.add(err.message);
    }
  }

  find(id) {
    return this.data?.[id];
  }

  keyToHuman(key) {
    return key?.split('_').join(' ');
  }

  select(id) {
    this.selectedId = id;
  }

  get listIds() {
    return this.ids?.filter(id => id !== this.selectedId);
  }

}

const Storage = new StorageBase();
export default Storage;