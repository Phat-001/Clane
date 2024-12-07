import { BehaviorSubject } from 'rxjs';

class ClaneService {
  stateSubject = new BehaviorSubject('phat nè');
  constructor() {}

}

const claneService = new ClaneService();
export default claneService;