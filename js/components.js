const components = {}

components.register = `
<section class = register-container> 
    <form id="register-form" class = "register-form">
    <div class = "form-header">
        <h3 id="form-header-h3">MindX chat</h3>
    </div>
    <div class = "form-content">
        <div class = "name-wrapper">
            <div class = "input-wrapper">
                <input type="text" name = "firstname" placeholder="First name"> 
                <div id="firstname-error" class="message-error"> </div>
            </div>
            <div class= "input-wrapper">
                <input type="text" name = "lastname" placeholder="Last name"> 
                <div id="lastname-error" class="message-error"> </div>
            </div>
        </div>
        <div class="email-wrapper">
            <div class = "input-wrapper">
                <input type="email" name = "email" placeholder = "Email">
                <div id="email-error" class="message-error"> </div>
            </div>
        </div>
        <div class = "password-wrapper">
            <div class = "input-wrapper">
                <input type="password" name = "password" placeholder="Password">
                <div id="password-error" class="message-error"> </div>
            </div>
            <div class= "input-wrapper">
                <input type="password" name = "confirmPassword" placeholder="Confirm Password">
                <div id="confirmPassword-error" class="message-error"> </div>
            </div>
        </div>
        <div id="register-error" class="message-error"></div>
        <div id="register-success" class="message-success"></div>
    </div>
    <div class = "form-footer">
        <a href= "#" id="register-link"> Already have an account? Login</a>
        <button id="register-submit-btn" type = "submit">Register</button>
    </div>
</form>
</section>`

components.login = `
<section class="login-container">
    <form id="login-form" class="login-form">
        <div class="form-header">
            <h3>MindX Chat</h3>
        </div>
        <div class="form-content">
            <div class="email-wrapper">
                <div class="input-wrapper">
                    <input type="email" name="email" placeholder="Email">
                    <div id="email-error" class="message-error"></div>
                </div>
            </div>
            <div class="password-wrapper">
                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="Password">
                    <div id="password-error" class="message-error"></div>
                </div>
            </div>
            <div id="login-error" class="message-error"></div>
        </div>
        <div class="form-footer">
            <a href="#" id="login-link">Not yet have an account? Register</a>
            <button id="login-submit-btn" type = "submit">LOGIN</button>
        </div>
        
    </form>
    </section>
`

components.chat = `
<section class="chat-container">
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
</section>
`

components.nav = `
<nav class="main-nav">
    <div class="user-profile">
        <div class="user-email">
            <span id="user-email">email</span>
        </div>
        <button class="btn-icon" id="sign-out-btn">
            <i class="fas fa-sign-out-alt"></i>
        </button>
    </div>
</nav>
`

components.loading = `
<div class="loading-container"> 
    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading" />
</div> 
`