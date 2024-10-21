document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const summaryDiv = document.getElementById("summary");
  
    const inputFields = document.querySelectorAll(".input-field");
    inputFields.forEach((input) => {
      input.addEventListener("blur", validateInput);
    });
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      if (validateForm()) {
        displaySummary();
      }
    });
  
    function validateInput(event) {
      const input = event.target;
      const validationIcon = input.nextElementSibling;
  
      if (input.checkValidity()) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        validationIcon.className = "validation-icon valid";
      } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        validationIcon.className = "validation-icon invalid";
      }
    }
  
    function validateForm() {
      let isValid = true;
      inputFields.forEach((input) => {
        if (!input.checkValidity()) {
          isValid = false;
          input.classList.add("invalid");
          input.nextElementSibling.className = "validation-icon invalid";
        }
      });
      return isValid;
    }
  
    function displaySummary() {
      form.classList.add("hidden");
      summaryDiv.classList.remove("hidden");

      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;

      summaryDiv.innerHTML = `
        <h2>Summary</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>`;}
  });

  const countries = ["United States", "South Africa", "India"];
  const usStates = ["California", "New York", "Texas", "Florida"];
  const zaStates = ["Gauteng", "Kwazulu-Natal", "Limpopo", "Eastern-Cape"];
  const indianStates = ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi"];

  function populateDropdown(elementId, optionsArray) {
    const dropdown = document.getElementById(elementId);
    
    dropdown.innerHTML = '';
    
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select ' + elementId.charAt(0).toUpperCase() + elementId.slice(1);
    dropdown.appendChild(defaultOption);

    optionsArray.forEach(optionValue => {
      const option = document.createElement('option');
      option.value = optionValue;
      option.textContent = optionValue;
      dropdown.appendChild(option);
    });
  }

  populateDropdown('country', countries);

  document.getElementById('country').addEventListener('change', function() {
    const selectedCountry = this.value;
    let filteredStates = [];

    if (selectedCountry === 'United States') {
      filteredStates = usStates;
    } else if (selectedCountry === 'South Africa') {
      filteredStates = zaStates;
    } else if (selectedCountry === 'India') {
      filteredStates = indianStates;
    }

    populateDropdown('state', filteredStates);
    populateDropdown('city', []);
  });

  document.getElementById('state').addEventListener('change', function() {
    const selectedState = this.value;
    let filteredCities = [];
    const stateToCities = {
      "California": ["Los Angeles", "San Francisco", "San Diego"],
      "New York": ["New York City", "Buffalo", "Rochester"],
      "Texas": ["Houston", "Austin", "Dallas"],
      "Florida": ["Miami", "Orlando", "Tampa"],
      "Gauteng": ["Johannesburg", "Pretoria", "Soweto"],
      "Kwazulu-Natal": ["Durban", "Pietermaritzburg", "Umhlanga"],
      "Limpopo": ["Polokwane", "Thohoyandou", "Tzaneen"],
      "Eastern-Cape": ["Port Elizabeth", "East London", "Grahamstown"],
      "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
      "Karnataka": ["Bangalore", "Mysore", "Hubli"],
      "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
      "Delhi": ["New Delhi", "Noida", "Gurgaon"]
    };

    filteredCities = stateToCities[selectedState] || [];

    populateDropdown('city', filteredCities);
  });

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');

  form.addEventListener('submit', function (event) {
      let isValid = true;

      const firstNameInput = document.getElementById('first-name');
      const lastNameInput = document.getElementById('last-name');
      const userIdInput = document.getElementById('user-id');
      const phoneNumberInput = document.getElementById('phone-number');
      const referenceCodeInput = document.getElementById('reference-code');

      if (!isValidName(firstNameInput.value)) {
          isValid = false;
          markInputAsInvalid(firstNameInput);
      }

      if (!isValidName(lastNameInput.value)) {
          isValid = false;
          markInputAsInvalid(lastNameInput);
      }

      if (!isValidNumber(userIdInput.value)) {
          isValid = false;
          markInputAsInvalid(userIdInput);
      }

      if (!isValidPhoneNumber(phoneNumberInput.value)) {
          isValid = false;
          markInputAsInvalid(phoneNumberInput);
      }

      if (!isValidReferenceCode(referenceCodeInput.value)) {
          isValid = false;
          markInputAsInvalid(referenceCodeInput);
      }

      if (!isValid) {
          event.preventDefault();
      }
  });

  document.getElementById('reset-button').addEventListener('click', function () {
      resetValidation();
  });

  const resetButton = document.getElementById('reset-button');

  resetButton.addEventListener('click', function() {
  resetValidation();
  const inputFields = document.querySelectorAll('.input-field');
  inputFields.forEach(input => input.value = '');
  });

  function isValidName(name) {
      return /^[A-Za-z]+$/.test(name);
  }

  function isValidNumber(number) {
      return /^[0-9]+$/.test(number);
  }

  function isValidPhoneNumber(phoneNumber) {
      return /^[0-9]{10}$/.test(phoneNumber);
  }

  function isValidReferenceCode(referenceCode) {
      return /^[A-Za-z0-9]+$/.test(referenceCode);
  }

  function markInputAsInvalid(inputElement) {
      inputElement.classList.add('invalid');
  }

  function resetValidation() {
      const invalidInputs = document.querySelectorAll('.input-field.invalid');
      invalidInputs.forEach(input => input.classList.remove('invalid'));
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registration-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email-id");
    const userId = document.getElementById("user-id");
    const country = document.getElementById("country");
    const state = document.getElementById("state");
    const city = document.getElementById("city");
    const phoneNumber = document.getElementById("phone-number");
    const referenceCode = document.getElementById("reference-code");

    let isValid = true;

    if (firstName.value.trim() === "") {
      isValid = false;
      firstName.classList.add("invalid-field");
    } else {
      firstName.classList.remove("invalid-field");
    }

    if (lastName.value.trim() === "") {
      isValid = false;
      lastName.classList.add("invalid-field");
    } else {
      lastName.classList.remove("invalid-field");
    }

    if (email.value.trim() === "") {
      isValid = false;
      email.classList.add("invalid-field");
    } else {
      email.classList.remove("invalid-field");
    }

    if (isValid) {
      const summary = document.createElement("div");
      summary.innerHTML = `
        <h2>Registration Summary</h2>
        <p><strong>Name:</strong> ${firstName.value} ${lastName.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p>Thank you for registering!</p>`;
      form.parentNode.replaceChild(summary, form);
    }
  });
});
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');

firstNameInput.addEventListener('blur', function() {
  validateInput(firstNameInput, isValidName);
});

lastNameInput.addEventListener('blur', function() {
  validateInput(lastNameInput, isValidName);
});

function validateInput(inputElement, validationFunction) {
  if (validationFunction(inputElement.value)) {
    inputElement.classList.remove('invalid');
  } else {
    inputElement.classList.add('invalid');
  }
}
