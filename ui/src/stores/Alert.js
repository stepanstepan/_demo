import { makeAutoObservable } from 'mobx';

const TIMEOUT = 4 * 1000;

class Alert {

  constructor() {
    makeAutoObservable(this);
  }

  list = [];

  add(message, status = 'error') {
    if (!message) {
      return;
    }

    const alert = this._template(message, status);
    this.list.push(alert);
    setTimeout(() => {
      this.hide(alert.id);
    }, TIMEOUT);
  }

  hide(id) {
    const index = this.list.findIndex(alert => alert.id === id);
    if (index < 0) {
      return;
    }
    this.list[index]['hidden'] = true;
  }

  delete(id) {
    const index = this.list.findIndex(alert => alert.id === id);
    if (index < 0) {
      return;
    }
    this.list.splice(index, 1);
  }

  _template(message, status) {
    return {
      message,
      status,
      id: Math.random().toString(36),
      hidden: false
    }
  }
   
}

const AlertStore = new Alert();
export default AlertStore;
