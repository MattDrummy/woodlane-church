import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('good-news-archive', 'Integration | Component | good news archive', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{good-news-archive}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#good-news-archive}}
      template block text
    {{/good-news-archive}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
