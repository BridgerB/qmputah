use scraper::{Html, Selector};
fn main() {
    let response = reqwest::blocking::get("https://cannabisprescribersutah.com/prices/")
        .expect("Could not load url.");
    let document = Html::parse_document(&response.text().unwrap());
    let selector = Selector::parse("#\\36 db5b7a2-9ea2-4ccd-bcaa-b95fe6a5f0e7 > div > section > div > div.x-el.x-el-div.c1-1.c1-2.c1-19.c1-8w.c1-8x.c1-8y.c1-2a.c1-8z.c1-90.c1-91.c1-b.c1-c.c1-92.c1-93.c1-94.c1-95.c1-d.c1-e.c1-f.c1-g > div > div > div:nth-child(1) > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-9l.c1-9m.c1-9n.c1-b.c1-c.c1-d.c1-e.c1-f.c1-g > div:nth-child(3) > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-19.c1-1a.c1-4.c1-77.c1-6h.c1-b.c1-c.c1-9r.c1-d.c1-e.c1-f.c1-g > div").unwrap();
    let first_element = document.select(&selector).next();
    let price = first_element
        .expect("No element found")
        .text()
        .collect::<String>()[1..4]
        .parse::<u16>()
        .unwrap();
    println!("{}", price);
}
