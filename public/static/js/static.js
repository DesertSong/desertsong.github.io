angular.module('ticker', [])
  .controller('matchList', ['$scope', function($scope) {
    $scope.matches = [
      {
        team1:'Navi',
        team2:'Cloud9',
        datetime: '10/1/2014 14:00 PST'
      },
      {
        team1:'EG', 
        team2:'SNA',
        datetime: '10/1/2014 12:00 PST'
      }
    ];
  }]);
