const Poller = require('./src/poller');

const poller = new Poller(2000);

poller.onPoll(() => {
    console.log('Do something here...');
});

poller.run();