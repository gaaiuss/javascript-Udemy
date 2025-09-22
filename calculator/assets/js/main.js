function Calc() {
    this.display = document.querySelector('.display');
    this.start = () => {
        this.captureClick();
        this.captureEnter();
    }
    this.captureClick = () => {
        document.addEventListener('click', e => {
            const lmt = e.target;
            if (lmt.classList.contains('btn-num')) this.addNumToDisplay(lmt);
            if (lmt.classList.contains('btn-clear')) this.clear();
            if (lmt.classList.contains('btn-del')) this.del();
            if (lmt.classList.contains('btn-eq')) this.calculate(lmt);
        })
    };
    this.addNumToDisplay = lmt => {
        this.display.value += lmt.innerText;
        this.display.focus();
    }
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.calculate = () => {
        try {   
            const equation = this.display.value;
            if (!equation) {
                alert('Invalid equation');
                return;
            }
            this.display.value = eval(equation);
            return;
        } catch(e) {
            alert('Invalid equation');
            return;
        }
        return;
    };
    this.captureEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.calculate();
            }
        });
    };
}

const calc = new Calc();
calc.start();