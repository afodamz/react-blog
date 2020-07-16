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

    switch(action.type){
        case 'REGISTER':{
            console.log('registration');
            
        }
        case 'LOGIN':{
            console.log('logging in')
        }
        default:{
            return state
        }
    }
}

export default registerreducer;