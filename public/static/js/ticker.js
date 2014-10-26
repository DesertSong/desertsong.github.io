angular.module('ticker', [])
  .controller('matchList', ['$scope', function($scope) {

    var team_eg = {
      name: 'EG',
      url: './team.html'
    };

    var league_ti5 = {
      name: 'The International 2015',
      url: './league.html'
    };

    var league_danimals = {
      name: 'Danimals League',
      url: './league.html'
    };

    var league_starladderx = {
      name: 'Starladder X',
      url: './league.html'
    };


    $scope.matches = [
      {
        team1: {name: 'Navi'},
        team2: {name: 'Cloud9'},
        datetime: '10/1/2014 14:00 PST',
        league: league_ti5 
      },
      {
        team1: team_eg, 
        team2: {name: 'SNA'},
        datetime: '10/1/2014 12:00 PST',
        league: league_starladderx
      },
      {
        team1: team_eg, 
        team2: {name: 'Cloud9'},
        datetime: '10/17/2014 15:00 PST',
        league: league_danimals 
      }
    ];
  }]);
