// =====================================================================
//  SF APEX DEVELOPER ASSESSMENT — Question Bank
//  Fixed 45 questions: 20 Scenario + 20 MCQ + 5 Live Coding
//  Topics: Apex Core + Apex Triggers
//  Questions appear in fixed order — no randomisation
// =====================================================================

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════════
  //  PART 1 — SCENARIO / DESCRIPTIVE  (Q1 – Q20)
  // ══════════════════════════════════════════════════════════════

  {
    id: 1,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Salesforce Security — OWD",
    scenario: "A company wants Account records to be private so that users can access only the records they own or records shared with them.",
    question: "How would you configure Organization-Wide Defaults (OWD) to achieve this? How does OWD affect record-level access?",
    placeholder: "Enter your answer..."
  },
  {
    id: 2,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Role Hierarchy",
    scenario: "A sales manager needs to automatically access the records owned by sales representatives who report to them.",
    question: "How does the Role Hierarchy provide record-level access in Salesforce? Does it grant object permissions?",
    placeholder: "Enter your answer..."
  },
  {
    id: 3,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Permission Sets",
    scenario: "A user has a standard profile but temporarily needs permission to create and edit a custom object without changing their profile.",
    question: "How can a Permission Set be used to provide the required access? What is the advantage of using Permission Sets?",
    placeholder: "Enter your answer..."
  },
  {
    id: 4,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Master-Detail Relationship",
    scenario: "A company has College and Student objects. Every Student must belong to one College, and the Student record should inherit security and ownership from the College.",
    question: "Which relationship should be created between College and Student? Explain how a Master-Detail relationship affects ownership, security, and record deletion.",
    placeholder: "Enter your answer..."
  },
  {
    id: 5,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Roll-Up Summary",
    scenario: "An Account should automatically display the total Amount of all related Opportunities whenever an Opportunity is created, updated, or deleted.",
    question: "How can a Roll-Up Summary field be used to achieve this requirement? What relationship is required?",
    placeholder: "Enter your answer..."
  },
  {
    id: 6,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Validation Rules",
    scenario: "A company does not allow an Opportunity to be moved to Closed Won unless the Amount field is populated.",
    question: "How would you implement this requirement using a Validation Rule? When does a Validation Rule execute?",
    placeholder: "Enter your answer..."
  },
  {
    id: 7,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Record Types",
    scenario: "A company uses different Opportunity processes for New Business and Renewal opportunities. Each process requires different picklist values and page layouts.",
    question: "How would you use Record Types to support these different business processes? What components can be controlled by Record Types?",
    placeholder: "Enter your answer..."
  },
  {
    id: 8,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Field Dependencies",
    scenario: "A Case has Country and State fields. When a user selects India as the Country, only Indian states should be available in the State picklist.",
    question: "How can Field Dependencies be configured to achieve this requirement? Which field acts as the controlling field and which acts as the dependent field?",
    placeholder: "Enter your answer..."
  },
  {
    id: 9,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Record-Triggered Flow",
    scenario: "Whenever an Account is created, the system should automatically create a follow-up Task assigned to the Account owner.",
    question: "Which type of Flow would you use? Explain when the Flow should run and how you would configure the record-triggered Flow.",
    placeholder: "Enter your answer..."
  },
  {
    id: 10,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Screen Flow",
    scenario: "A support team wants users to enter customer information through a guided screen and create an Account and Contact from the entered details.",
    question: "How would you implement this requirement using a Screen Flow? What Flow elements would be required?",
    placeholder: "Enter your answer..."
  },
  {
    id: 11,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Scheduled Flow",
    scenario: "A company wants to automatically identify Accounts that have not had any activity for the last 90 days and create follow-up Tasks for their owners every Monday.",
    question: "Which type of Flow would you use? Explain how a Scheduled-Triggered Flow can be configured for this requirement.",
    placeholder: "Enter your answer..."
  },
  {
    id: 12,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Reports and Dashboards",
    scenario: "Management wants a dashboard showing total sales by month, Opportunities by Stage, and sales performance by salesperson.",
    question: "Which report types and dashboard components would you use to build this dashboard? Explain how the reports support the dashboard.",
    placeholder: "Enter your answer..."
  },
  {
    id: 13,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex Trigger",
    scenario: "Whenever an Account's Billing City is updated, all related Contacts should have their Mailing City updated to the new Billing City.",
    question: "How would you implement this requirement using an Apex Trigger? Which trigger event would you use and how would you ensure the solution is bulkified?",
    placeholder: "Enter your answer..."
  },
  {
    id: 14,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex Bulkification",
    scenario: "A trigger receives 200 Account records in a single transaction and needs to update related Contacts for all Accounts.",
    question: "What Apex best practices should be followed to ensure the trigger works correctly for bulk operations? Where should SOQL queries and DML statements be placed?",
    placeholder: "Enter your answer..."
  },
  {
    id: 15,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex Testing",
    scenario: "A developer has created an Apex class that calculates the total Opportunity Amount for an Account, but the class currently has no test coverage.",
    question: "How would you create an Apex test class for this functionality? What test data should be created and what assertions should be included?",
    placeholder: "Enter your answer..."
  },
  {
    id: 16,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Queueable Apex",
    scenario: "After an Account is created, a long-running operation must process related Contacts asynchronously. The developer also needs the ability to pass complex data to the asynchronous job.",
    question: "Why would Queueable Apex be suitable for this requirement? How is a Queueable job created, enqueued, and monitored?",
    placeholder: "Enter your answer..."
  },
  {
    id: 17,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Batch Apex",
    scenario: "A company has more than one million Contact records and needs to update a field on Contacts that meet a specific condition.",
    question: "Why is Batch Apex appropriate for this requirement? Explain the purpose of the start, execute, and finish methods.",
    placeholder: "Enter your answer..."
  },
  {
    id: 18,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex Security — CRUD/FLS",
    scenario: "An Apex class retrieves Contact records and displays them in an LWC. However, the developer wants to ensure that users cannot access fields they do not have permission to view.",
    question: "How can Apex enforce object-level and field-level security when querying and returning Contact records? Explain the use of WITH USER_MODE or Security.stripInaccessible().",
    placeholder: "Enter your answer..."
  },
  {
    id: 19,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "LWC — Apex Interaction",
    scenario: "An LWC needs to display a list of Accounts retrieved from Apex and automatically refresh the data when the user performs an action.",
    question: "How would you use the @wire decorator to call an Apex method? What conditions are required for an Apex method to be used with @wire, and how can the wired data be refreshed?",
    placeholder: "Enter your answer..."
  },
  {
    id: 20,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "LWC — Parent to Child Communication",
    scenario: "A parent LWC displays a list of Accounts and needs to pass the selected Account Id to a child LWC for displaying Account details.",
    question: "How can data be passed from a parent LWC to a child LWC? Explain the use of public properties with @api.",
    placeholder: "Enter your answer..."
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 2 — MCQ  (Q21 – Q40)
  // ══════════════════════════════════════════════════════════════
  {
    id: 21,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "LWC Data Flow",
    scenario: "A parent LWC needs to send an Account Id to a child LWC.",
    question: "Which mechanism should the child use to expose a property that can be set by the parent?",
    options: [
      "@api",
      "@wire",
      "@track",
      "@future"
    ],
    answer: 0
  },
  {
    id: 22,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex Triggers",
    scenario: "A developer needs to automatically populate a field on an Account before the record is saved.",
    question: "Which trigger event is most appropriate for this requirement?",
    options: [
      "After Insert",
      "Before Insert",
      "After Delete",
      "After Undelete"
    ],
    answer: 1
  },
  {
    id: 23,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex Triggers",
    scenario: "A trigger needs to create a related Case after an Account is successfully inserted.",
    question: "Which trigger event should be used?",
    options: [
      "Before Insert",
      "Before Update",
      "After Insert",
      "Before Delete"
    ],
    answer: 2
  },
  {
    id: 24,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Trigger Bulkification",
    scenario: "A trigger processes 200 Account records in a single transaction.",
    question: "Which approach follows Apex bulkification best practices?",
    options: [
      "Perform SOQL inside the loop",
      "Perform DML inside the loop",
      "Use collections and perform SOQL/DML outside loops",
      "Process only the first record"
    ],
    answer: 2
  },
  {
    id: 25,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Governor Limits",
    scenario: "An Apex transaction processes a large number of records and executes SOQL queries repeatedly inside a loop.",
    question: "What problem is most likely to occur?",
    options: [
      "Maximum CPU heap is automatically increased",
      "SOQL governor limit may be exceeded",
      "The records are automatically deleted",
      "Salesforce disables the trigger"
    ],
    answer: 1
  },
  {
    id: 26,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex Testing",
    scenario: "A developer wants to verify that an Apex method correctly updates an Account.",
    question: "Which method should be used to verify the expected result in a test class?",
    options: [
      "System.debug()",
      "System.assertEquals()",
      "Database.executeBatch()",
      "Test.startTest() only"
    ],
    answer: 1
  },
  {
    id: 27,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Test Data",
    scenario: "A test class needs Account records to validate an Apex method.",
    question: "What is the recommended approach for creating test data?",
    options: [
      "Use existing production records",
      "Create test data within the test context",
      "Query records from production",
      "Use records from another user's account"
    ],
    answer: 1
  },
  {
    id: 28,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Test.startTest and Test.stopTest",
    scenario: "A test class needs to test a Queueable Apex job and verify its results.",
    question: "Why are Test.startTest() and Test.stopTest() commonly used?",
    options: [
      "They disable all governor limits",
      "They isolate the test execution context and cause asynchronous jobs to execute at Test.stopTest()",
      "They delete test records",
      "They bypass validation rules"
    ],
    answer: 1
  },
  {
    id: 29,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Test Data Factory",
    scenario: "A development team has many test classes that repeatedly create similar Account, Contact, and Opportunity records.",
    question: "What is the main purpose of a Test Data Factory?",
    options: [
      "To create production data automatically",
      "To centralize reusable test data creation logic",
      "To bypass Apex security",
      "To increase the SOQL governor limit"
    ],
    answer: 1
  },
  {
    id: 30,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex",
    scenario: "A developer needs to perform an HTTP callout asynchronously after a record operation.",
    question: "Which asynchronous Apex feature can be used for this requirement?",
    options: [
      "Future method with callout=true",
      "Static variable",
      "Formula field",
      "Trigger.new"
    ],
    answer: 0
  },
  {
    id: 31,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex",
    scenario: "An asynchronous process needs to accept a complex Apex object as input and perform processing in the background.",
    question: "Which asynchronous Apex option is generally more suitable?",
    options: [
      "Queueable Apex",
      "Validation Rule",
      "Formula Field",
      "Workflow Rule"
    ],
    answer: 0
  },
  {
    id: 32,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Async Apex",
    scenario: "A company needs to process several hundred thousand records in manageable groups.",
    question: "Which Apex feature is best suited for this requirement?",
    options: [
      "Future Apex",
      "Batch Apex",
      "Trigger.new",
      "Aura Controller"
    ],
    answer: 1
  },
  {
    id: 33,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Async Apex",
    scenario: "A company wants an Apex process to run automatically every day at 2 AM.",
    question: "Which Apex feature should be used?",
    options: [
      "Queueable Apex",
      "Schedulable Apex",
      "Future Apex",
      "Batch Apex only"
    ],
    answer: 1
  },
  {
    id: 34,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Integration",
    scenario: "An Apex class needs to retrieve customer information from an external REST API.",
    question: "Which classes are primarily used to perform the HTTP callout?",
    options: [
      "HttpRequest and HttpResponse",
      "Database and Schema",
      "Test and System",
      "AuraEnabled and Wire"
    ],
    answer: 0
  },
  {
    id: 35,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Integration",
    scenario: "An organization needs to call an external API without hardcoding the endpoint authentication details in Apex.",
    question: "Which Salesforce feature is designed to simplify endpoint and authentication management?",
    options: [
      "Named Credentials",
      "Custom Labels",
      "Record Types",
      "Page Layouts"
    ],
    answer: 0
  },
  {
    id: 36,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex",
    scenario: "An Apex class should respect the current user's object and field permissions while querying records.",
    question: "Which approach can help enforce user-mode security during SOQL execution?",
    options: [
      "WITH USER_MODE",
      "without sharing",
      "System.debug()",
      "Test.isRunningTest()"
    ],
    answer: 0
  },
  {
    id: 37,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex",
    scenario: "An Apex application retrieves records but should remove fields that the current user does not have access to.",
    question: "Which method can be used to sanitize inaccessible fields?",
    options: [
      "Security.stripInaccessible()",
      "Database.query()",
      "System.assert()",
      "Schema.getGlobalDescribe()"
    ],
    answer: 0
  },
  {
    id: 38,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex",
    scenario: "A developer wants an Apex class to enforce the sharing rules of the user who invokes the class.",
    question: "Which sharing declaration should be used?",
    options: [
      "without sharing",
      "with sharing",
      "global sharing",
      "private sharing"
    ],
    answer: 1
  },
  {
    id: 39,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "LWC",
    scenario: "An LWC needs to call an Apex method reactively whenever a parameter changes.",
    question: "Which approach is appropriate?",
    options: [
      "Use @wire with an Apex method",
      "Use only connectedCallback()",
      "Use only renderedCallback()",
      "Use a Validation Rule"
    ],
    answer: 0
  },
  {
    id: 40,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "LWC",
    scenario: "An LWC needs to create, retrieve, update, and delete Salesforce records without writing custom Apex for standard record operations.",
    question: "Which Salesforce feature is designed for this requirement?",
    options: [
      "Lightning Data Service",
      "Batch Apex",
      "SOSL",
      "Approval Process"
    ],
    answer: 0
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 3 — LIVE CODING — TRIGGERS  (Q41 – Q45)
  // ══════════════════════════════════════════════════════════════

  {
    id: 41,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Trigger — Duplicate Prevention",
    language: "Apex",
    file: "ContactDuplicateTrigger.cls",
    scenario: "The company should not allow duplicate Contacts with the same Email and Phone number.",
    question: "Write a bulkified before insert and before update Apex trigger named ContactDuplicateTrigger that prevents duplicate Contacts based on Email and Phone.",
    placeholder: "",
    hint: ""
  },
  {
    id: 42,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Trigger — Stage History",
    language: "Apex",
    file: "OpportunityHistoryTrigger.cls",
    scenario: "Whenever an Opportunity Stage changes, the previous Stage and new Stage must be stored in OpportunityHistory__c.",
    question: "Write a bulkified after update Apex trigger named OpportunityHistoryTrigger that creates a history record containing the Opportunity Id, previous Stage, and new Stage.",
    placeholder: "",
    hint: ""
  },
  {
    id: 43,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Queueable Apex — Chaining",
    language: "Apex",
    file: "OpportunityQueueable.cls",
    scenario: "A Queueable job must process Opportunities and then start another Queueable job to process their related Contacts.",
    question: "Write a Queueable Apex class named OpportunityQueueable that demonstrates Queueable chaining.",
    placeholder: "",
    hint: ""
  },
  {
    id: 44,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "LWC — Imperative Apex",
    language: "LWC",
    file: "accountSearch.js",
    scenario: "A user enters an Account Name and clicks Search. The component should retrieve matching Accounts only when the button is clicked.",
    question: "Create an LWC named accountSearch that uses an imperative Apex method to search Accounts by Name and display the results.",
    placeholder: "",
    hint: ""
  },
  {
    id: 45,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "LWC — Child to Parent",
    language: "LWC",
    file: "accountSelector.js",
    scenario: "A child LWC displays Accounts. When the user selects an Account, the selected Account Id must be sent to the parent component.",
    question: "Create parent and child LWCs demonstrating child-to-parent communication using CustomEvent to send the selected Account Id.",
    placeholder: "",
    hint: ""
  }

];
