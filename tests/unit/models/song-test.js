import { moduleForModel, test } from 'ember-qunit';

moduleForModel('song', 'Unit | Model | song', {
  // Specify the other units that are required for this test.
  needs: ['model:artist']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
