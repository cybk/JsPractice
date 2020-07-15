import wait from 'waait';
import faker from 'faker';

const go = async () => {
    console.log(`Hello ${faker.name.firstName()}`);
    console.log('starting!!!');
    await wait(200);
    console.log('ending!');
};

go();
