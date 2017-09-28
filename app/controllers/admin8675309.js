import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    test(){
      this.get('store')
        .findRecord('officestaff', 1)
        .then((data) => {
          data.set('role', "Bartender")
          data.save();
        })
    }
  }
});
