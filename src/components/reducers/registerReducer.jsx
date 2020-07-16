const registerreducer=(state, action)=>{

    if (state ===undefined){
        return {
            people:[
                {name: '',
                email: '',
                logIn: false,
                password: ''
            }

            ]
        }
    }
    switch (action.type) {
        case 'REGISTER':
            console.log('registration');
            break;
        case 'LOGIN':
            console.log('logging in');
            break;
    
        default:
            break;
    }
}

export default registerreducer;