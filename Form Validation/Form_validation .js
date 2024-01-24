//! Contructor Validator

function Validator(options) {

    //! Hàm thực hiện validate

    function validator(inputElement, rule) {
        let orrorMessage = rule.test(inputElement.value)

        let orrorElement = inputElement.parentElement.querySelector(options.orrorSelector)

        if (orrorMessage) {
            orrorElement.innerText = orrorMessage

            inputElement.parentElement.classList.add('invalid')
        } else {
            orrorElement.innerText = ''

            inputElement.parentElement.classList.remove('invalid')
        }
    }


    //! Lấy element của form cần validate

    let formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function (rule) {
            let inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                //! Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validator(inputElement, rule)
                }
                //! Xử lý mỗi khi người dùng nhập input

                inputElement.oninput = function () {
                }
            }
        })
    }
}



//! Định nghĩa rules
//! Nguyên tắc rules:
/*
1: Khi có lỗi => trả ra message lỗi
2: Khi hợp lệ => Không trả gì ra cả
*/

Validator.isRequired = function (fullname) {
    return {
        selector: fullname,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}



Validator.isEmail = function (email) {
    return {
        selector: email,
        test: function (value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            return regex.test(value) ? undefined : 'Trường này phải là email'
        }
    }
}



Validator.minLength = function (password, min) {
    return {
        selector: password,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} ký tự`
        }
    }
}



Validator.isConfirmed = function (password_confirmation, getConfirmValue) {
    return {
        selector: password_confirmation,
        test: function (value) {
            return value === getConfirmValue() ? undefined : `Bạn nhập chưa đúng`
        }
    }
}