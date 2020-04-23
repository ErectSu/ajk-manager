// 获取当前日期以及后4天
export default function GetDateStr(date,AddDayCount) {
    var time = new Date(date).getTime() - 24*60*60*1000
    var _date = new Date(time);
    var currentWeek = _date.getDay();
    var obj = {}
    _date.setDate(_date.getDate() + AddDayCount); //获取AddDayCount天后的日期
    console.log(new Date())
    var years = _date.getFullYear();
    var months = (_date.getMonth() + 1) < 10 ? "0" + (_date.getMonth() + 1) : (_date.getMonth() + 1); //获取当前月份的日期，不足10补0  
    var days = _date.getDate() < 10 ? "0" + _date.getDate() : _date.getDate(); //获取当前几号，不足10补0  
    var dates = new Date(years, months - 1, days);
    var _week;
    if (dates.getDay() == 0) _week = "(日)";
    if (dates.getDay() == 1) _week = "(一)";
    if (dates.getDay() == 2) _week = "(二)";
    if (dates.getDay() == 3) _week = "(三)";
    if (dates.getDay() == 4) _week = "(四)";
    if (dates.getDay() == 5) _week = "(五)";
    if (dates.getDay() == 6) _week = "(六)";
    obj = {
        time:months + "/" + days,
        week:_week,
        houses:'55(间)'
    }
    return obj;
}