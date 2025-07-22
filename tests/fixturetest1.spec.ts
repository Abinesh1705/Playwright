import {test} from './fixture1';
import { expect } from 'playwright/test';

test("Sause Test",async({login})=>{
    await expect(login).toContain("Products");
    
})