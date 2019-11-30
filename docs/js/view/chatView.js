view.showCurrentConversation = function () {
    if (model.currentConversation) {
        let messages = model.currentConversation.messages
        let listMessages = document.getElementById('list-messages')
        listMessages.innerHTML = ''
        for (let message of messages) {
            let className = ""
            let ownerName = ""
            if (message.owner == firebase.auth().currentUser.email) {
                className = "message-chat your"
            } else {
                className = "message-chat"
                ownerName = message.ownerName
            }

            let html = `
                <div class= "${className}">
                    <div class="chat-user-indicator">${ownerName}</div>
                    <span>${message.content}</span>
                </div>
            `
            listMessages.innerHTML += html


        }
        listMessages.scrollTop = listMessages.scrollHeight

        let detailCurrentConversation = document.getElementById('detail-current-conversation')
        let users = model.currentConversation.users
        detailCurrentConversation.innerHTML = ''
        for(let user of users) {
            let html = `
            <div class="user-email">${user}</div>
        `
            detailCurrentConversation.innerHTML += html
        }
        let html = `
            <div class="created-at">${model.currentConversation.createdAt}<div>
        `
        detailCurrentConversation.innerHTML += html
        // show all messages to screen
    }
}

view.showConversations = function () {
    if (model.conversations) {
        let conversations = model.conversations
        let listConversation = document.getElementById('list-conversations')
        listConversation.innerHTML = ''
        for (let conversation of conversations) {
            // 1. mark current conversation
            let className = ""
            if (conversation.id == model.currentConversation.id) {
                className = "conversation current"
            } else {
                className = "conversation"
            }
            let html = `
            <div id="${conversation.id}"class="${className}">
                <div class="conversation-title">${conversation.title}</div>
                <div class="conversation-members">${conversation.users.length} members</div>
            </div>
            `
            listConversation.innerHTML += html

        }
        // 2. conversation.onclick
        for (let conversation of conversations) {
            let conversationDiv = document.getElementById(conversation.id)
            conversationDiv.onclick = conversationClickHandler

            function conversationClickHandler() {
                model.saveCurrentConversation(conversation)
                view.showCurrentConversation()
                view.showConversations()
            }
        }
    }
}