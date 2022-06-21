/* Import základní knihovny Reactu */
import React from "react";

/* Export funkce Homepage(), která představuje komponentu základní stránky aplikace */
export default function Homepage() {
  return (
    /* Kód v jazyce JSX, v němž je možné používat i běžné značky HTML */
    <>
      <h1>Domovská stránka</h1>
      Vítej na mém osobním blogu. <br></br>
      Pokusím se vám zde přiblížit téma počítačových simulací. Sám jsem se o toto téma začal zajímat teprve nedávno a chtěl bych se o své vědomosti podělit.<br></br>
      Zde budu používat jazyk Javascript pro jeho jednoduchost.
      <h3>Kdo jsem?</h3>
      Student SŠPU Opava, třída IT2 <br></br>
      <h3>Koníčky:</h3>
      <li>Programování</li>
      <li>Výpočetní technologie</li>
      <li>Počítačové hry</li>
      <h3>Znalosti:</h3>
      <li>Javascript - canvasové hry a aplikace</li>
      <li>C# - Windows forms</li>
      <li>C - konzolové aplikace</li>
      <li>C++ - OpenGL a shaderovací jazyky</li>
      <li>Rust - počítačové simulace</li>
      <li>Electron - jednoduché aplikace</li>
      <h3>Pozadí:</h3>
      Začal jsem jako student IT. K zájmu o tento obor mě ale dostal až můj bratr, který mě naučil jazyk Javascript. <br></br>
      Své první projekty jsem začal v canvasu. Protože jsem neměl zájem naučit se HTML, musel jsem věchen interface svých projektů dělat v Javascriptu. <br></br>
      Později jsem se dostal k jazyku C#, zamiloval jsem si jeho funkčnost a získal přitom spoustu důležitých znalostí. <br></br>
      Momentálně se učím jazyk Rust.
    </>
  );
}
