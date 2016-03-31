angular.module('qnController', [])
	.controller('mainController', ['$scope', '$http', 'Qns', function ($scope, $http, Qns) {
		$scope.qnsData = [];
		$scope.currQn = '';
		$scope.currIndex = 0;
		$scope.qnCount = 0;
		$scope.loading = true;
		$scope.firstQn = true;
		$scope.lastQn = false;
		$scope.result = {}
		$scope.submitted = false;

		// event triggered when proceed to next question
		$scope.nextQn = function () {
			$scope.currIndex += 1;
			if ($scope.currIndex >= $scope.qnCount - 1) { 
				$scope.currIndex = $scope.qnCount - 1;
				$scope.lastQn = true;
			}
			$scope.currQn = $scope.qnsData[$scope.currIndex];
			$scope.firstQn = false;
		}

		$scope.prevQn = function () {
			$scope.currIndex -= 1;
			if ($scope.currIndex <= 0) { 
				$scope.currIndex = 0;
				$scope.firstQn = true;
			}
			$scope.currQn = $scope.qnsData[$scope.currIndex];
			$scope.lastQn = false;
		}

		$scope.answer = function (qnTitle, qnAnswer) {
			$scope.result[qnTitle] = qnAnswer;
		}

		$scope.submit = function () {
			console.log($scope.result);
			Qns.submitAns($scope.result)
				.success(function (data) {
					console.log(data);
				})
				.error(function (data) {
					console.log('Error submitting data: ' + data);
				});
			$scope.submitted = true;
		}

		// When landing on the page, get all the questions metadata
		Qns.getQns()
			.success(function (qns) {
				$scope.qnsData = qns;
				$scope.currQn = qns[0];
				$scope.qnCount = qns.length;

				// populate result
				for (i in qns) {
					var page = qns[i];
					for (j in page.data) {
						var qn = page.data[j];
						$scope.result[qn.title] = '';
					}
				}
			})
	}])