import { makeAutoObservable } from 'mobx';

export default class Company {

  id = null;
  data = {};

  constructor(json = {}, id) {
    makeAutoObservable(this);
    this.data = json;
    this.id = id;
  }

  getValue(key) {
    return this.data[key];
  }

}
