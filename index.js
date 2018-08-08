// Code your solution in this file!
const logDriverNames = (arrOfDriverObjs) => {
	arrOfDriverObjs.forEach(driver => {console.log(driver.name)})
}

const logDriversByHometown = (drivers, location) => {
	const homeTownDrivers = drivers.filter(driver => driver.hometown === location)
	homeTownDrivers.forEach(driver => {console.log(driver.name)})
}

const driversByRevenue = (drivers) => {
	const driversCopy = drivers.slice()
	// debugger;
	return driversCopy.sort(function(aDriver, bDriver){
		return aDriver.revenue - bDriver.revenue
	})
}

const driversByName = drivers => {
	// debugger;
	 const copyCat = [...drivers]
	return copyCat.sort((driverA, driverB) => {
		return driverA["name"].localeCompare(driverB["name"])
	})
}

const totalRevenue = drivers => {
	return drivers.reduce(function(total, currentVal){
		return total + currentVal.revenue
	}, 0)
}

const averageRevenue = drivers => {
	const totalRev = totalRevenue(drivers)
	return totalRev/drivers.length
}