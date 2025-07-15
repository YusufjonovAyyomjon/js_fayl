let lider = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down () {
        this.step--;
        return this
    },
    showStep () {
        console.log(this.step);
        
        return this
    }
};
lider.up().up().down().showStep().down().showStep();// javob 1 va 0 chiqadi