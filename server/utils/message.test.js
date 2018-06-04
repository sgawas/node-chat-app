const expect = require('expect');

const {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object', ()=>{
        var messageObject = generateMessage('Suraj', 'Hello world');
        expect(messageObject.from).toBe('Suraj');
        expect(messageObject.text).toBe('Hello world');
        expect(typeof messageObject.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', ()=>{
    it('should generate correct location object', ()=>{
        var messageObject = generateLocationMessage('Suraj',1, 1);
        expect(messageObject.from).toBe('Suraj');
        expect(messageObject.url).toBe('https://www.google.com/maps?q=1,1');
        expect(typeof messageObject.createdAt).toBe('number');
    });
});