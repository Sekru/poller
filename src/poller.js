'use strict'

const EventEmitter = require('events');

module.exports = function (timeout) {
    const Poller = {};
    const emitter = new EventEmitter();

    emitter.on('error', () => {
        Poller.poll();
    });

    Poller.poll = () => setTimeout(() => emitter.emit('poll'), timeout);
    Poller.onPoll = callback => {
        emitter.on('poll', () => {
            try {
                callback();
                Poller.poll();
            } catch (err) {
                emitter.emit('error', err);
            }
        });
    }

    Poller.run = () => Poller.poll(timeout);

    return Poller;
};