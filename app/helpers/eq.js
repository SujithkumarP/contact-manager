import { helper } from '@ember/component/helper';
import { isEqual } from '@ember/utils';

export default helper(function eq(params/*, hash*/) {

  let [arg1,arg2]=params;
  console.log(arg1);
  console.log(arg2);

  if(isEqual(arg1,arg2)){
    return true;
  }
  else {
    return false;
  }
});
