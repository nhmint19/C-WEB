controller.loadConversations = async function () {
    ////// firebase function can be found in firebase documents on the website
    let currentEmail = firebase.auth().currentUser.email
    let result = await firebase.firestore()
        .collection('conversations')
        .where('users', 'array-contains', currentEmail)
        .get()
    let docs = result.docs

    // 1. bien documents ve dang du lieu dung duoc (transform documents)
    let conversations = docs.map(transformDoc)
    // 2. save data to model 
    model.saveConversations(conversations)
    if (conversations.length) {
        let currentConversation = conversations[0]
        model.saveCurrentConversation(currentConversation)
    }

    // 3. show data to view
    view.showCurrentConversation()
    view.showConversations()
}

controller.addMessage = async function (messageContent) {
    let message = {
        content: messageContent,
        owner: firebase.auth().currentUser.email,
        ownerName: firebase.auth().currentUser.displayName,
        createdAt: new Date().toISOString(),
    }
    view.disable('form-chat-submit-btn')
    if (model.currentConversation) {
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

controller.addConversation = async function (titleContent, friendEmailContent) {
    view.disable('form-add-conversation-submit-btn')
    try {
        let conversation = {
            title: titleContent,
            users: [firebase.auth().currentUser.email, friendEmailContent],
            messages: [],
            createdAt: new Date().toISOString(),
        }

        await firebase
            .firestore()
            .collection('conversations')
            .add(conversation)

        document.getElementById('form-add-conversation-title-input').value = ''
        document.getElementById('form-add-conversation-email-input').value = ''
    } catch (err) {
        view.setText('friend-email-error', err.message)
    }
    view.enable('form-add-conversation-submit-btn')
}

controller.setupDatabaseChange = function () {
    let isFirstTimeRun = true
    let currentEmail = firebase.auth().currentUser.email
    firebase
    .firestore()
    .collection('conversations')
    .where('users', 'array-contains', currentEmail)
    .onSnapshot(snapshotHandler)

    function snapshotHandler(snapshot) {
        if (isFirstTimeRun) {
            isFirstTimeRun = false
            return
        }
        let docChanges = snapshot.docChanges()

        for (let docChange of docChanges) {
            let conversation = transformDoc(docChange.doc)
            if (docChange.type == 'added' || docChange.type == 'modified') {
                model.updateConversation(conversation)
                if (model.currentConversation && model.currentConversation.id == conversation.id) {
                    view.showCurrentConversation()
                }
            }
            // docChange.type == 'removed' >> not yet support >> TODO
        }
        view.showConversations()
    }
}

controller.leaveConversation = function() {
    //TODO: leave conversation
}