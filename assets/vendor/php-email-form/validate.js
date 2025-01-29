(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;
      let action = thisForm.getAttribute('action');

      if (!action) {
        displayError(thisForm, 'The form action property is not set!');
        return;
      }

      // Show loading indicator
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      // Create FormData object
      let formData = new FormData(thisForm);
      let formDataObj = {}; // Convert FormData to an object

      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      // If using reCAPTCHA
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      if (recaptcha) {
        if (typeof grecaptcha !== "undefined") {
          grecaptcha.ready(function() {
            grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
              .then(token => {
                formDataObj['recaptcha-response'] = token;
                php_email_form_submit(thisForm, action, formDataObj);
              });
          });
        } else {
          displayError(thisForm, 'The reCaptcha JavaScript API URL is not loaded!');
        }
      } else {
        php_email_form_submit(thisForm, action, formDataObj);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formDataObj) {
    // Make the AJAX request to the Node.js backend
    fetch(action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(formDataObj)
    })
    .then(response => {
      console.log('Response received:', response); // Log response object

      if (!response.ok) {
        // Handle non-OK responses here
        throw new Error(`Server responded with ${response.status} ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      console.log('Response text:', data); // Log the response text
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() === 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset();
      } else {
        throw new Error(data ? data : 'Form submission failed');
      }
    })
    .catch((error) => {
      // Log error details here
      console.error("Error during form submission:", error);
      displayError(thisForm, error.message);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
