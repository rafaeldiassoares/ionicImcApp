angular.module('starter.controllers', [])

.controller('PrincipalCtrl', function($scope, $state, $rootScope){
	$scope.calcular = function(valor) {
			
		valor.altura = valor.altura.toString().replace(/,/gi, ".");

		$rootScope.resultado = valor.peso / (parseFloat(valor.altura) * parseFloat(valor.altura));		

		$state.go('resultado');
	}
})

.controller('ResultadoCtrl', function($scope, $rootScope){

	/*
	< 16	Magreza grave
	16 a < 17	Magreza moderada
	17 a < 18,5	Magreza leve
	18,5 a < 25	Saudável
	25 a < 30	Sobrepeso
	30 a < 35	Obesidade Grau I
	35 a < 40	Obesidade Grau II (severa)
	≥ 40	Obesidade Grau III (mórbida)
	*/

	if($rootScope.hasOwnProperty('resultado')) {
		$scope.resultado = $rootScope.resultado.toFixed(2);

		var retorno = classificacao($scope.resultado);

		$scope.resultadoClassificacao = retorno.mensagem;
		$scope.classColorCard = retorno.cor;

		delete $rootScope.resultado;
	}

	function classificacao(valor) {
		var retorno = {};

		if(valor < 16) {
			retorno.mensagem = 'Magreza grave';
			retorno.cor = 'color-card-red';
		} else if(valor >= 16 && valor < 17) {
			retorno.mensagem = 'Magreza moderada';
			retorno.cor = 'color-card-orange';
		} else if(valor >= 17 && valor < 18.5) {
			retorno.mensagem = 'Magreza leve';
			retorno.cor = 'color-card-yellow';
		} else if(valor >= 18.5 && valor < 25) {
			retorno.mensagem = 'Saudável';
			retorno.cor = 'color-card-green';
		} else if(valor >= 25 && valor < 30) {
			retorno.mensagem = 'Sobrepeso';
			retorno.cor = 'color-card-yellow';
		} else if(valor >= 30 && valor < 35) {
			retorno.mensagem = 'Obesidade Grau I';
			retorno.cor = 'color-card-orange';
		} else if(valor >= 35 && valor < 40) {
			retorno.mensagem = 'Obesidade Grau II (severa)';
			retorno.cor = 'color-card-red';
		} else if(valor >= 40) {
			retorno.mensagem = 'Obesidade Grau III (mórbida)';
			retorno.cor = 'color-card-red';
		}

		return retorno;
	}
})

.controller('SobreCtrl', function($scope){

});