const date = () => {
    // eslint-disable-next-line no-extend-native
    Date.prototype.monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    // eslint-disable-next-line no-extend-native
    Date.prototype.getMonthName = function () {
        return this.monthNames[this.getMonth()];
    };

    const dateObj = new Date();

    const month = dateObj.getMonthName();
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    const newdate = month + " " + day + "," + year;
    return newdate;

};

export default date;