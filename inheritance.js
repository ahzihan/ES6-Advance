class TeamMember {
    name;
    address = "BD";
    constructor ( name, address ) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSuport;
    designation = 'Support Web Deb';
    constructor ( name, address, time ) {
        super( name, address );
        this.groupSuport = time;
    }
    startSession() {
        console.log( this.name, 'Start a Support Session' );
    }
}
const nahid = new Support( 'Nahid Emon', 'Mirpur', 10 );
const sumon = new Support( 'Md Sumon', 'Gazipur', 11 );
const rasel = new Support( 'Md Rasel Mollah', 'Uttora', 12 );
const tamim = new Support( 'Tamim Khan', 'Bhola', 3 );
// console.log( nahid, sumon, rasel, tamim );
// nahid.startSession();
class NeptunDeb extends TeamMember {
    codeEditor;
    designation = 'Neptun Web Deb';
    constructor ( name, address, editor ) {
        super( name, address );
        this.codeEditor = editor;
    }
    releaseApp( version ) {
        console.log( this.name, 'Release App', version );
    }
}
const zihan = new NeptunDeb( 'AH Zihan', 'Mohammadpur-1207', 'Android Studio' );
zihan.releaseApp( '5.7.0' );
class StudentCare extends TeamMember {
    designation = 'Student Care Web Deb';
    buildARutine( student ) {
        console.log( this.name, 'Build a Rutine For', student );
    }
}
const zahid = new StudentCare( 'Zahid Hasan', 'Nator' );
console.log( nahid, zihan, zahid );