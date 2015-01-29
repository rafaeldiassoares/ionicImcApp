angular.module('starter.controllers', [])

.controller('PrincipalCtrl', function($scope, $state, $rootScope){
    $scope.calcular = function(valor) {
		valor.altura = valor.altura.toString().replace(/,/gi, ".");

		$rootScope.resultado = valor.peso / (parseFloat(valor.altura) * parseFloat(valor.altura));		

		$state.go('resultado');
	}
})

.controller('ResultadoCtrl', function($scope, $rootScope, $state){
    
    $scope.novoTeste = novoTeste;
        
    function novoTeste(){
        delete $scope.resultado;
        delete $scope.resultadoClassificacao;
        delete $scope.classColorCard;
        delete $scope.dica;
        
        $state.go('principal');
    }    
    
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
        $scope.dica = retorno.dica;

		delete $rootScope.resultado;
	}

	function classificacao(valor) {
		var retorno = {};

		if(valor < 16) {
			retorno.mensagem = 'Magreza grave';
            retorno.dica = 'Nesse ponto, o corpo magro deixa de ser saudável e o organismo fica mais vulnerável a infecções. Se o baixo peso persistir, mesmo com alimentação normal, procure ajuda médica; a dificuldade para engordar pode ser sintoma de alguma doença insidiosa, como o diabetes.'
			retorno.cor = 'color-card-red';
		} else if(valor >= 16 && valor < 17) {
			retorno.mensagem = 'Magreza moderada';
            retorno.dica = 'Nesse ponto, o corpo magro deixa de ser saudável e o organismo fica mais vulnerável a infecções. Se o baixo peso persistir, mesmo com alimentação normal, procure ajuda médica; a dificuldade para engordar pode ser sintoma de alguma doença insidiosa, como o diabetes.';
            retorno.dica = '';
			retorno.cor = 'color-card-orange';
		} else if(valor >= 17 && valor < 18.5) {
			retorno.mensagem = 'Magreza leve';
            retorno.dica = 'Esta faixa não indica necessáriamente que você esteja abaixo do peso, considera-se saudável mas fique atento, pratique sempre atividades físicas e tenha sempre uma alimentação saudável.';
			retorno.cor = 'color-card-yellow';
		} else if(valor >= 18.5 && valor < 25) {
			retorno.mensagem = 'Saudável';
            retorno.dica = 'Seu peso está adequado à altura. É importante manter a educação alimentar e a atividade física. Fique atento caso seu valor esteja perto dos limites para os estágios de Baixo Peso ou Sobrepeso.';
			retorno.cor = 'color-card-green';
		} else if(valor >= 25 && valor < 30) {
			retorno.mensagem = 'Sobrepeso';
            retorno.dica = 'Esta faixa indica que você está com predisposição à obesidade; dependendo do seu histórico familiar e pessoal, pode haver um quadro de pré-diabetes e hipertensão. Procure orientação médica para evitar o próximo estágio, Obesidade 1. Quanto mais quilos extras, maior a dificuldade para emagrecer.';
			retorno.cor = 'color-card-yellow';
		} else if(valor >= 30 && valor < 35) {
			retorno.mensagem = 'Obesidade Grau I';
            retorno.dica = 'O risco de desenvolver diabetes, para quem está nesta faixa de peso, é de 20%, e o de hipertensão ultrapassa 25%. Há risco maior de outras doenças cardiovasculares, articulares, distúrbios psiquiátricos, apneia do sono e até certos tipos de câncer.';
			retorno.cor = 'color-card-orange';
		} else if(valor >= 35 && valor < 40) {
			retorno.mensagem = 'Obesidade Grau II (severa)';
            retorno.dica = 'O risco de desenvolver diabetes chega a 40%, e a chance de surgirem doenças associadas à obesidade, como reumatismos, câncer, apneia do sono, hipertensão e outros problemas cardiovasculares pode chegar a 50%. Procure orientação médica.';
			retorno.cor = 'color-card-red';
		} else if(valor >= 40) {
			retorno.mensagem = 'Obesidade Grau III (mórbida)';
            retorno.dica = 'O risco de desenvolver doenças associadas ao excesso de peso, como diabetes, reumatismos, câncer, apneia do sono, hipertensão e outros problemas cardiovasculares chega a até 90%. Nesse estágio, a cirurgia de redução do estômago pode ser indicada. Procure orientação médica imediatamente.';
			retorno.cor = 'color-card-red';
		}

		return retorno;
	}
})

.controller('SobreCtrl', function($scope){

});