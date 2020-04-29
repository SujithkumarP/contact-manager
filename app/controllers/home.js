import Controller from '@ember/controller';

export default Controller.extend({
  isExpanded: false,

  actions: {
    sendContent(person) {
      this.send('goToAdd',person);
    }
  }
});
