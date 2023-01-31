#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

var List:string[] = [];
    var ch;


async function Welcome()
{
    console.log(chalk.bgRedBright(`\nWelcome to the TO-DO-LIST-TEE by MTahaSh\n`));
    
}

await Welcome();

async function displayList(List:string[])
{
    console.log(chalk.yellow(`\nYour TODO LIST: `));
    
    for(var i = 0; i < List.length;i++)
    {
    console.log(`${i+1}-${List[i]}\n`);
    }
}

async function toDoList(List:string[]){
    
    
do{

    const todoLists = await inquirer.prompt([{
    
    name:"addList",
    type:"string",
    message:"Enter the task to add into the List: ",


    }]); 

    
    
    // if(todoLists.addList === List)
    // {
    // }

    List.push(todoLists.addList);

    const restart = await inquirer.prompt([{

        name:"ch",
        type:"string",
        message:"Do you want to continue? (Y/y): ",

    }]);

    var res = restart.ch;
    
}while(res == 'y' || res == 'Y') 
    
await displayList(List);


const decide = await inquirer.prompt([{

    name:"decision",
    type:"list",
    choices:['Add more list','Mark as done','Exit']

}])   


if(decide.decision === 'Add more list')
{
    await toDoList(List);
}

else if(decide.decision === 'Mark as done')
{
await removeList(List);
} 

else if(decide.decision === 'Exit')
{
    return;
}


}


async function removeList(List:string[])
{
    
 var i = 0;
 var temp:string;
 var arr:string[] = [];



    do{

        const remove = await inquirer.prompt([{

            name:"removeList",
            type:"list",
            choices:[...List]
        }])   


    
    for(var i = 0; i < List.length;i++)
    {
    if(List[i] === remove.removeList)
    {
        temp = List[i];
        List[i] = List[0];
        List[0] = temp;
        const arr = List.splice(1);
        List = arr;
        
    }

    }

    const restart = await inquirer.prompt([{

        name:"ch",
        type:"string",
        message:"Do you want to continue? (Y/y): ",

    }]);

    var res = restart.ch;

await displayList(List);
    

    }while(res == 'y' || res == 'Y');


    const decide = await inquirer.prompt([{

        name:"decision",
        type:"list",
        choices:['Add more list','Mark as done','Exit']
    
    }]) 


    if(decide.decision === 'Add more list')
{
    await toDoList(List);
}

else if(decide.decision === 'Mark as done')
{
await removeList(List);
} 

else if(decide.decision === 'Exit')
{
    return;
}



}



await toDoList(List);