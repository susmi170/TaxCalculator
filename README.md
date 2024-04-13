This program is to calculate the income post tax deduction.

Input variables:
grossAnualIncomeValue ---Gross Anual income is your total salary before any deductions
extraIncomeValue----Extra income is any income apart from your salary
deductionsValue--Total deduction will be any investment done which belongs to tax saving category i.e PPF,LIC,NSC..
age:--Age group the user belongs to
Each field have a question mark icon shown by default to hover and check what that field means to user.

Assumption :
We are validating fields only after user clicks on submit button . If we have to do on key change then logic needs to be changed accordingly .
After all suceesfull validation and reslut comes on popup , if user clicks on OK , page will keep the entered value as it is.


Validation :
1. Each of the fields are mandatory to be filled by the user : 
If kept blank and clicks on submit button, info circle icon will appear at the end of each field with hover it will show Age group selection is mandatory for age field,
Please enter numbers only for other input fields.

2."Total deductions can not be more than total income" alert will be shown if both entered combine income is less than entered deduction .

Screenshots:
1.Initial page :
![image](https://github.com/susmi170/TaxCalculator/assets/149704969/7fcdb608-162c-4551-9026-4d0d59ce3aaa)


2.Keeping fields empty/or non number value for number fields and submit (Info icon came for all the fields)
![image](https://github.com/susmi170/TaxCalculator/assets/149704969/061c15a9-5841-44e2-839f-8f6df66c3194)


3.negative input for numbers alert message .
![image](https://github.com/susmi170/TaxCalculator/assets/149704969/b5412c8a-5d46-4d78-9e4b-d719d4b75977)


4."Total deductions can not be more than total income" alert will be shown if both entered combine income is less than entered deduction .
![image](https://github.com/susmi170/TaxCalculator/assets/149704969/bac749a8-d667-47af-b3e1-e95686c38d51)


5.All valid input actual result
![image](https://github.com/susmi170/TaxCalculator/assets/149704969/28c6e997-3c50-4c34-b3f1-9face02e10a6)


