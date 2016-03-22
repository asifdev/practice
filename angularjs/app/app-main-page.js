angular.module('notesApp', [])
    .controller('MainCtrl', [function() {
    // Controller-specific code goes here
        console.log('MainCtrl has been created');
        var self = this;
        self.message = "Hello ";
        self.changeMessage = function(){
        	self.message = "Hi ";
        };
        self.notes = [
            {id: 1, label: 'First Note', done: false},
            {id: 2, label: 'Second Note', done: false},
            {id: 3, label: 'Done Note', done: true},
            {id: 4, label: 'Last Note', done: false}
        ];
}]);