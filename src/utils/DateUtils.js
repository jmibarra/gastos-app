class DateUtils{

    getMonthName = (mes) => {
        let monthNames = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre" ];
    
        let monthName = monthNames[parseInt(mes,10)-1] //Al ser un array enero es el 0 por eso al numero de mes se le resta 1.
    
        return monthName
    }

    getCurrentYear = () => {
        let today = new Date();
        let yyyy = today.getFullYear();
        return yyyy;

    }

    getCurrentMonth = () => {
        var today = new Date();
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        return mm;
    }

}

export default DateUtils;