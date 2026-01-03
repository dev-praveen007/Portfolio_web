export function getMonthDifference(startTime: any, endTime: any = new Date().toISOString()) {
    const start = new Date(startTime);
    const end = new Date(endTime);

    // Year & month difference
    let months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());

    // Count current month as well
    if (end.getDate() >= start.getDate()) {
        months += 1;
    }

    return Math.max(0, months);
}


export function getYearMonthDiff(startTime: any, endTime: any = new Date().toISOString()) {
    const start = new Date(startTime);
    const end = new Date(endTime);

    let totalMonths =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());

    // Adjust for days (partial month handling)
    if (end.getDate() < start.getDate()) {
        totalMonths--;
    }

    totalMonths = Math.max(0, totalMonths);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let result = [];
    if (years > 0) result.push(`${years} Year${years > 1 ? "s" : ""}`);
    if (months > 0) result.push(`${months} Month${months > 1 ? "s" : ""}`);

    return result.length ? result.join(" ") : "0 Months";
}
