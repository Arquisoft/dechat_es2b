Feature: Contact
  The user of the app have contacts that he want to know and he want to add new contacts.

  Scenario: List the user's contacts
    Given The app init with a session
    When The user does nothing
    Then The user can see its contacts

  Scenario: Add new contact
    Given The app init with a session
    When The user click on the add contact button
    And Write the new contact's info
    Then The user can chat with this contact

  Scenario: Select a contact
    Given The app init with a session
    When The user click on a contact
    Then The user can see the conversation on the messages side
