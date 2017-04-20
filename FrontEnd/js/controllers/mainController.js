(function() {
    'use strict';

    angular
        .module('node')
        .controller('TableController', function(API, $filter) {
        	const vm = this;

          let people = API.getData()
            people.then(response=>{
              vm.data = response.data
              })

          vm.submitForm = function(e){
            e.preventDefault()
            if(!vm.person.likesJS){
              vm.person.likesJS = false
            }
            let newPerson = API.createPeople(vm.person)
              newPerson.then(response=>{
                let people = API.getData()
                  people.then(response=>{
                    vm.data = response.data
                    })
              })
              vm.person={}

          }
				  })
			})();
