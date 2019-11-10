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
        // update new to model.conversations
            // TODO: next session
        // update new to model.currentConversation
        if(model.currentConversation && model.currentConversation.id == conversation.id) {
            model.saveCurrentConversation(conversation)
        }
    }
}