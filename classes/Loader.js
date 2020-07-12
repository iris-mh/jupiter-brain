const _ = require('lodash')

module.exports = class Loader {
  constructor() {
    this.templatesPath = '../templates/'
    this.templates = {
      weapon: {},
      armor: {},
      creature: {},
      map: {},
      room: {}
    }
  }

  loadTemplate(category, name) {
    const record = _.get(this, `templates.${category}.${name}`)
    if (!record) {
      const template = require(`${this.templatesPath}${category}/${name}.json`)
      this.templates[category][name] = template
      return template
    } else {
      return record
    }
  }
}