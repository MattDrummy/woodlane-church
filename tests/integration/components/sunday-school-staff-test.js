import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sunday-school-staff', 'Integration | Component | sunday school staff', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sunday-school-staff}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sunday-school-staff}}
      template block text
    {{/sunday-school-staff}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
