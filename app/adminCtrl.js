/**
 * Created by lucabuonomo1 on 12/07/15.
 */
app.controller('adminCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
    function getTodos() {
        Data.get('userlist').then(function (results) {
            $rootScope.users = results.users;
            //Data.toast('pppp');

        });
        //Data.get('userlist').then(function (results));
        console.log("pollo");
    }
    getTodos();
    $scope.logout = function () {
        Data.get('logout').then(function (results) {
            $location.path('login');
        });
    }
});