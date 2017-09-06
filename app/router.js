import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'})
  this.route('staff');
  this.route('worship', {path: '/worship'});
  this.route('ministries');
  this.route('links');
  this.route('photos');
  this.route('calendar');
  this.route('faq');
});

export default Router;
