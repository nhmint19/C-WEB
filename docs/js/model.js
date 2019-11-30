const model = {
    conversations: null, // all conversations of user
    currentConversation: null,
}

model.saveConversations = function(conversations) {
    model.conversations = conversations
}

model.saveCurrentConversation = function(conversation) {
    model.currentConversation = conversation
}

model.updateConversation = function(conversation) {
    if(model.conversations) {
        let foundIndex = model.conversations.findIndex(function(element){
            return element.id == conversation.id
        })
        if(foundIndex >= 0) { // truong hop co thay doi trong model.conversations.conversation va can phai sua no dua theo database
            model.conversations[foundIndex] = conversation 
        } else { // truong hop foundindex = 0 ----> them mot conversation moi
            model.conversations.push(conversation)
        }
        if(model.currentConversation && model.currentConversation.id == conversation.id) {
            model.saveCurrentConversation(conversation)
        }
    }
}