const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_ojje4l9';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Kirim Pertanyaan';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Kirim Pertanyaan';
        alert(JSON.stringify(err));
      });
  });