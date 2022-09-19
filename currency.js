let currency ={

    FetchPrice: function(){
        fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd'
        )
            .then((response) => response.json())
            .then((data) => {this.displayPrice(data)
             setTimeout(currency.FetchPrice.bind(this),1500);
            });
    },
    displayPrice: function(data){
        
        const btc = data.bitcoin.usd;
        const eth = data.ethereum.usd;
       
        document.querySelector('.btc-price').innerText = `${btc}` + ' $';
      
        document.querySelector('.eth-price').innerText = `${eth}` + ' $';

    }
    
};

currency.FetchPrice();



