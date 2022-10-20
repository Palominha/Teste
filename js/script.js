function sendMail() {
    var params = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value,
    };

    const serviceID = "service_d8gw2kj";
    const templateID = "template_xtejec6";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mensagem").value = "";
            console.log(res);
            alert("Mensagem enviada com exito");
        })
        .catch((err) => console.log(err));
}

