const symbolList = ['♡', '♢', '♤', '♧'];
const valueList = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

/* FUNÇÃO ANTES DE REFATORIZAR!

const getRandomSymbol = () => {
    let rnd = Math.random();   
    let item = Math.floor(rnd*(symbolList.length));
    return symbolList[item];
};

const getRandomValue = () => {
    let rnd = Math.random();   
    let item = Math.floor(rnd*(valueList.length));
    return valueList[item];
};

const setSymbolValue = (symbol) => {
    document.querySelector('#symbol').innerHTML = symbol;
};

const setValueValue = (value) => {
    document.querySelector('#value').innerHTML = value;
};
const playGame = () => {
   const symbol = getRandomSymbol();
   const value = getRandomValue ();
    setSymbolValue (symbol);
    setValueValue (value);
} */

const getRandonizer = (list) => {
    let rnd = Math.random();   
    let item = Math.floor(rnd*(list.length));
    return list[item];
    };

const getRandomSymbol = () => {
    return getRandonizer(symbolList);
    };
    
const getRandomValue = () => {
    return getRandonizer(valueList);
    };

const setRizer = (seletor, value) => {
    document.querySelector(seletor).innerHTML = value;
};
    
const setSymbolValue = (symbol, selector) => {
    setRizer(selector, symbol);
    };
    
const setValueValue = (value) => {
    setRizer('#value', value);
    };

const playGame = () => {
    const symbol = getRandomSymbol();
    const value = getRandomValue ();
    setSymbolValue (symbol, '#symbol1');
    setSymbolValue (symbol, '#symbol2');
    setValueValue (value);
    }

