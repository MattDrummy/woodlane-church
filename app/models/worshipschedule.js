import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  title: DS.attr('string'),
  sermon_link: DS.attr('string'),
  scripture: DS.attr('string'),
  scripture_link: DS.attr('string')
});
