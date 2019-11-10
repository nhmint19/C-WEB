const view = {};

// name register | login, 
view.showComponent = function(name) {
    switch(name) {
        case 'register': {
            //1. html hien thi len man hinh
            let app = document.getElementById('app')
            app.innerHTML = components.register
            //2. gan su kien cho cac the 
            let link = document.getElementById('register-link')
            link.onclick = linkClickHandler

            let form = document.getElementById('register-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent("login")
            }

            function formSubmitHandler(event) {
                event.preventDefault() // chan su kien ko cho cho gui thong tin len thanh dia chi
                
                //1.lay thong tin cua user
                let registerInfo = {
                    firstname: form.firstname.value,
                    lastname: form.lastname.value,
                    email: form.email.value,
                    password: form.password.value,
                    confirmPassword: form.confirmPassword.value
                }
                console.log(registerInfo)
                
                //2.validate thong tin
                let validateResult = [
                    view.validate(registerInfo.firstname, 'firstname-error', 'Invalid firstname!'),
                    view.validate(registerInfo.firstname, 'lastname-error', 'Invalid firstname!'),  
                    view.validate(registerInfo.email && registerInfo.email.includes("@"),"email-error", "Invalid email!"),
                    view.validate(registerInfo.password && registerInfo.password.length >= 6,"password-error", "Your password must have at least 6 letters."),
                    view.validate(registerInfo.confirmPassword && registerInfo.confirmPassword.length >= 6 && registerInfo.confirmPassword == registerInfo.password, "confirmPassword-error", "Invalid confirm password!")
                ]
                console.log(validateResult)
            
                //3.Gui thong tin di 
                if(allPassed(validateResult)) {
                    controller.register(registerInfo)
                }

            }
            break 
        }
        case 'login': {
            let app = document.getElementById('app')
            app.innerHTML = components.login

            let link = document.getElementById('login-link')
            link.onclick = linkClickHandler

            let form = document.getElementById('login-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent("register")
            }

            function formSubmitHandler(event) {
                event.preventDefault()
                // 1. lay thong tin
                let loginInfo = {
                    email: form.email.value,
                    password: form.password.value
                }
                // console.log(loginInfo)
                // 2. xac thuc thong tin
                let validateResult = [
                    view.validate(loginInfo.email && loginInfo.email.includes("@"),"email-error", "Invalid email!"),
                    view.validate(loginInfo.password && loginInfo.password.length >= 6, "password-error", "Your password must have at least 6 letters.")
                ]
                // 3. gui thong tin cho server kiem tra
                if (allPassed(validateResult)) {
                    controller.login(loginInfo)
                } 
                
            }
            break
        }
        case 'chat': {
            let app = document.getElementById("app")
            app.innerHTML = components.nav + components.chat

            controller.loadConversations()
            controller.setupDatabaseChange()
            // view.setText('user-email', firebase.auth().currentUser.email)
            view.setText('user-email', firebase.auth().currentUser.displayName)

            let btnSignOut = document.getElementById("sign-out-btn")
            btnSignOut.onclick = signOut

            // formChatSubmit
            let formChat = document.getElementById('form-chat')
            formChat.onsubmit = formChatSubmitHandler

            function signOut() {
                firebase.auth().signOut()
            }

            function formChatSubmitHandler(e) {
                e.preventDefault()
                // 1.get messageContent
                let messageContent = formChat.message.value.trim()
                if(messageContent) {
                    controller.addMessage(messageContent)
                }
                // 2. create message from messageContent
                // 3. update to currentConversation.message
            }
            break
        }
        case 'loading': {
            let app = document.getElementById("app")
            app.innerHTML = components.loading
        }
    }
}

view.showCurrentConversation = function() {
    if(model.currentConversation) {
        let messages = model.currentConversation.messages       
        let listMessages = document.getElementById('list-messages')
        listMessages.innerHTML = ''
        for(let message of messages) {
            let className = ""
            if(message.owner == firebase.auth().currentUser.email) {
                className = "message-chat your"
            } else {
                className = "message-chat"
            }
            let html = `
                <div class= "${className}">
                    <div class="chat-user-indicator">${message.owner}</div>
                    <span>${message.content}</span>
                </div>
            `
            listMessages.innerHTML += html
        }

        listMessages.scrollTop = listMessages.scrollHeight
        // show all messagesto screen
    }
}

// supporting function
view.setText = function(id, text) {
    document.getElementById(id).innerText = text
}

view.validate = function(condition, idErrorTag, messageError) {
    if(condition) {
        view.setText(idErrorTag,'')
        return true
    } else {
        view.setText(idErrorTag, messageError)
        return false
    }
}

view.disable = function(id) {
    document.getElementById(id).setAttribute('disabled',true)
}

view.enable = function(id) {
    document.getElementById(id).removeAttribute('disabled',true)
}

function allPassed(validateResult) {
    for(let validate of validateResult) {
        if(!validate) {
            return false
        }
    }
    return true
}

