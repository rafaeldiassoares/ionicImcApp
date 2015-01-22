angular.module('starter.directives', [])

.directive('ngDecimal', ['$filter', function ($filter) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {

            var number = attrs.ngModel.toString();

            number = number.replace(/([0-9])([0-9]{2})$/, "$1,$2");
        }
    };
}
])