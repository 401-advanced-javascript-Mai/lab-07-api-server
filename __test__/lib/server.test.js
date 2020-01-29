'use strict' ;

const {server} = require('../../lib/server.js');
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
      expect(results.status).toBe(500);
    });
});




describe('api server testing the producte routes' ,()=>{
  it ('responsed with 200 status with /api/v1/product  get request',() =>{
    return mockRequest
    .get('api/va/products')
    .then(results =>{
      expect(results.status).toBe(200);
      expect(typeof results.body.results).toBe('object')
      console.log("mmmmmm" , results.body);
      console.log('2222222' , results.body.results);
    });
  });

  it ('responsed propaply( defiend , status 201) to post request at /api/v1/products', ()=>{
    return mockRequest 
    .post('api/v1/products')
    .send({ category :'shoes'})
    .then(results =>{
      expect (results.body).toBeDefiend();
      epect(results.status).toBe(201);
      expect(results.body.category).toEqual('shoes')
    })
  })
  it('reponsed propaply with 200 atatus to delete request at api/v1/products ',() =>{
    return mockRequest
    .post('api/v1/products')
    .send({ category :'shoes'})
    .delete('api/v1/product/:1')
    .then(results=>{
      expect(results.status).toBe(200)
      expect(results.body).toEqual('item deleted ')
    })

  })
})



describe('api server testing the categories routes' ,()=>{
  it ('responsed with 200 status with /api/v1/categories  get request',() =>{
    return mockRequest
    .get('api/va/categories')
    .then(results =>{
      expect(results.status).toBe(200);
      expect(typeof results.body.results).toBe('object')
      console.log("mmmmmm" , results.body);
      console.log('2222222' , results.body.results);
    });
  });

  it ('responsed propaply( defiend , status 201) to post request at /api/v1/categories', ()=>{
    return mockRequest 
    .post('api/v1/categories')
    .send({ category :'shoes'})
    .then(results =>{
      expect (results.body).toBeDefiend();
      epect(results.status).toBe(201);
      expect(results.body.category).toEqual('shoes')
    })
  })
  it('reponsed propaply with 200 atatus to delete request at api/v1/categories ',() =>{
    return mockRequest
    .post('api/v1/categories')
    .send({ category :'shoes'})
    .delete('api/v1/categories/:1')
    .then(results=>{
      expect(results.status).toBe(200)
      expect(results.body).toEqual('item deleted ')
    })

  })
})