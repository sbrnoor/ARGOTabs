const Room = require('../../models/room')
const templateView = require('./templates/view.jade')

require('./common.styl')

class Rooms {
  sidebarCategory () {
    return 'Participants'
  }

  sidebarItem () {
    return {
      name: 'Rooms',
      sortToken: 4
    }
  }

  route () {
    return '/rooms'
  }

  routeOpts () {
    var result

    return result = {
      template: templateView(),

      controller: ['$scope', function ($scope) {
        $scope.uncloak = true
        var tournament = $scope.tournament

        $scope.addRoom = function () {
          var room = new Room(tournament)
          return tournament.rooms.push(room)
        }

        $scope.removeRoom = function (index) {
          var array = tournament.rooms
          array[index].destroy()
          return array.splice(index, 1)
        }

        return $scope.canRemoveRoom = function (room) {
          for (var round of tournament.rounds) {
            var ropts = room.rounds[round.id]

            if (ropts != null && ropts.ballot != null) {
              return false
            }
          }
          return true
        }
      }]
    }
  }
}

module.exports = Rooms
