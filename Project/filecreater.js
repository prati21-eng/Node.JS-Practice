import readline from 'readline'
import fs from 'fs'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filecreation = () =>{
    rl.question("Enter the file name",(filename)=>{

        rl.question("Enter the content in the file ",(content)=>{
            fs.writeFile(`${filename}.txt`,content,(err)=>{
                if(err)
                {
                    console.error("Error while writing the file")
                }
                else{
                    console.log(`${filename}.txt created successfully and content writed `)
                }
                rl.close();
            })
        })

    })
}

filecreation()
