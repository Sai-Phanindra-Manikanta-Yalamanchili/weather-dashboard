// AWS Cognito Configurations
const userPoolId = "us-east-2_DX3PywrzM"; // e.g., us-east-1_abc123
const clientId = "49nkpvnuc1gre77g4h11s4dmn"; // e.g., 123abc456def789ghi
const region = "us-east-2"; // e.g., us-east-1

AWS.config.region = region;
const userPool = new AmazonCognitoIdentity.CognitoUserPool({
    UserPoolId: userPoolId,
    ClientId: clientId,
});

// Toggle between forms
function toggleForm(type) {
    document.getElementById("signup-form").classList.toggle("hidden", type !== "signup");
    document.getElementById("login-form").classList.toggle("hidden", type !== "login");
}

// Signup Function
function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const signupError = document.getElementById("signup-error");

    const attributeList = [
        new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }),
    ];

    userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
            signupError.textContent = err.message;
            return;
        }
        alert("Signup successful! Please confirm your email.");
        toggleForm("login");
    });
}

// Login Function
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const loginError = document.getElementById("login-error");

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: email,
        Password: password,
    });

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
        Username: email,
        Pool: userPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
            alert("Login successful!");
            // Handle successful login (e.g., redirect to weather dashboard)
        },
        onFailure: (err) => {
            loginError.textContent = err.message;
        },
    });
}
