
function HistoryPage () {
    return (
            <div>
                <section id="intro" className="intro">
                        <div className="container">
                            <span className="btn-category">
                                <img src="./images/menu.svg" alt="menu" width="24" height="24" />
                            </span>
                            <h2>История музыки с 80-х до наших дней</h2>
                            <p>80-е стали эрой расцвета поп-музыки, благодаря таким звёздам, как Майкл Джексон, Мадонна и Принс. Также в это время набирали популярность новые жанры, такие как синтипоп и новый романтизм.</p>
                        </div>
                    </section>
        
                    <section id="epochs" className="epochs">
                        <div className="container">
                            <h2>1980-е: Возрождение Поп и Рок-музыки</h2>
                            <div className="epoch">
                                <h3>Ключевые жанры</h3>
                                <p>Синтипоп (Depeche Mode, Duran Duran), Новый романтизм (The Human League, Spandau Ballet), Поп-музыка (Майкл Джексон, Мадонна),  Хэви-метал (Metallica, Iron Maiden)</p>
                            </div>
                            <div className="epoch">
                                <h3>1990-е: Взрыв Гранжа и Хип-хопа</h3>
                                <p>В 90-х годах произошёл взлёт таких жанров, как гранж, альтернативный рок и хип-хоп. Nirvana и Kurt Cobain стали символами этого поколения, а рэп-музыка превратилась в массовое культурное явление.</p>
                                <p>Гранж (Nirvana, Pearl Jam), Альтернативный рок (Radiohead, Oasis), Хип-хоп (Tupac, The Notorious B.I.G.), Электронная музыка (The Prodigy, Aphex Twin)</p>
                                <br />
                                <h3>2000-е: Цифровая Эра и Рождение Инди-музыки</h3>
                                <p>2000-е годы стали эпохой цифровой музыки с приходом iTunes и MP3. Инди-рок и электронная музыка продолжали набирать популярность, а рэп стал доминирующим жанром.</p>
                                <p>Инди-рок (The Strokes, Arctic Monkeys), Электронная музыка (Daft Punk, Justice), Поп (Britney Spears, Beyoncé)</p>
                            </div>
                        </div>
                    </section>
        
                    <section id="famous" className="famous">
                        <div className="container">
                            <h2>Современная Музыка: 2010-е и Дальше</h2>
                            <ul>
                                <li>Поп (Billie Eilish, The Weeknd)</li>
                                <li>Хип-хоп (Drake, Travis Scott)</li>
                                <li>Электропоп (Grimes, Dua Lipa)</li>
                                <li>Инди (Tame Impala, Lana Del Rey)</li>
                            </ul>
                        </div>
                    </section>
                </div>
            );
        }


export default HistoryPage;