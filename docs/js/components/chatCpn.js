components.chat = `
<section class="chat-container">
<div class="aside-left">
    <div id='list-conversations' class="list-conversations"> 
    </div>
    <form id="form-add-conversation" class="form-add-conversation">
        <div class="input-wrapper">
            <input id="form-add-conversation-title-input" type="text" name="title" placeholder="Conversation holder">
            <div id="title-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
            <input id="form-add-conversation-email-input" type="email" name="friendEmail" placeholder="Your friend email">
            <div id="friend-email-error" class="message-error"></div>
        </div>
        <button id="form-add-conversation-submit-btn" class="btn-icon" type="submit">
            <i class="fas fa-plus"></i>
        </button>
    </form>
</div>
<div class="current-conversation">
    <div class="list-messages" id="list-messages">
    </div>
    <form class="form-chat" id="form-chat">
        <div class="input-wrapper">
            <input type="text" name="message" id="form-chat-input" placeholder="Enter your message">
        </div>
        <button type="submit" id="form-chat-submit-btn">Send</button>
    </form>
</div>
<div class="aside-right">
    <div id='detail-current-conversation' class="detail-current-conversation">
    </div>
    
    <button id='leave-conversation-btn' class="btn-icon">
        <i class="fas fa-minus"></i>
    </button>
</div>
</section>
`