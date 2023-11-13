// event.js
const { Bot } = require('../client');

/**
 * @typedef {Object} Event
 * @property {string} name - Event name
 * @property {import("../types").RunFunction} run - Event handler function
 */

/**
 * @type {Event}
 */
module.exports = {
  name: 'exampleEvent',
  /**
   * @param {Bot} client
   * @param  {...any} args
   * @returns {Promise<any>}
   */
  run: async (client, ...args) => {
    // Implement your event handler logic here
  },
};