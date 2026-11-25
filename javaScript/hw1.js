

// const array = ['hello','owu','com','ua',1,10,99,123,3.14,2.7,16,true,false];
// for (let i = 0 ; i < array.length; i++) {
//     console.log(array[i])
/// tak краще )
// }




const hello = 'hello';
const owu   =    'owu';
const com   =    'com';
const ua    =    'ua';
const one   =      1;
const ten   =      10;
const num   =     -999;
const num2  =      3.14;
const fNum  =      2.7;
const num16 =      16;
const bool1 =      true;
const bool2 =      false;
////////////////////////////////
console.log(`
    ${hello}
    \n${owu}
    \n${com}
    \n${ua}
    \n${one}
    \n${ten}
    \n${num}
    \n${num2}
    \n${fNum}
    \n${num16}
    \n${bool1}
    \n${bool2}
    `);
    ///////////////////////////////////

    const first_name     =  "Oleksandr";
    const last_name      =  "Prodaniuk";
    const date_of_birth  = "23.06.1999";

    console.log(`FirstName:${first_name}  LastName:${last_name}  DateOfBirth:${date_of_birth}`)

    /////////////////////////////////////

    let a = 100;
    let b = "100";
    let c = true;

    console.log(` type of: A => ${typeof (a)}\n type of: B => ${typeof(b)}\n type of: C => ${typeof(c)}`);
/////////////////////////////////////////

    let extra_NAME_prompt   = prompt  ('what is your name ? ');
    let extra_L_NAME_prompt = prompt  ('what is your last name ?');
    let extra_date_prompt   = prompt  ('please tell us your date of birth ');

    const userData = {
        name:extra_NAME_prompt,
        last:extra_L_NAME_prompt,
        date:extra_date_prompt,
    }
alert(`Welcome ${userData.name} ${userData.last} ${userData.date}`)
console.log(`User has been created:${userData.name} ${userData.last} ${userData.date}`)
