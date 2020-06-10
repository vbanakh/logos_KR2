
$(function () {
    console.log('Login: admin, Password: logos')
    const area = document.querySelector('.area');
    const fonts = ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'];
    let fontTarget = $('#familyFont').siblings('.dropdown-menu');
    const colors = ['rgb(109, 177, 152)', 'rgb(92, 152, 130)', 'rgb(122, 190, 120)', 'rgb(104, 163, 100)', 'rgb(92, 152, 208)', 'rgb(77, 126, 172)', 'rgb(135, 104, 172)', 'rgb(123, 88, 164)', 'rgb(59, 72, 90)', 'rgb(48, 62, 76)', 'rgb(229, 193, 81)', 'rgb(219, 160, 74)', 'rgb(205, 136, 71)', 'rgb(183, 102, 53)', 'rgb(198, 102, 79)', 'rgb( 163, 80, 58)', 'rgb(237, 238, 238)', 'rgb(189, 194, 195)', 'rgb(152, 162, 161)', 'rgb(129, 139, 138)', 'rgb(0, 0, 0)'];
    let colorTarget = $('#colorHead').siblings('.modal-body');
    const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpeg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg'];

    //Bold text
    $('.bold').click(function () {
        $('.bottomBlok').toggleClass('boldText');
    })
    //Italic text
    $('.italic').click(function () {
        $('.bottomBlok').toggleClass('italicText');
    })
    // Text underline
    $('.underline').click(function () {
        $('.bottomBlok').toggleClass('underlineText');
    })
    //Strike text
    $('.strike').click(function () {
        $('.bottomBlok').toggleClass('strikeText');
    })

    //Align-text setting
    $('.textLeft').click(function () {
        $('.bottomBlok').removeClass('alignCenter');
        $('.bottomBlok').removeClass('alignRight')
        $('.bottomBlok').addClass('alignLeft');
    })
    $('.textCenter').click(function () {
        $('.bottomBlok').removeClass('alignLeft');
        $('.bottomBlok').removeClass('alignRight');
        $('.bottomBlok').addClass('alignCenter');

    })
    $('.textRight').click(function () {
        $('.bottomBlok').removeClass('alignLeft');
        $('.bottomBlok').removeClass('alignCenter');
        $('.bottomBlok').addClass('alignRight');
    })

    //Font-family setting
    $.each(fonts, function (idx, fontName) {
        fontTarget.append($('<li><a data-edit="' + fontName + '" class="dropdown-item" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
    });
    $('#font>li>a').each(function (i, element) {
        $(element).click(function () {
            event.preventDefault();
            let get = $(this).attr('data-edit');
            $('.bottomBlok').css('font-family', `${get}`);
        })
    })

    //Font size setting
    $('#size>li>a').each(function (i, element) {
        $(element).click(function () {
            event.preventDefault();
            let get = $(this).attr('data-edit');
            $('.bottomBlok').css('font-size', `${get}`);
        })
    })

    //Color text setting
    $.each(colors, function (idx, colorName) {
        colorTarget.append($('<div data-edit="' + colorName + '"  class="colors" ></div>'));
    });
    $('.colors').each(function (i, element) {
        let get = $(element).attr('data-edit');
        $(element).css('background', `${get}`);
    })
    $('.colors').each(function (i, element) {
        $(element).click(function () {
            event.preventDefault();
            let get = $(this).attr('data-edit');
            $('.bottomBlok').css('color', `${get}`);
        })
    })
    //Background color setting
    $.each(colors, function (idx, colorName) {
        $('#backgroundColor').append($('<div data-edit="' + colorName + '"  class="colorsBackground" ></div>'));
    });
    $('.colorsBackground').each(function (i, element) {
        let get = $(element).attr('data-edit');
        $(element).css('background', `${get}`);
    })
    $('.colorsBackground').each(function (i, element) {
        $(element).click(function () {
            event.preventDefault();
            let get = $(this).attr('data-edit');
            $('.bottomBlok').css('background', `${get}`);
        })
    })

    //Background image setting
    $.each(images, function (idx, imageName) {
        $('#backgroundImage').append($('<div data-edit="' + imageName + '"  class="images" ></div>'));
    });
    $('.images').each(function (i, element) {
        $(element).css('background', `url(${images[i]})`);
        $(element).css('background-repeat', 'no-repeat');
        $(element).css('background-size', 'cover');
        $(element).css('background-position', 'center');
    })
    $('.images').each(function (i, element) {
        $(element).click(function () {
            event.preventDefault();
            $('.bottomBlok').css('background', `url(${images[i]})`);
            $('.bottomBlok').css('background-repeat', 'no-repeat');
            $('.bottomBlok').css('background-size', 'cover');
            $('.bottomBlok').css('background-position', 'center');
        })
    })

    // Upload background image
    $('#inputGroupFile02').change(function () {
        let url = URL.createObjectURL(event.target.files[0]);
        $('.bottomBlok').css('background', `url(${url})`);
        $('.bottomBlok').css('background-repeat', 'no-repeat');
        $('.bottomBlok').css('background-size', 'cover');
        $('.bottomBlok').css('background-position', 'center');
    })

    //control buttons
    $('#btnColor').click(function () {
        $(this).addClass('active')
        $('#btnImage').removeClass('active')
        $('#btnFile').removeClass('active')
        $('#backgroundColor').removeClass('hidden')
        $('#backgroundColor').addClass('backgroundDisplay')
        $('#backgroundFile').removeClass('backgroundDisplay')
        $('#backgroundFile').addClass('hidden'),
            $('#backgroundImage').removeClass('backgroundDisplay')
        $('#backgroundImage').addClass('hidden')
    })
    $('#btnImage').click(function () {
        $(this).addClass('active'),
            $('#btnColor').removeClass('active'),
            $('#btnFile').removeClass('active'),
            $('#backgroundImage').removeClass('hidden'),
            $('#backgroundImage').addClass('backgroundDisplay'),
            $('#backgroundColor').removeClass('backgroundDisplay'),
            $('#backgroundColor').addClass('hidden'),
            $('#backgroundFile').removeClass('backgroundDisplay'),
            $('#backgroundFile').addClass('hidden')
    })
    $('#btnFile').click(function () {
        $(this).addClass('active'),
            $('#btnColor').removeClass('active'),
            $('#btnImage').removeClass('active'),
            $('#backgroundFile').removeClass('hidden'),
            $('#backgroundFile').addClass('backgroundDisplay'),
            $('#backgroundColor').removeClass('backgroundDisplay'),
            $('#backgroundColor').addClass('hidden'),
            $('#backgroundImage').removeClass('backgroundDisplay'),
            $('#backgroundImage').addClass('hidden')
    })

    //import data to/from textarea
    $('.slash').click(function () {
        if ($('#slash').hasClass('disabled')) {
            return
        }
        $('.mainBlok').addClass('hidden')
        $('.editBlok').removeClass('hidden')
        let a = $('.bottomBlok').html()
        $('.area').val(`${a}`)
    })
    $('.save').click(function () {
        $('.mainBlok').removeClass('hidden'),
            $('.editBlok').addClass('hidden')
        let b = $('.area').val()
        $('.bottomBlok').html(`${b}`)
    })

    //Create table
    $('#createBtn').click(function () {
        event.preventDefault();
        event.stopPropagation();
        let formTable = document.forms['createTable'];
        let countTrValue = formTable.countTR.value;
        let countTdValue = formTable.countTD.value;
        let widthTdValue = formTable.widthOfTD.value;
        let heightTdValue = formTable.heightOfTD.value;
        let widthBorderValue = formTable.widthOfBorder.value;
        let typeBorderValue = formTable.styleBorder.value;
        let colorBorderValue = formTable.colorBorder.value;

        let countTr = formTable.countTR;
        let countTd = formTable.countTD;
        let widthTd = formTable.widthOfTD;
        let heightTd = formTable.heightOfTD;
        let widthBorder = formTable.widthOfBorder;
        let typeBorder = formTable.styleBorder;
        let colorBorder = formTable.colorBorder;

        countTr.classList.remove('is-invalid')
        countTd.classList.remove('is-invalid')
        widthTd.classList.remove('is-invalid')
        heightTd.classList.remove('is-invalid')
        widthBorder.classList.remove('is-invalid')
        typeBorder.classList.remove('is-invalid')
        colorBorder.classList.remove('is-invalid')

        if (countTrValue == "") {
            countTr.classList.add('is-invalid')
            $('.invalidMessageTb').removeClass('hidden');
        }
        if (countTdValue == "") {
            countTd.classList.add('is-invalid')
            $('.invalidMessageTb').removeClass('hidden');
        }
        if (widthTdValue == "") {
            widthTd.classList.add('is-invalid')
            $('.invalidMessageTb').removeClass('hidden');
        }
        if (heightTdValue == "") {
            heightTd.classList.add('is-invalid')
            $('.invalidMessageTb').removeClass('hidden');
        }
        if (widthBorderValue == "") {
            widthBorder.classList.add('is-invalid')
            $('.invalidMessageTb').removeClass('hidden');
        }
        if (typeBorderValue == "") {
            typeBorder.classList.add('is-invalid')
            $('.invalidMessageTb').removeClass('hidden');
        }
        if (colorBorderValue == "") {
            colorBorder.classList.add('is-invalid')
            $('.invalidMessageTb').removeClass('hidden');
        }
        if (countTrValue == "" || countTdValue == "" || widthTdValue == "" || heightTdValue == "" || widthBorderValue == "" || colorBorderValue == "" || typeBorderValue == "") {
            return
        }
        else {
            $('.invalidMessageTb').addClass('hidden');
            countTr.classList.remove('is-invalid')
            countTd.classList.remove('is-invalid')
            widthTd.classList.remove('is-invalid')
            heightTd.classList.remove('is-invalid')
            widthBorder.classList.remove('is-invalid')
            typeBorder.classList.remove('is-invalid')
            colorBorder.classList.remove('is-invalid')
        }
        area.value += `<table>`;
        for (let i = 1; i <= countTrValue; i++) {
            area.value += `<tr>`;
            for (let j = 1; j <= countTdValue; j++) {
                area.value += `<td style="width:${widthTdValue}px; height:${heightTdValue}px; border: ${widthBorderValue}px ${typeBorderValue} ${colorBorderValue}">TD</td>`;
            }
            area.value += `</tr>`;
        }
        area.value += `</table>`;
    })

    //Create ol list
    $('#createOlliBtn').click(function () {
        event.preventDefault();
        event.stopPropagation();
        let form = document.forms['createOlli'];
        let countLiValue = form.countLi.value;
        let typeMarksValue = form.typeMark.value
        let countLi = form.countLi;
        let typeMark = form.typeMark;
        countLi.classList.remove('is-invalid')
        typeMark.classList.remove('is-invalid')
        if (countLiValue == "") {
            countLi.classList.add('is-invalid')
            $('.invalidMessageOl').removeClass('hidden');
        }
        if (typeMarksValue == "") {
            typeMark.classList.add('is-invalid')
            $('.invalidMessageOl').removeClass('hidden');
        }
        if (typeMarksValue == "" || countLiValue == "") {
            return
        }
        else {
            $('.invalidMessageOl').addClass('hidden');
            countLi.classList.remove('is-invalid')
            typeMark.classList.remove('is-invalid')
        }
        area.value += `<ol type="${typeMarksValue}">`;
        for (let k = 1; k <= countLiValue; k++) {
            area.value += `<li>Item</li>`;
        }
        area.value += `</ol>`;
    })

    //Create ul list
    $('#createUlliBtn').click(function () {
        event.preventDefault();
        event.stopPropagation();
        let form = document.forms['createUlli'];
        let countLiValue = form.countLi.value;
        let typeMarksValue = form.typeMark.value
        let countLi = form.countLi;
        let typeMark = form.typeMark;
        countLi.classList.remove('is-invalid')
        typeMark.classList.remove('is-invalid')
        if (countLiValue == "") {
            countLi.classList.add('is-invalid')
            $('.invalidMessage').removeClass('hidden');
        }
        if (typeMarksValue == "") {
            typeMark.classList.add('is-invalid')
            $('.invalidMessage').removeClass('hidden');
        }
        if (typeMarksValue == "" || countLiValue == "") {
            return
        }
        else {
            $('.invalidMessage').addClass('hidden');
            countLi.classList.remove('is-invalid')
            typeMark.classList.remove('is-invalid')
        }
        area.value += `<ul type="${typeMarksValue}">`;
        for (let k = 1; k <= countLiValue; k++) {
            area.value += `<li>Item</li>`;
        }
        area.value += `</ul>`;
    })

    //Reset forms
    $('#resetUl').click(function () {
        let form = document.forms['createUlli'];
        form.countLi.value = '';
        form.typeMark.value = '';
    })
    $('#resetOl').click(function () {
        let form = document.forms['createOlli'];
        form.countLi.value = '';
        form.typeMark.value = '';
    })
    $('#resetBtn').click(function () {
        let formReset = document.forms['createTable'];
        formReset.countTR.value = '';
        formReset.countTD.value = '';
        formReset.widthOfTD.value = '';
        formReset.heightOfTD.value = '';
        formReset.widthOfBorder.value = '';
        formReset.styleBorder.value = '';
        formReset.colorBorder.value = '';
    })
    //regEx
    let regExpPass = /\w{4,15}/;
    //Sing in
    $('#signIn').click(function () {
        event.preventDefault();
        event.stopPropagation();
        let form = document.forms['signIn'];
        let loginValue = form.login.value;
        let passValue = form.pass.value;
        let login = form.login;
        let pass = form.pass;
        login.classList.remove('is-invalid')
        pass.classList.remove('is-invalid')
        if (loginValue == "" || loginValue != "admin") {
            login.classList.add('is-invalid')
        }
        if (loginValue != "admin") {
            $('.invalidMessageSignIn1').addClass('hidden')
            $('.invalidMessageSignIn2').removeClass('hidden')

        }
        if (!regExpPass.test(pass.value)) {
            $('.invalidMessageSignIn2').removeClass('hidden')
            $('.invalidMessageSignIn1').addClass('hidden')
        }
        if (passValue == "") {
            pass.classList.add('is-invalid')
        }
        if (loginValue == "" || passValue == "") {
            $('.invalidMessageSignIn1').removeClass('hidden')
            $('.invalidMessageSignIn2').addClass('hidden')
            return
        }
        if (regExpPass.test(pass.value) && loginValue == "admin") {
            $('.invalidMessageSignIn1').addClass('hidden')
            $('.invalidMessageSignIn2').addClass('hidden')
            $('#slash').removeClass('disabled')
            $('.unlock').removeClass('hidden')
            $('.lock').addClass('hidden')
        }
    })
    //Sign out buttons
    $('#cancelBtn').click(function () {
        return
    })
    $('#signOutBtn').click(function () {
        $('#slash').addClass('disabled')
        $('.unlock').addClass('hidden')
        $('.lock').removeClass('hidden')
    })



});

