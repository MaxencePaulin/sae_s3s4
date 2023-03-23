import puppeteer from 'puppeteer' ;

export default function scrap(req, res) {
    console.log("toto")
    async function scrapeAll(){
        let browser;
        console.log(req)
        try{
            browser = await puppeteer.launch({
                headless: false,
                args: ["--disable-setuid-sandbox"],
                'ignoreHTTPSErrors': true
            });
            let tablefinal=[]
            let page = await browser.newPage();
            console.log(`Navigating to http://quotes.toscrape.com ...`);
            for (let i=1 ; i<10 ; i++){
                var site = "http://quotes.toscrape.com/page/"
                var urlstogo = site + i
                console.log(urlstogo)
                await page.goto(urlstogo);
                
                await Promise.all([
                    page.waitForSelector('.col-md-8', { visible: true }),
                    page.waitForNetworkIdle({ idleTime: 250 }),
                ]);
                let urls = await page.evaluate( () => {
                    const quotesList = document.querySelectorAll(".quote")
                    return Array.from(quotesList).map( quote =>{
                        const text = quote.querySelector(".text").innerText
                        const author = quote.querySelector(".author").innerText ;
                        return { text , author}
                    })
                });
                tablefinal.push(urls)
            }
            res.status(200).send({tablefinal})
        }
        catch(err){
            console.log("");
            res.status(500).send({
                message: err.message || "Some error occurred."
            });
        }
    }
    scrapeAll()
}

