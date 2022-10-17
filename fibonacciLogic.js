module.exports ={
    getFibonacciNumber : function (n) {
        if (n <= 1)
            return n;
        return this.getFibonacciNumber(n-1) + this.getFibonacciNumber(n-2);
    }
};