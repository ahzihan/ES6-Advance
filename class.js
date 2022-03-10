class Support {
    name;
    address = "BD";
    designation = 'Support Web Deb';
    constructor ( name, address ) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log( this.name, 'Start a Support Session' );
    }
}
const nahid = new Support( 'Nahid Emon', 'Mirpur' );
const sumon = new Support( 'Md Sumon', 'Gazipur' );
const rasel = new Support( 'Md Rasel Mollah', 'Uttora' );
const tamim = new Support( 'Tamim Khan', 'Bhola' );
console.log( nahid, sumon, rasel, tamim );
nahid.startSession();