import Ember from 'ember';

export default Ember.Component.extend({
  goodNewsTitle: Ember.computed(function(){
    return this.get('model').currentsermon[0].title
  }),
  goodNewsDate: Ember.computed(function(){
    return this.get('model').currentsermon[0].date
  })
});
