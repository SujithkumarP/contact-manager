import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | addcontact-loading', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:addcontact-loading');
    assert.ok(route);
  });
});
