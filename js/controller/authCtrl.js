controller.register = async function (registerInfo) {
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
            displayName: displayName
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('register-success', 'An email verification has been sent to your email')

    } catch (err) {
        view.setText('register-error', err.message)
    }
    view.enable('register-submit-btn')
}

controller.login = async function (loginInfo) {
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