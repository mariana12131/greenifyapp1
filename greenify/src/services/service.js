const _URL = "http://localhost:5000"

async function authUser(params, userData) {
	try {
		let res = await fetch(_URL + params, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userData)
		})

		if (!res.ok) {
			console.log(await res.json())
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		let data = await res.json()
		return data
	} catch (error) {
		throw error;
	}
}

async function getDailyTask(userData) {
	try {
		let res = await fetch(_URL + "/task/new", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userData)
		})

		if (!res.ok) {
			console.log(res)
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		let data = await res.json()
		return data
	} catch (error) {
		throw error;
	}
}

async function completeTask(userData) {
	try {
		let res = await fetch(_URL + "/task/complete", {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userData)
		})

		if (!res.ok) {
			console.log(res)
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		let data = await res.json()
		return data
	} catch (error) {
		throw error;
	}
}

async function getTest(param) {
	try {
		let res = await fetch(_URL + "/test/" + param)

		if (!res.ok) {
			console.log(res)
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		let data = await res.json()
		return data
	} catch (error) {
		throw error;
	}
}

async function checkTest(dataTest, param) {
	try {
		let res = await fetch(_URL + "/test/check/" + param, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(dataTest)
		})

		if (!res.ok) {
			console.log(res)
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		let data = await res.json()
		return data
	} catch (error) {
		throw error;
	}
}

export { authUser, getDailyTask, completeTask, getTest, checkTest }