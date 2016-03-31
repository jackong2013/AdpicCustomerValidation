angular.module('qnService', [])
	.factory('Qns', function ($http) {
		return {
			getQns : function () {
				return $http.get('/apis/questions');
			},

			submitAns : function (surveyAns) {
				console.log('submit');
				return $http.post('/apis/save', surveyAns);
			}
		}
	});