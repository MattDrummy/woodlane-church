import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  title_link: DS.attr('string'),
  series_title: DS.attr('string'),
  scripture: DS.attr('string'),
  scripture_link: DS.attr('string')

});
