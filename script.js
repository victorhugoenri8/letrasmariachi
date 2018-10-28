if ('serviceWorker' in navigator) {
	
  navigator.serviceWorker.register('./service-worker.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
    
}

// if (window.Notification && Notification.permission !== "denied") {
// 	Notification.requestPermission(status => {
// 				console.log(status);
// 		let n= new Notification("titulo", {
// 			body: "soy lo ststttmehjos",
// 			icon: "/notas.png",
// 		})
// 	})
// }