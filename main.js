#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
await figlet("Student  Management  System", function name(err, data) {
    if (err) {
        console.log("Kuch to Kabara Ho raha hai yaha...");
        console.dir(err);
        return null;
    }
    console.log(chalk.yellowBright(data));
});
const Student_list = [`fatima`, `maryam`, `tuba`];
let loop = true;
while (loop) {
    let Main = await inquirer.prompt([
        {
            name: "main",
            type: "list",
            message: "What do you want to do ? \n\nCheck the Following List :",
            choices: [
                "Enroll",
                "Tuition Fees",
                "Veiw Courses",
                "view Student",
                "Exit",
            ],
        },
    ]);
    if (Main.main === "Enroll") {
        let checking = await inquirer.prompt([
            {
                name: "name",
                type: "string",
                message: "Enter your name :",
            },
        ]);
        if (Student_list.includes(checking.name)) {
            console.log(`\n You are already enrolled in our Institute.\n`);
            loop = false;
        }
        else {
            const new_student = await inquirer.prompt([
                {
                    name: "course",
                    type: "list",
                    message: "In which course you want to enroll",
                    choices: [
                        ` Certified AI`,
                        ` Web 3.0`,
                        ` Metaverse`,
                        ` Internet Computing`,
                    ],
                },
                {
                    name: "day",
                    type: "list",
                    message: "Select the day",
                    choices: [`Mon`, `Tues`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`],
                },
                {
                    name: "time",
                    type: "list",
                    message: "Select the timing",
                    choices: [`Morning`, `Afternoon`, `Evening`],
                },
            ]);
            async function generated_Student_ID() {
                const program = "IT-";
                const ID = Math.floor(Math.random() * 900) + 100;
                console.log("ID :" + program + ID);
            }
            console.log(chalk.greenBright `Congratulations\nYou are enrolled in our Institute.\n`);
            console.log(`Name: ${checking.name}`);
            generated_Student_ID();
            console.log(`Courses: ${new_student.course}`);
            console.log(`Day: ${new_student.day}`);
            console.log(`Timing: ${new_student.time}`);
            Student_list.push(new_student.name);
            loop = false;
        }
    }
    else if (Main.main === "view Student") {
        console.log(chalk.magenta(Student_list));
    }
    else if (Main.main === "Tuition Fees") {
        async function TuitionFees() {
            let fees = 4500;
            console.log(chalk.bold.greenBright(`\n
  
    Certified AI : ${chalk.white(fees)}
  
    Web 3.0 : ${chalk.white(fees)}
  
    Metaverse : ${chalk.white(fees)}
  
    Internet Computing : ${chalk.white(fees)}

  
    Payment one Time in Three Months. 
  
    Thank you.
    `));
        }
        await TuitionFees();
    }
    else if (Main.main === "Veiw Courses") {
        async function courses() {
            console.log(chalk.bold.greenBright(`\n
  
    Certified AI 
  
    Web 3.0 
  
    Metaverse 
  
    Internet Computing 

  
    
    Thank you.
    `));
        }
        await courses();
    }
    else if (Main.main === "Exit") {
        async function exit() {
            loop = false;
        }
        await exit();
    }
    else {
        console.log(chalk.bold.red("Ops Something went wrong\nPlease Try Again"));
    }
}
/**
 * {
          name: "day",
          type: "list",
          message: "Select the day from here below",
          list: [
            `Monday`,
            `Tuesday`,
            `Wednesday`,
            `Thursday`,
            `Friday`,
            `Saturday`,
            `Sunday`,
          ],
        },
        {
          name: "time",
          type: "list",
          message: "Select the time from here below",
          list: [`09:00 - 12:00`, `02:00 - 5:00`, `07:00 - 10:00`],
        },
 */
