function check() {
    var dobInput = document.getElementById('dob');
    var res = document.getElementById('res');
    var img = document.createElement('img');

    if (!dobInput.value || !validateDate(dobInput.value)) {
        alert('Error. Check the date and try again.');
        return;
    }

    var fgen = document.getElementsByName('radgen');
    var dob = new Date(dobInput.value);
    var age = calculateAge(dob);
    var gender = '';

    img.setAttribute('id', 'photo');
    img.setAttribute('class', 'image');

    if (fgen[0].checked) {
        gender = 'Man';
        setGenderImage(age, 'man', img);
    } else if (fgen[1].checked) {
        gender = 'Woman';
        setGenderImage(age, 'woman', img);
    }

    res.style.textAlign = 'center';
    res.innerHTML = `You are a ${gender} and your age is ${age} years old.`;
    res.appendChild(img);
}

function calculateAge(birthDate) {
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function setGenderImage(age, gender, imgElement) {
    if (age < 10) {
        imgElement.setAttribute('src', `baby-${gender}.jpg`);
    } else if (age < 21) {
        imgElement.setAttribute('src', `young-${gender}.jpg`);
    } else if (age < 50) {
        imgElement.setAttribute('src', `adult-${gender}.jpg`);
    } else {
        imgElement.setAttribute('src', `old-${gender}.jpg`);
    }
}

function validateDate(dateString) {
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.match(regex) !== null;
}
