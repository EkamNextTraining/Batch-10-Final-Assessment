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
    category: "Salesforce Org & Editions",
    scenario: "A company is planning to implement Salesforce for its sales and service teams. The administrator needs to understand what a Salesforce Org represents and which edition provides the required features.",
    question: "What is a Salesforce Org? How do Salesforce Editions affect the features, limits, and capabilities available to an organization?",
    placeholder: "Enter your answer..."
  },
  {
    id: 2,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Objects & Fields",
    scenario: "A college wants to maintain information about Colleges and Students in Salesforce. The administrator decides to create custom objects and fields to store this information.",
    question: "How would you decide whether to create a custom object or use a standard object? What factors should you consider when selecting field types?",
    placeholder: "Enter your answer..."
  },
  {
    id: 3,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Master-Detail Relationship",
    scenario: "A company has a Project object and a Project Task object. Every Project Task must belong to a Project, and the company wants the child records to inherit ownership and security from the Project.",
    question: "Which relationship would you configure between Project and Project Task? How does a Master-Detail relationship affect ownership, security, and record deletion?",
    placeholder: "Enter your answer..."
  },
  {
    id: 4,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Lookup Relationship",
    scenario: "A company has Employees and Departments. An Employee may be associated with a Department, but the Employee should continue to exist even if the Department record is deleted.",
    question: "Which relationship would you use between Employee and Department? Why would a Lookup relationship be more appropriate than Master-Detail in this situation?",
    placeholder: "Enter your answer..."
  },
  {
    id: 5,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Many-to-Many Relationship",
    scenario: "A university wants to track Students and Courses. One student can enroll in multiple courses, and one course can have multiple students.",
    question: "How would you implement a Many-to-Many relationship between Students and Courses in Salesforce? What is the purpose of a Junction Object?",
    placeholder: "Enter your answer..."
  },
  {
    id: 6,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Roll-Up Summary",
    scenario: "A company wants to display the total Amount of all Opportunities related to an Account. The total should automatically update whenever Opportunities are created, updated, or deleted.",
    question: "How would you configure a Roll-Up Summary field to achieve this? What relationship is required for a Roll-Up Summary field?",
    placeholder: "Enter your answer..."
  },
  {
    id: 7,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Formula Fields",
    scenario: "A company wants to automatically display the number of days remaining until a Contract's expiration date. The value should be calculated dynamically without storing the result in the database.",
    question: "How would you use a Formula Field to solve this requirement? What are the advantages of using a Formula Field for calculated values?",
    placeholder: "Enter your answer..."
  },
  {
    id: 8,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Profiles & Permission Sets",
    scenario: "All Sales Users should have the same basic permissions, but only some users need additional access to create Campaign records.",
    question: "How would you use Profiles and Permission Sets to implement this requirement? Why would a Permission Set be preferable to creating another Profile?",
    placeholder: "Enter your answer..."
  },
  {
    id: 9,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Public Groups & Queues",
    scenario: "A company wants incoming Support Cases to be assigned to a team instead of directly assigning them to one individual user. The team members should be able to work on the Cases from a common location.",
    question: "Would you use a Public Group or a Queue for this requirement? Explain the purpose and difference between Public Groups and Queues.",
    placeholder: "Enter your answer..."
  },
  {
    id: 10,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Field-Level Security",
    scenario: "The HR team stores an Employee's Salary on the Employee record. Sales users should be able to view the Employee record but must not be able to see or edit the Salary field.",
    question: "How would you configure Field-Level Security (FLS) to meet this requirement? How is FLS different from a Page Layout?",
    placeholder: "Enter your answer..."
  },
  {
    id: 11,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Sharing Rules",
    scenario: "Account records are private by default. However, the company wants all users in the Support department to access Accounts owned by the Sales department.",
    question: "How would you configure a Sharing Rule to provide this access? What is the difference between OWD and Sharing Rules?",
    placeholder: "Enter your answer..."
  },
  {
    id: 12,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Page Layouts",
    scenario: "A company has different types of Customers. For one type of customer, the administrator wants to make certain fields required and display additional fields on the record page.",
    question: "How would you use Page Layouts to control the fields and actions displayed to users? What is the difference between a Page Layout and a Lightning Record Page?",
    placeholder: "Enter your answer..."
  },
  {
    id: 13,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Field Dependencies",
    scenario: "A company has Country and State picklists. When a user selects India as the Country, only Indian states should be available in the State field.",
    question: "How would you configure a Field Dependency to achieve this requirement? Which field would be the Controlling field and which would be the Dependent field?",
    placeholder: "Enter your answer..."
  },
  {
    id: 14,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Record Types",
    scenario: "A company uses the Case object for both Technical Support and Billing Support. Each type of Case requires different picklist values and different page layouts.",
    question: "How would you use Record Types to support these different business processes? What components can be controlled using Record Types?",
    placeholder: "Enter your answer..."
  },
  {
    id: 15,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Validation Rules",
    scenario: "A company requires every Opportunity with Stage set to Closed Won to have an Amount greater than zero. Users should not be allowed to save the record when this condition is not satisfied.",
    question: "How would you create a Validation Rule for this requirement? When does a Validation Rule prevent a record from being saved?",
    placeholder: "Enter your answer..."
  },
  {
    id: 16,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Record-Triggered Flow",
    scenario: "Whenever a new Account is created, the company wants Salesforce to automatically create a related Contact using information from the Account.",
    question: "Which type of Flow would you use? Explain when the Flow should run and how you would create the related Contact record.",
    placeholder: "Enter your answer..."
  },
  {
    id: 17,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Screen Flow",
    scenario: "A company wants sales users to enter Customer information through a guided form. After the user completes the form, Salesforce should create an Account and a related Contact.",
    question: "How would you use a Screen Flow to implement this requirement? What is the purpose of Screen elements and Flow variables?",
    placeholder: "Enter your answer..."
  },
  {
    id: 18,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Workflow Rules & Field Updates",
    scenario: "When an Opportunity is marked as Closed Won, the company wants to automatically update a custom field on the Account.",
    question: "How could a Workflow Rule and Field Update be used for this requirement? What is the purpose of the Field Update action?",
    placeholder: "Enter your answer..."
  },
  {
    id: 19,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Reports & Dashboards",
    scenario: "Sales managers want to monitor total sales by month, compare sales performance between representatives, and view the information graphically on a dashboard.",
    question: "Which Report formats and Dashboard components would you use to provide this information? Explain when you would use Tabular, Summary, and Matrix Reports.",
    placeholder: "Enter your answer..."
  },
  {
    id: 20,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Variables & Conditional Statements",
    scenario: "An Apex program receives an Opportunity Amount and needs to determine whether the Opportunity is Low, Medium, or High value based on predefined amount ranges.",
    question: "How would you declare the required variables and use conditional statements to classify the Opportunity? When would you use if-else versus a switch statement?",
    placeholder: "Enter your answer..."
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 2 — MCQ  (Q21 – Q40)
  // ══════════════════════════════════════════════════════════════
  {
    id: 21,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Salesforce Org",
    scenario: "A Salesforce administrator is explaining the environment where an organization's Salesforce data, configuration, users, and customizations are stored.",
    question: "What is a Salesforce Org?",
    options: [
      "A Salesforce organization/environment containing its data and configuration",
      "A single Salesforce object",
      "A type of user license",
      "A permission set"
    ],
    answer: 0
  },
  {
    id: 22,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Salesforce Editions",
    scenario: "A company is selecting a Salesforce Edition based on the features, limits, and capabilities required by its business.",
    question: "What primarily differentiates Salesforce Editions?",
    options: [
      "Only the Salesforce login URL",
      "Features, capabilities, and limits available to the organization",
      "Only the number of custom fields",
      "Only the number of profiles"
    ],
    answer: 1
  },
  {
    id: 23,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Objects and Fields",
    scenario: "An administrator needs to store the date on which a customer joined the company.",
    question: "Which field data type is most appropriate for storing a date without a time?",
    options: [
      "Text",
      "Date",
      "Currency",
      "Checkbox"
    ],
    answer: 1
  },
  {
    id: 24,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Relationship",
    scenario: "A Project Task must always belong to a Project, and the child record should inherit ownership and security from its parent.",
    question: "Which relationship should the administrator use?",
    options: [
      "Lookup Relationship",
      "Master-Detail Relationship",
      "Hierarchical Relationship",
      "Many-to-Many Relationship"
    ],
    answer: 1
  },
  {
    id: 25,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Relationship",
    scenario: "An Employee can optionally be associated with a Department, and the Employee should remain even if the Department is deleted.",
    question: "Which relationship is most appropriate?",
    options: [
      "Master-Detail",
      "Lookup",
      "Hierarchical",
      "Junction"
    ],
    answer: 1
  },
  {
    id: 26,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Relationship",
    scenario: "A university needs to allow Students to enroll in multiple Courses, while each Course can contain multiple Students.",
    question: "How is a Many-to-Many relationship normally implemented in Salesforce?",
    options: [
      "Using a Formula Field",
      "Using a Junction Object with relationships to both objects",
      "Using a Roll-Up Summary Field",
      "Using a Page Layout"
    ],
    answer: 1
  },
  {
    id: 27,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Relationship",
    scenario: "A company wants users to relate one User record to another User record to represent a reporting relationship.",
    question: "Which Salesforce relationship type is specifically available for the User object to represent this type of relationship?",
    options: [
      "Hierarchical Relationship",
      "Master-Detail Relationship",
      "Many-to-Many Relationship",
      "External Lookup"
    ],
    answer: 0
  },
  {
    id: 28,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Roll-Up Summary Fields",
    scenario: "An Account needs to display the total Amount of its related Opportunities.",
    question: "Which Roll-Up Summary operation should be used?",
    options: [
      "COUNT",
      "SUM",
      "MIN",
      "AVERAGE"
    ],
    answer: 1
  },
  {
    id: 29,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Schema",
    scenario: "An administrator needs a field that automatically calculates a value from other fields without storing the calculated result separately.",
    question: "Which Salesforce field type should be used?",
    options: [
      "Formula",
      "Text",
      "Auto Number",
      "Checkbox"
    ],
    answer: 0
  },
  {
    id: 30,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Security",
    scenario: "A company wants all Sales users to have basic access while giving a few users additional permission to manage Campaigns.",
    question: "Which approach is recommended for providing the additional access?",
    options: [
      "Create a new Salesforce Org",
      "Create a Permission Set and assign it to the required users",
      "Change the OWD setting",
      "Create a new Role"
    ],
    answer: 1
  },
  {
    id: 31,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Admin",
    scenario: "A company wants incoming Cases to be owned by a group of support users until one of them takes ownership.",
    question: "Which Salesforce feature is most appropriate?",
    options: [
      "Queue",
      "Role",
      "Profile",
      "Permission Set"
    ],
    answer: 0
  },
  {
    id: 32,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Security",
    scenario: "An administrator wants Sales users to access an Account record but prevent them from viewing the confidential Annual Revenue field.",
    question: "Which security feature should be configured?",
    options: [
      "OWD",
      "Field-Level Security",
      "Role Hierarchy",
      "Sharing Rule"
    ],
    answer: 1
  },
  {
    id: 33,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Security",
    scenario: "Account records contain confidential customer information and should initially be accessible only to their owners.",
    question: "Which OWD setting provides the most restrictive record-level access for Accounts?",
    options: [
      "Public Read/Write",
      "Public Read Only",
      "Private",
      "Controlled by Parent"
    ],
    answer: 2
  },
  {
    id: 34,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Security",
    scenario: "A Sales Manager needs to access records owned by Sales Representatives below them in the role hierarchy.",
    question: "What is the primary purpose of the Role Hierarchy in Salesforce?",
    options: [
      "Grant object-level permissions",
      "Provide record-level access based on the organizational hierarchy",
      "Create custom fields",
      "Control field data types"
    ],
    answer: 1
  },
  {
    id: 35,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Security",
    scenario: "Account OWD is Private, but users in the Support group need access to Accounts owned by the Sales team.",
    question: "Which feature can be used to automatically extend record-level access to the Support users?",
    options: [
      "Sharing Rule",
      "Formula Field",
      "Page Layout",
      "Field Dependency"
    ],
    answer: 0
  },
  {
    id: 36,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Admin",
    scenario: "An administrator wants to control which fields, sections, buttons, and related lists appear on a record's detail page.",
    question: "Which Salesforce feature primarily controls this configuration?",
    options: [
      "Page Layout",
      "OWD",
      "Role Hierarchy",
      "Permission Set Group"
    ],
    answer: 0
  },
  {
    id: 37,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Fields",
    scenario: "A State picklist should display different values depending on the Country selected by the user.",
    question: "Which field should act as the Controlling Field?",
    options: [
      "State",
      "Country",
      "Record Owner",
      "Created Date"
    ],
    answer: 1
  },
  {
    id: 38,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Admin",
    scenario: "A company uses the Case object for Technical Support and Billing Support. Each type requires different picklist values and page layouts.",
    question: "Which Salesforce feature should be used to support these different business processes?",
    options: [
      "Record Types",
      "Queues",
      "Sharing Rules",
      "Formula Fields"
    ],
    answer: 0
  },
  {
    id: 39,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Validation Rules",
    scenario: "A company requires an Opportunity Amount whenever the Stage is Closed Won.",
    question: "Which formula condition would correctly identify a Closed Won Opportunity with a blank Amount?",
    options: [
      "AND(ISPICKVAL(StageName, \"Closed Won\"), ISBLANK(Amount))",
      "OR(ISPICKVAL(StageName, \"Closed Won\"), ISBLANK(Amount))",
      "AND(ISPICKVAL(StageName, \"Open\"), ISBLANK(Amount))",
      "NOT(ISPICKVAL(StageName, \"Closed Won\"))"
    ],
    answer: 0
  },
  {
    id: 40,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex Variables and Conditional Statements",
    scenario: "An Apex program needs to store an Opportunity Amount and classify it as High Value when the amount is greater than 100000.",
    question: "Which Apex code correctly declares the variable and checks the condition?",
    options: [
      "Integer amount = 100000; if(amount > 100000) { }",
      "Decimal amount = 150000; if(amount > 100000) { }",
      "String amount = 150000; if(amount > 100000) { }",
      "Boolean amount = 150000; if(amount > 100000) { }"
    ],
    answer: 1
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 3 — LIVE CODING — TRIGGERS  (Q41 – Q45)
  // ══════════════════════════════════════════════════════════════

  {
    id: 41,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Apex Basics — Variables and Data Types",
    language: "Apex",
    file: "StudentDetails.cls",
    scenario: "A college application needs to store and display a student's name, age, percentage, and whether the student is eligible for admission.",
    question: "Write an Apex class named StudentDetails that declares appropriate variables for the student's Name, Age, Percentage, and Eligibility status. Assign sample values and display all values using System.debug().",
    placeholder: "",
    hint: "Use String, Integer, Decimal, and Boolean data types."
  },
  {
    id: 42,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Apex Basics — Assignment and Type Casting",
    language: "Apex",
    file: "MarksCalculator.cls",
    scenario: "A student has obtained marks in three subjects. The application needs to calculate the total and average marks.",
    question: "Write an Apex class named MarksCalculator that stores three subject marks, calculates the total and average, and demonstrates type casting when converting the calculated value into an Integer.",
    placeholder: "",
    hint: "Use Integer and Decimal variables and demonstrate explicit type casting."
  },
  {
    id: 43,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Apex Basics — If Else",
    language: "Apex",
    file: "StudentResult.cls",
    scenario: "A college wants to determine whether a student has passed based on their percentage.",
    question: "Write an Apex class named StudentResult that accepts a student's percentage and uses if-else statements to print \"Distinction\" for 75 or above, \"Pass\" for 40 to 74, and \"Fail\" for below 40.",
    placeholder: "",
    hint: "Use Decimal for percentage and an if-else-if-else structure."
  },
  {
    id: 44,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Apex Basics — For Loop",
    language: "Apex",
    file: "MultiplicationTable.cls",
    scenario: "A training application needs to generate the multiplication table for a given number.",
    question: "Write an Apex class named MultiplicationTable that accepts a number and uses a for loop to print its multiplication table from 1 to 10.",
    placeholder: "",
    hint: "Initialize a loop variable from 1 and continue until 10."
  },
  {
    id: 45,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Apex Basics — While Loop and Conditional Statements",
    language: "Apex",
    file: "NumberAnalyzer.cls",
    scenario: "A system needs to analyze numbers from 1 to 20 and identify which numbers are even and which are odd.",
    question: "Write an Apex class named NumberAnalyzer that uses a while loop to iterate from 1 to 20 and uses an if-else condition to print whether each number is even or odd.",
    placeholder: "",
    hint: "Use the modulus operator (%) to determine whether a number is divisible by 2."
  }

];
