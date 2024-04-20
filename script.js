var countryImage;

function Country(id) {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').classList = 'show';

    countryImage = document.getElementById(id).attributes[0].value;
}

var userName;
function enterName() {
    userName = document.getElementById('enterYourName').value;

    if(userName.length >= 3) {
        document.getElementById('page2').classList = 'hide';
        document.getElementById('page3').classList = 'show';
    }
    console.log(userName, 'username');
}

var eidiSendOrReceive;

function Eidi(id) {
    eidiSendOrReceive = document.getElementById(id).innerHTML;

    document.getElementById('page3').classList = 'hide';

    if(eidiSendOrReceive == 'Eidi send') {
        document.getElementById('page4').classList = 'show';
    }
    else if(eidiSendOrReceive == 'Eidi recieve') {
        document.getElementById('page5').classList = 'show';
    }
}

var receiver_Name;

function receiverName() {
    receiver_Name = document.getElementById('enterReceiverName').value;

    document.getElementById('userName').innerHTML = userName;
    document.getElementById('receiverName').innerHTML = receiver_Name;

    if(receiver_Name.length >= 3) {
        document.getElementById('page4').classList = 'hide';
        document.getElementById('page6').classList = 'show';
    }
    document.getElementById('sendernameimg').attributes[0].value;
}

var counter10 = 0;
var counter20 = 0;
var counter50 = 0;
var counter100 = 0;
var counter500 = 0;
var counter1000 = 0;
var counter5000 = 0;

var note10s = 0;
var note20s = 0;
var note50s = 0;
var note100s = 0;
var note500s = 0;
var note1000s = 0;
var note5000s = 0;

var sum = 0;

function pkr10() {
    let note = 10;
    counter10++;
    counter20 == 0;
    counter50 == 0;
    counter100 == 0;
    counter500 == 0;
    counter1000 == 0;
    counter5000 == 0;

    note10s = note * counter10;
    sum = note10s + note20s + note50s + note100s + note500s + note1000s + note5000s;
    document.getElementById('limit').innerHTML = 'pkr: ' + sum;
}

function pkr20() {
    let note = 20;
    counter20++;
    counter10 == 0;
    counter50 == 0;
    counter100 == 0;
    counter500 == 0;
    counter1000 == 0;
    counter5000 == 0;

    note20s = note * counter20;
    sum = note10s + note20s + note50s + note100s + note500s + note1000s + note5000s;
    document.getElementById('limit').innerHTML = 'pkr: ' + sum;
}

function pkr50() {
    let note = 50;
    counter50++;
    counter20 == 0;
    counter10 == 0;
    counter100 == 0;
    counter500 == 0;
    counter1000 == 0;
    counter5000 == 0;

    note50s = note * counter50;
    sum = note10s + note20s + note50s + note100s + note500s + note1000s + note5000s;
    document.getElementById('limit').innerHTML = 'pkr: ' + sum;
}


function pkr100() {
    let note = 100;
    counter100++;
    counter20 == 0;
    counter50 == 0;
    counter100 == 0;
    counter500 == 0;
    counter1000 == 0;
    counter5000 == 0;

    note100s = note * counter100;
    sum = note10s + note20s + note50s + note100s + note500s + note1000s + note5000s;
    document.getElementById('limit').innerHTML = 'pkr: ' + sum;
}

function pkr500() {
    let note = 500;
    counter500++;
    counter20 == 0;
    counter50 == 0;
    counter100 == 0;
    counter10 == 0;
    counter1000 == 0;
    counter5000 == 0;

    note500s = note * counter500;
    sum = note10s + note20s + note50s + note100s + note500s + note1000s + note5000s;
    document.getElementById('limit').innerHTML = 'pkr: ' + sum;
}

function pkr1000() {
    let note = 1000;
    counter1000++;
    counter20 == 0;
    counter50 == 0;
    counter100 == 0;
    counter500 == 0;
    counter10 == 0;
    counter5000 == 0;

    note1000s = note * counter1000;
    sum = note10s + note20s + note50s + note100s + note500s + note1000s + note5000s;
    document.getElementById('limit').innerHTML = 'pkr: ' + sum;
}


function pkr5000() {
    let note = 5000;
    counter5000++;
    counter20 == 0;
    counter50 == 0;
    counter100 == 0;
    counter500 == 0;
    counter1000 == 0;
    counter5000 == 0;

    note5000s = note * counter5000;
    sum = note10s + note20s + note50s + note100s + note500s + note1000s + note5000s;
    document.getElementById('limit').innerHTML = 'pkr: ' + sum;
}

function Send() {
    // if(sum > 100000) {
    //     document.getElementById('limit1').innerHTML = 'Please send Eidi less than 100,000';
    // }

    document.getElementById('btn1').style.display = 'none';
    document.getElementById('noteImages').style.display = 'none';
    document.getElementById('limit').style.display = 'none';
    document.getElementById('done').classList = 'show';
    document.getElementById('eidi').innerHTML = 'pkr: ' + sum;
    alert(userName + ' send ' + sum + ' pkr ' + ' eidi to ' + receiver_Name + ' successfully.');
}

function generateId() {
    let yourId = document.getElementById('userId').value;
    let generatedId = parseInt(Math.random() * 2 + 1);

    console.log(generatedId);

    if(yourId == generatedId) {
        document.getElementById('page5').classList = 'hide';

        document.getElementById('page7').classList = 'show';
        document.getElementById('para3').classList = 'show';
        document.getElementById('para2').innerHTML = 'Haider Abbas pkr: 1000/- Eidi send to ' + userName;
    }
    else {
        document.getElementById('page5').classList = 'hide';
        document.getElementById('page7').classList = 'show';
        document.getElementById('para1').classList = 'show';
        document.getElementById('userIdNo').innerHTML = yourId;
    }
}