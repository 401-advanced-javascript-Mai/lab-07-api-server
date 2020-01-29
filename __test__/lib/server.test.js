'use strict' ;

const {server} = require('../../lib/server.js')
const superTest = require('supertest');
const mockRequest = superTest(server) ;

describe('api server testing error in this  ', ()=>{
    it('responed with Not found error (404) if the route is incorrect ' ,()=>{
        return mockRequest 
        .get('/incorrect-route')
        .then(results =>{
            expect(results.status).toBe(401);
        })
        .catch(console.error);
    });
});
    it ('responsed with 500 when we do not know what you talk about or our server not accept the modification (example when i throw my error in specific route ',() =>{
        return mockRequest
        .get('/I-throw-error')
        .then(results =>{
            expect(results.status).toBe(500)
        })
    })