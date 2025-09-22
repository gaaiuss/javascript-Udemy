function createCalc() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        start() {
            this.clickBtn();
            this.pressEnter();
        },
        clickBtn() {
            document.addEventListener('click', e => {
                const lmt = e.target;
                if (lmt.classList.contains('btn-num')) {
                    this.btnToDisplay(lmt.innerText);
                }
                if (lmt.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (lmt.classList.contains('btn-del')) {
                    this.delOne();
                }
                if (lmt.classList.contains('btn-eq')) {
                    this.calculate();
                }
            })
        },
        btnToDisplay(value) {
            this.display.value += value;
        },
        clearDisplay() {
            this.display.value = '';
        },
        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        calculate() {
            let equation = this.display.value;
            try {
                equation = eval(equation);
                if(!equation) {
                    alert('Invalid equation');
                    return;
                }
                this.display.value = equation;
            } catch (e) {
                alert('Invalid equation');
                return;
            }
        },
        pressEnter() {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.calculate();
                }
            })
        }
    }
}


const calc = createCalc();
calc.start();