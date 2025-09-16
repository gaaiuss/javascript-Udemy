function formatDate (date) {
    const weekday =  getWeekdayName(date.getDay())
    const d =  date.getDate()
    const sufix = getDateSufix(d)
    const m =  getMonthName(date.getMonth())
    const y =  date.getFullYear()
    const h =  addLeftZero(date.getHours())
    const M =  addLeftZero(date.getMinutes())

    return `${weekday}, ${m} ${d}${sufix} ${y} ${h}:${M}`
}

function addLeftZero (num) {
    return num < 10 ? `0${num}` : num
}

function getDateSufix (dateNum) {
    if (dateNum < 10) {
        switch (dateNum) {
            case 1:
                return 'st'
            case 2:
                return 'nd'
            case 3:
                return 'rd'
            default:
                return 'th'
        }
    } else {
        switch (dateNum % 10) {
            case 1:
                return 'st'
            case 2:
                return 'nd'
            case 3:
                return 'rd'
            default:
                return 'th'
        }
    }
}

function getWeekdayName (weekdayNum) {
    switch (weekdayNum) {
        case 0:
            return 'sunday'
        case 1:
            return 'monday'
        case 2:
            return 'tuesday'
        case 3:
            return 'wednesday'
        case 4:
            return 'thursday'
        case 5:
            return 'friday'
        case 6:
            return 'saturday'
    }
}

function getMonthName (monthNum) {
    switch (monthNum) {
        case 0:
            return 'january'
        case 1:
            return 'february'
        case 2:
            return 'march'
        case 3:
            return 'april'
        case 4:
            return 'may'
        case 5:
            return 'june'
        case 6:
            return 'july'
        case 7:
            return 'august'
        case 8:
            return 'september'
        case 9:
            return 'october'
        case 10:
            return 'november'
        case 11:
            return 'december'
    }
}

const dateElmt = document.querySelector('.date')
const date = new Date()
const fmtdDate = formatDate(date)


dateElmt.innerHTML = fmtdDate