
import { expect } from '@playwright/test'

export class Demohome{
     constructor(page){
        
        this.page=page;
        this.Books=page.locator("(//a[@href='/books'])[1]");
        this.Computers=page.locator("(//a[@href='/computers'])[1]");
        this.Electronics=page.locator("(//a[@href='/electronics'])[1]");
        this.Apparel=page.locator("(//a[@href='/apparel-shoes'])[1]");
        this.Digital=page.locator("(//a[@href='/digital-downloads'])[1]");
        this.Jewelry=page.locator("(//a[@href='/jewelry'])[1]");
        this.Gift=page.locator("(//a[@href='/gift-cards'])[1]");

        this.Cellphone=page.locator("(//ul[@class='sublist firstLevel']//a[@href='/cell-phones'])[1]");
        this.Smartphone=page.locator("(//a[@href='/smartphone'])[1]");
        this.Addart=page.getByRole('button', { name: 'Add to cart' });


     }

}