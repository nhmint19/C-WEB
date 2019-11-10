const controller = {}

controller.register = async function(registerInfo) {
    let email = registerInfo.email
    let password = registerInfo.password
    let displayName = registerInfo.lastname + ' ' + registerInfo.firstname
    view.setText('register-error', '')
    view.setText('register-success', '')

    view.disable('register-submit-btn')
    // tao account
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log("create user!")
        await firebase.auth().currentUser.updateProfile({
            displayName:displayName
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('register-success', 'An email verification has been sent to your email')
        
    } catch(err) {
        view.setText('register-error', err.message)
    }
    view.enable('register-submit-btn')
}

controller.login = async function(loginInfo) {
    let email = loginInfo.email
    let password = loginInfo.password
    
    view.setText('login-error', '')
    view.disable('login-submit-btn')
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        if (!result.user.emailVerified) {
            throw new Error("You must verify your email!")
        }
    } catch (err) {
        view.setText('login-error', err.message)
        view.enable('login-submit-btn')
    }
}

controller.loadConversations = async function() {
    ////// firebase function can be found in firebase documents on the website
    let result = await firebase.firestore().collection('conversations').get()
    let docs = result.docs

    // 1. bien documents ve dang du lieu dung duoc (transform documents)
    let conversations = []
    for(let doc of docs) {
        let conversation = transformDoc(doc)
        conversations.push(conversation)
    }

    // 2. save data to model 
    model.saveConversations(conversations)
    if (conversations.length) {
        let currentConversation = conversations[0]
        model.saveCurrentConversation(currentConversation)
    }
    // console.log(model)
    
    // 3. show data to view
    view.showCurrentConversation()
}

controller.addMessage = async function(messageContent) {
    let message = {
        content: messageContent,
        owner:firebase.auth().currentUser.email,
        createdAt: new Date().toISOString(),
    }
    view.disable('form-chat-submit-btn')
    if(model.currentConversation) {
        await firebase.firestore()
        .collection('conversations')
        .doc(model.currentConversation.id)
        .update({
            messages: firebase.firestore.FieldValue.arrayUnion(message)
        })
        document.getElementById('form-chat-input').value = ''
    }
    view.enable('form-chat-submit-btn')
}

controller.setupDatabaseChange = function() {
    let isFirstTimeRun = true
    firebase.firestore().collection('conversations')
    .onSnapshot(snapshotHandler)

    function snapshotHandler(snapshot) {
        if(isFirstTimeRun) {
            isFirstTimeRun = false
            return
        }
        let docChanges = snapshot.docChanges()

        for (let docChange of docChanges) {
            let conversation = transformDoc(docChange.doc)
            model.updateConversation(conversation)
            if(model.currentConversation && model.currentConversation.id == conversation.id) {
                view.showCurrentConversation()
            }
        }
    }
}

function transformDoc(firestoreDoc) {
    let data = firestoreDoc.data()
    data.id = firestoreDoc.id

    return data
}


// try catch throw demo
        // function test() {
        //     try{
        //         console.log("a")
        //         console.log("b")
        //         validate(1)
        //         validate(-1)
        //         console.log("c")
        //     } catch(err) {
        //         console.log("ERROR:" + err.message)
        //     }
        // }

        // function validate(number) {
        //     if(number < 0) {
        //         throw new Error("Number must be >= 0")
        //     } else {
        //         console.log("true number: ", + number)
        //     }
        // }

        // test()