app.controller('MainController', ['$scope', function($scope)
                                  {
                                    $scope.title = 'AngularJS App';
                                    $scope.promo = 'Promo Promo';
                                    $scope.product =
                                    {
                                      name: 'The Book of Trees'
                                      , price: 19
                                    };
                                  }]);