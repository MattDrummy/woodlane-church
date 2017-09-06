import DS from 'ember-data';

export default DS.Model.extend({
  verse: DS.attr('string'),
  verse_link: DS.attr('string')
  
});
