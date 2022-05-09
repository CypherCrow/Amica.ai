export const Choices: { 
        type: string, 
        sender: string, 
        subject?: string,
        questionMessageOrMore: string | string[], 
        choices: { a: string, b: string }, 
        resultMessages: string[]
    }[] = [
        {
            type: 'email',
            sender: 'Andreas Hammarström', 
            subject: 'First Order of the Day',
            questionMessageOrMore: `Dear AppSec Engineer Level Principal (Aselp),
            
            Welcome aboard again to the Amica.AI team! Now, onto our piece de resistance for the day.

            There is a misconfiguration left by our last guest, and is unfortunately located at our clients database. 
            What is needed to prevent a SQL Injection attack?

            Better let me know fast. Good luck!

            Best, 
            Andreas Hammarström
            Project Manager, Security Engineering
            `, 
            choices: {
                a: 'Have a regex check for a comment indicator',
                b: 'Do nothing.'
            }, 
            resultMessages: [
                `Great job! You still know your stuff after your preparation period. We'll be a great team, Aselp!
                
                - Andreas
                `, 
                `Oof, wrong choice here, buddy. But no worries, your memory might be rusty, so take some time to review.
                
                - Andreas
                `
            ]
        }, 
        {
            type: 'email', 
            sender: 'amica_it@', 
            subject: 'URGENT: Password update required',
            questionMessageOrMore: `Hello Mr. Aselp,
            
            Hope you are having a good day. We are informing you that your password will expire within 4 hours.

            Please head to the link provided to change your password: http://amica-ai.s3.us-east-1.amazonaws.com/index/html

            Thank you for your cooperation,
            Amica.AI IT Management Team

            ----------

            What do you do here? Also, real email 
            `, 
            choices: {
                a: 'Check the link, and report the email if link is not of the company domain.', 
                b: 'Click on the link, and cooperate like an obedient employee.'
            }, 
            resultMessages: [
                `Hello Mr. Aselp,
                
                We have received a report on a phishing email. Can't believe they would try to imitate us.

                Good job on catching it! Great work!

                Best,
                Andreas Hammarström
                Project Manager, Security Engineering
                `
            ]
        }, 
        {
            type: 'chat',
            sender: 'Seok Yeon-hee',
            questionMessageOrMore: [`Hi there`, 
                `I need your help in thinking of a password, but I forgot the company policy again.`, 
                `Don't ask why. I'm in a rush to get this latest patch for the Supply Chain Overseer, haha`, 
                `Could you remind me again, if you don't mind?`
            ], 
            choices: {
                a: `A password should have at least eight letters, one number, and one special character`, 
                b: `A password should have at least one number and one special character`
            },
            resultMessages: [
                `I like the sound of that! Thanks! :)`, 
                `Thanks, though I think it has to be stronger than that.`
            ]
        }
]