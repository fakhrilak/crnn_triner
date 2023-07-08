// let url = "http://192.168.100.170:7001"
// export const API = axios.create({baseURL: url+`/blogger`});
// // Alter defaults after instance has been created
// export const setAuthToken = (token) => {
// 	if (token) {
// 		API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// 	} else {
// 		delete API.defaults.headers.common['Authorization'];
// 	}
// };
// export const path = url+"/blogger/single/"
export const config = {
	headers: {
		'Accept': '*/*',
		'Content-Type': 'application/json'
	}
}