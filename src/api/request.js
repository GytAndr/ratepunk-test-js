import { nanoid } from "nanoid";
export default async function submitEmail(email) {
	//get dato from form
	const data = {
		id: nanoid(),
		email,
	};

	//send to server in json format
	const JSONdata = JSON.stringify(data);

	//JSON bin API endpoint
	const endpoint = "https://api.jsonbin.io/v3/b/634e397b0e6a79321e2c3393";

	//request options for sending data
	const options = {
		//PUT because we need only last value to be stored
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"X-Master-Key": process.env.NEXT_PUBLIC_JSONBIN_KEY,
		},
		body: JSONdata,
	};
	//send data
	const response = await fetch(endpoint, options);
	const result = await response.json();
	return result.record.id;
}
