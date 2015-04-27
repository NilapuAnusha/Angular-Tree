'use strict';

/* Controller */

app.controller('mainCtrl',['$scope', '$http','$location',
		function($scope, $http, $location){
		var _scope = {};
		_scope.init = function(){
      $scope.collapsed = true;
        $scope.treeData = [];
        $scope.treeName = "Demo tree";
        $scope.treeData =   [
              {
                  "nodesList": [
                      {
                          "parentId": "Parent_1",
                          "description": "ShortDescription",
                          "child": [
                              {
                                  "childId": "Child_1.1",
                                  "description": "ShortDescription",
                                  "subchild": [
                                      {
                                          "childId": "SubChild_1.1.1",
                                          "description": "ShortDescription"
                                      }
                                  ]
                              },
                              {
                                  "childId": "Child_1.2",
                                  "description": "ShortDescription",
                                  "subchild": [
                                      {
                                          "childId": "SubChild_1.2.1",
                                          "description": "ShortDescription"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "parentId": "Parent_2",
                          "description": "ShortDescription",
                          "child": [
                              {
                                  "childId": "Child_2.1",
                                  "description": "ShortDescription",
                                  "subchild": [
                                      {
                                          "childId": "SubChild_2.1.1",
                                          "description": "ShortDescription"
                                      }
                                  ]
                              },
                              {
                                "childId": "Child_2.2",
                                  "description": "ShortDescription",
                              }
                          ]
                      },
                      {
                          "parentId": "Parent_3",
                          "description": "ShortDescription",
                          "child": [
                              {
                                  "childId": "Child_3.1",
                                  "description": "ShortDescription",
                                  "subchild": [
                                      {
                                          "childId": "SubChild_3.1.1",
                                          "description": "ShortDescription"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "parentId": "Parent_4",
                          "description": "ShortDescription",
                          "child": [
                              {
                                  "childId": "Child_4.1",
                                  "description": "ShortDescription",
                                  "subchild": [
                                      {
                                          "childId": "SubChild_4.1.1",
                                          "description": "ShortDescription"
                                      },
                                      {
                                          "childId": "SubChild_4.1.2",
                                          "description": "ShortDescription"
                                      },
                                      {
                                          "childId": "SubChild_4.1.3",
                                          "description": "ShortDescription"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "parentId": "Parent_5",
                          "description": "ShortDescription",
                          "child": [
                              {
                                  "childId": "Child_1",
                                  "description": "ShortDescription",
                                  "subchild": [
                                      {
                                          "childId": "SubChild_5",
                                          "description": "ShortDescription"
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              }
          ];
          $scope.data = [{
      "id": 1,
      "title": "1. dragon-breath",
      "items": []
    }, {
      "id": 2,
      "title": "2. moiré-vision",
      "items": [{
        "id": 21,
        "title": "2.1. tofu-animation",
        "items": [{
          "id": 211,
          "title": "2.1.1. spooky-giraffe",
          "items": []
        }, {
          "id": 212,
          "title": "2.1.2. bubble-burst",
          "items": []
        }],
      }, {
        "id": 22,
        "title": "2.2. barehand-atomsplitting",
        "items": []
      }],
    }, {
      "id": 3,
      "title": "3. unicorn-zapper",
      "items": []
    }, {
      "id": 4,
      "title": "4. romantic-transclusion",
      "items": []
    }];

    }

    _scope.init();
	}]);