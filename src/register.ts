import { BehaviorSubject } from 'rxjs';
 
declare const window: any;

class MasterStore {
  constructor(data = null) {
    window.masterStore$ = new BehaviorSubject(data);
  }
}

export default MasterStore;
