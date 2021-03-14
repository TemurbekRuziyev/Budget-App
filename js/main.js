let money = [];
let index = 1;

//All budget
function calculate() {
    let inputText = document.getElementById('budget').value;
    if (inputText === '') {
        document.getElementById('jumbotron').classList.remove('d-none');
    }
    if (inputText !== '') {
        document.getElementById('allBudget').innerText = inputText;
        document.getElementById('balance').innerText = inputText;
        document.getElementById('jumbotron').classList.add('d-none');
    }
}

//expenses part
function writeExpense() {
    let inputExpenseName = document.getElementById('inputExpenseName').value;
    let inputExpenseValue = document.getElementById('inputExpenseValue').value;
    if (inputExpenseName === '' || inputExpenseValue === '') {
        document.getElementById('jumbotron-2').classList.remove('d-none');
    }
    if (inputExpenseName !== '' && inputExpenseValue !== '') {
        let obj = {
            name: inputExpenseName,
            price: inputExpenseValue,
            id: index
        };
        money.unshift(obj);
        index++;
        draw();

        let inputText = document.getElementById('budget').value;
        let inputExpenseValues = 0;
        for (let i = 0; i < money.length; i++) {
            inputExpenseValues += parseInt(money[i].price);
        }
        let balance = inputText - inputExpenseValues;
        document.getElementById('balance').innerText = balance;
        document.getElementById('expenses').innerText = inputExpenseValues;
        document.getElementById('inputExpenseValue').value = '';
        document.getElementById('inputExpenseName').value = '';
        document.getElementById('jumbotron-2').classList.add('d-none');
    }

}

function draw() {
    let div = '';
    for (let i = 0; i < money.length; i++) {
        div += '<div class="row">' +
            '                <div class="col-md-4">' +
            '                    <div class="card-body text-center pt-0 pb-1">' +
            '                        <div id="blockName">' +
            money[i].name +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '                <div class="col-md-4">' +
            '                    <div class="card-body text-center pt-0 pb-1">' +
            '                        <div id="blockValue">' +
            money[i].price +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '                <div class="col-md-4">' +
            '                    <div class="card-body text-center pt-0 pb-1">' +
            '                        <div id="editRemove">' +
            '                            <i class="fas fa-edit" onclick="edit(' + money[i].id + ')"></i>' +
            '                            <i class="fas fa-times text-danger" style="font-size: 22px; padding-top:5px; margin-left:20px;" onclick="remove( ' + money[i].id + ')"></i>' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '            </div>';
    }
    document.getElementById('draw').innerHTML = div;
}

//edit the list item
function edit(id) {
    for (let i = 0; i < money.length; i++) {
        if (money[i].id === id) {
            document.getElementById('inputExpenseName').value = money[i].name;
            document.getElementById('inputExpenseValue').value = money[i].price;
            money.splice(i, 1);

            let inputText = document.getElementById('budget').value;
            let inputExpenseValues = 0;
            for (let i = 0; i < money.length; i++) {
                inputExpenseValues += parseInt(money[i].price);
            }
            let balance = inputText - inputExpenseValues;
            document.getElementById('balance').innerText = balance;
            document.getElementById('expenses').innerText = inputExpenseValues;
        }
    }
    draw();
}

//remove the list one object;
function remove(id) {
    for (let i = 0; i < money.length; i++) {
        if (money[i].id === id) {
            money.splice(i, 1);

            let inputText = document.getElementById('budget').value;
            let inputExpenseValues = 0;
            for (let i = 0; i < money.length; i++) {
                inputExpenseValues += parseInt(money[i].price);
            }
            let balance = inputText - inputExpenseValues;
            document.getElementById('balance').innerText = balance;
            document.getElementById('expenses').innerText = inputExpenseValues;
            document.getElementById('inputExpenseValue').value = '';
            document.getElementById('inputExpenseName').value = '';
        }
    }
    draw();
}

// THE END BUDGET APP PROGRAMM :-);
//E'TIBORINGIZ UCHUN RAXMAT !!!