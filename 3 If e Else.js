// comparadores aritiméticos ==; !=; <; >; <=; >=
// comparadores lógicos  || -> ou;  && -> e; ! -> não

var idade_minima = 18;
var idade_pessoa = prompt('Digite sua idade');

if (idade_pessoa >= idade_minima) {
    alert('acesso autorizado')
} else {
    alert('acesso NÃO autorizado')
} 