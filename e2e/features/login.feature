Feature: Login
  The user have to be able to login with her account and then logout

  Scenario: Login with an account when there isn't any session
    Given The login form
    When The user insert his pod's url and password
    Then The session has been init

  Scenario: Logout
    Given The app with a login account
    When The user click the logout button
    Then The app log out the user
