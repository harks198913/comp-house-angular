(function() {
    'use strict';
	angular
		.module('companiesHouse')
		.controller('SearchCompanyCtrl', SearchCompanyCtrl);

		SearchCompanyCtrl.$inject = ['compHouseDataService'];

	function SearchCompanyCtrl(compHouseDataService) {
		var vm = this;
		vm.searchCompanyData = {
			companyName: ""
		};
		vm.searchInfo;
		vm.companyDetails;
		vm.searchCompany = function() {
			if (vm.searchCompanyForm.$valid) {
				return compHouseDataService.companySearch(vm.searchCompanyData.companyName)
					.then(function(data) {
						vm.searchInfo = data;
	              		return vm.searchInfo;
					});
			}
		}

		vm.viewDetails = function(companyNum) {
			return compHouseDataService.viewDetails(companyNum)
				.then(function(data) {
					vm.companyDetails = data;
              		return vm.companyDetails;
				});
		}
	}
})();