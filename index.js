function findMatching (drivers, driver) {
    return drivers.filter(function(member) {
        return member === driver || member == driver.toLowerCase();
    })
}
function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
        return driver.startsWith(letters)
    })
};

function matchName (drivers, string) {
    return drivers.filter(function (driver) {
        return driver.name.includes(string)
    })
}