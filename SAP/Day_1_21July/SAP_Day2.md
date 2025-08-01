### RCA ==> Root Cause Analysis

- RCA means finding the real reason behind a problem.
- RCA is the process of finding and fixing the main reason behind a problem so it doesn't come back again.

### 💡 Simple Steps of RCA:

1. What happened? (Describe the issue)

2. Why did it happen? (Find the cause)

3. How to fix the root problem? (Permanent solution)

4. How to stop it from happening again? (Prevention)

### SLA

- SLA ==> Service Level Analysis / Service Level Agreemen
- SLA is an agreement between service provider and customer

#### 4 Types of Tickets

- Low (P4)
- Medium (P3)
- High (P2)
- Very High (P1)

### 🔹 These priorities tell how urgent a ticket is.

### 1. Very High Priority (P1)

- 🚨 Critical problem

- Whole SAP system or important function is not working

- Business cannot continue

Example: SAP is not opening for anyone.

🕒 Needs to be fixed immediately (within 2–4 hours)

### 2. High Priority (P2)

- ⚠️ Major issue

- Important feature not working for many users

- Business is affected

Example: Cannot create sales orders.

🕒 Needs to be fixed soon (within 4–8 hours)

### 3. Medium Priority (P3)

- 🔧 Normal issue

- Problem is there, but there is a workaround

- Business can continue

Example: Report is slow, but still works.

🕒 Can be fixed in 1–2 days

### 4. Low Priority (P4)

- 📝 Minor issue or request

- No impact to business

- Cosmetic or small change

Example: Want to rename a field label.

🕒 Can be fixed in 3–5 days

### ✅ Simple Summary:

| Priority  | Meaning                          | Fix Time      |
| --------- | -------------------------------- | ------------- |
| Very High | System totally not working       | Urgent (2–4h) |
| High      | Important function broken        | Fast (4–8h)   |
| Medium    | Small issue, workaround possible | 1–2 days      |
| Low       | Minor or cosmetic issue          | 3–5 days      |

---

### SAP Modules

- TM -- Transport Management
- DS -- Data Service
- BI -- Business Intelligence - Analytics, Reporting (real time ) BI Consultants

- FICO -- Finance and Controlling (deals with finance-- FI Consultants)
- HR -- Human and Resources
- MM -- Material Management (Procurement)
- SD -- Sales and Distribution

- CRM - Customer Relationship Management
- SRM -- Supply Relationship Management
- LE -- Logistics Execution

- PP -- Production Plannig
- WM -- Warehouse Management
- QM -- Quality Management

- ABAP
- S/4 HANA
- SAP FIORI

- SCM --
- PI -- Process Integration
- SEM --

#### The Place where all the servers are located

- Customer Data Center --> Store Application Server

- ABAP is a main business Core component

### Landscape --> Group of System

ABAP Landscape

- 1. Development System (DVS) ==> ABAP Module
  - DS SID --> DEV
- 2. QAS --> TST (name for QA)
  - QS SID --> QAS
- 3. PS --> Production System (SID -->PRD)
- 4. Sand Box --> Practice System ==> It is Optional
  - Sand Box does not connected Transport system.(Dev sys, QA sys and Ps) That will impact whole Transport System.
- Each system identify with IP Address and Host Name.

### SAP Application Connect panna use agura ways.

- SID ==> PRD (SID always unique)
- Instance Number --> 000 or 124 (SID different ah irunthal IN number same ah kudukalam)
- IP Address
- Host Name

### Authentication

- User name and password

### Autheritation

- Access the roles

- TR - Transport Request --> Capture Data

- Transport Management ==> Transport Codes. This is a one of sap module.

### Basic BI 3 System Landscape

These are all Consultants are Manditary

- Win Admin--OS
- SAP Basis Consultant
- DB Consultants
- ABAP Consultant
- SAP Security Consultant
- BI Consultant

## What are system in the landscape

- HR
- BI
- S/4 HANA

### how many systems in the landscape

- SAP Basis Admins Full Access to Production System
- Tester and limited ABAP consultants only access QA System
-
- SAP Logon Pad, SAP GUI, SAP Front-end. These are all to access SAP connect panna use agum.

### Scopes

- Implementation Scope
- Support Scope
- Migration Scope
- Upgrade Scope
