import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  title_link: DS.attr('string'),
  subtext: DS.attr('string')
});
