/*Given the basic salary and benefits of an employee, write a program that would calculate the Payee Tax, NHIF, NSSF Deductions and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.*/

//----------------------------------------------------------------------------------------------//
// This line imports the readline module, which allows you to read input from the user.
const readline = require('readline');

//This creates an interface for reading input and output.

const rl = readline.createInterface({
  input: process.stdin,//This enables the program to read input from the command line.
  output: process.stdout//This enables the program to write an output to the command line.
});

rl.question('Enter your Basic Salary: ', (basicSalary) => {
//The line above prompts the user to input their marks with the statement `Enter your Basic Salary:`.

    //This function payeDeduction calculates the PAYE tax due from the basic salary passed to it as an parameter. The deduction calculations are based on percentages from https://www.aren.co.ke/payroll/taxrates.htm. 
    const extraParameter =["personalRelief","insuranceRelief","pensionFundContribution","hospContribution","ownerOccupierInterest","disabilityExemption","housingRelief"]
    // the extraParamenter variable holds the various PAYE paramenters that could be passed to payeDeduction
    function payeDeduction (basicSalary,extraParameter='null') {
        let paye // Initialize paye and finalPaye so they can be used in the subsquent if-else statements.
        let finalPaye
        // This if else block calculates PAYE based on basic salary only
        if (basicSalary <= 24000){
            paye = 0.1 * basicSalary
        } else if (basicSalary>= 24001 && basicSalary<=32333){
            paye = 0.25 * basicSalary
        } else if (basicSalary>32333){
            paye = 0.3 * basicSalary
        } else {
            console.log("Check amount again")
            
        }
        //This if else statement block calculates the final PAYE tax due by taking into account the extra parameters that can be applied for any one individual.
        if (extraParameter==="personalRelief"){
            finalPaye=paye-2400
        } else if (extraParameter==="insuranceRelief"){
            finalPaye=paye-5000
        } else if (extraParameter === "pensionFundContribution"){
            finalPaye=paye-20000
        } else if (extraParameter === "hospContribution"){
            finalPaye=paye
        } else if (extraParameter === "hospContribution"){
            finalPaye=paye
        } else if (extraParameter === "housingRelief"){
            finalPaye=paye-9000
        } else if (extraParameter === "ownerOccupierInterest"){
            finalPaye=paye-25000
        } else if (extraParameter === "disabilityExemption"){
            finalPaye=paye-150000
            
        } else if (extraParameter === "null"){
            finalPaye=paye
        }
        return finalPaye // Final PAYE due
    }


    //Function "nhifDeduction" calculates the NHIF contribution due using the basic salary and the contribution brackets at https://www.aren.co.ke/payroll/taxrates.htm
    

    function nhifDeduction (basicSalary){
        let nhif// Intialises nhif to be used as a variable in the subsquent if else statement
        if (basicSalary>=0 && basicSalary<=5999){
            nhif=150
        } else if (basicSalary>=6000 && basicSalary<=7999){
            nhif=300
        }else if (basicSalary>=8000 && basicSalary<=11999){
            nhif=400
        }else if (basicSalary>=12000 && basicSalary<=14999){
            nhif=500
        }else if (basicSalary>=15000 && basicSalary<=19999){
            nhif=600
        }else if (basicSalary>=20000 && basicSalary<=24999){
            nhif=750
        }else if (basicSalary>=25000 && basicSalary<=29999){
            nhif=850
        }else if (basicSalary>=30000 && basicSalary<=34999){
            nhif=900
        }else if (basicSalary>=35000 && basicSalary<=39999){
            nhif=950
        }else if (basicSalary>=40000 && basicSalary<=44999){
            nhif=1000
        }else if (basicSalary>=45000 && basicSalary<=49999){
            nhif=1100
        }else if (basicSalary>=50000 && basicSalary<=59999){
            nhif=1200
        }else if (basicSalary>=60000 && basicSalary<=69999){
            nhif=1300
        }else if (basicSalary>=70000 && basicSalary<=79999){
            nhif=1400
        }else if (basicSalary>=80000 && basicSalary<=89999){
            nhif=1500
        }else if (basicSalary>=90000 && basicSalary<=99999){
            nhif=1600
        }else if (basicSalary>=100000){
            nhif=1700
        }else {
            
        }
        return nhif// Final NHIF contribution due
    }

    //Function "nssfDeduction" calculates the NSSF contribution due using the basic salary and the contribution brackets at https://www.aren.co.ke/payroll/taxrates.htm
    function nssfDeduction(basicSalary){
        let nssfrate = 2*(0.05 * basicSalary)
        if (nssfrate<=400){
            return nssfrate
        } else if (nssfrate > 400){
            nssfrate = 400
        }

        return nssfrate// Final NSSF contribution

    }
    console.log(`PAYE Tax:`+payeDeduction(basicSalary))
    console.log(`NHIF:`+nhifDeduction(basicSalary))
    console.log(`NSSF:`+nssfDeduction(basicSalary))

    
 rl.close();
});

