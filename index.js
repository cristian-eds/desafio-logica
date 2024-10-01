// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

const hero = {
    name:'Spider-Man',
    experience: 10001
};

const message = (name, level) => `O herói de nome ${name} está no nível de ${level}!`; 

const showHeroLevel = (hero) => {
    const experience = hero.experience;
    const checkExperienceBetween = (initialValue , finalValue) => experience >= initialValue && experience <= finalValue;

    if (checkExperienceBetween(0,1000)) {
        console.log(message(hero.name,'Ferro'));
    } 
    else if (checkExperienceBetween(1001,2000)) {
        console.log(message(hero.name,'Bronze'));
    }
    else if (checkExperienceBetween(2001,5000)) {
        console.log(message(hero.name,'Prata'));
    }
    else if (checkExperienceBetween(5001,7000)) {
        console.log(message(hero.name,'Ouro'));
    }
    else if (checkExperienceBetween(7001,8000)) {
        console.log(message(hero.name,'Platina'));
    }
    else if (checkExperienceBetween(8001,9000)) {
        console.log(message(hero.name,'Ascendente'));
    }
    else if (checkExperienceBetween(9001,10000)) {
        console.log(message(hero.name,'Imortal'));
    } else {
        console.log(message(hero.name,'Radiante'));
    }
}

showHeroLevel(hero);
