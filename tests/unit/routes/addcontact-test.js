import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | addcontact', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:addcontact');
    assert.ok(route);
  });
});
