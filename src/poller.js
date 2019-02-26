'use strict'

const EventEmitter = require('events');

module.exports = function (timeout) {
    const emitter = new EventEmitter();
    const poll = () => setTimeout(() => emitter.emit('poll'), timeout);
    const onPoll = callback => emitter.on('poll', callback);
    const run = () => poll(timeout);

    return {
        poll, onPoll, run
    }
};