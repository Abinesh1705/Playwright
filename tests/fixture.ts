import {test as base} from '@playwright/test'

type myFixture = {
    helloword:string;
}

export const test = base.extend<myFixture>({

    helloword:async ({},use:any) => {
        console.log(("Where is my Tea"));
        await use();
        
    }
})