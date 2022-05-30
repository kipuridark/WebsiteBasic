
// Object constructor

function User(fName, lName, Avt){
    this.fName = fName;
    this.lName = lName;
    this.Avt = Avt;

    this.getName = function(){
        return `${this.fName} ${this.lName}`;
    }
}

var author = new User('Tran', 'Trung', 'Avatar');
var user = new User('Nguyen', 'Vu', 'Avatar');

author.title = 'Chia sẻ dạo tại đây!';
user.comt = 'comment của user';

console.log(author.getName());
console.log(user.getName());


var hocsinh = function(Name, MSSV, Avt){
    this.Name = Name;
    this.MSSV = MSSV;
    this.Avt = Avt;
}

var HS1 = new hocsinh('Tran Thanh Trung', '18521562', 'Avatar');

console.log(HS1.Name);
