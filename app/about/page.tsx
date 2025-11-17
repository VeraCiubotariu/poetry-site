"use client";
import { useEffect } from "react";
import { AboutSection } from "../components";
import { PageLayout } from "../components/page-layout";
import "./about.css";

const aboutTexts = [
  "Dacă vrei să știi cine și ce sunt, te invit să citești cărțile mele și să asculți muzica noastră.\nEu sunt Corina Nica, născută în 12 august 1975, absolventă a Facultății de Litere, Istorie și Filosofie, licențiată în 2003 a Universității de Vest, Timișoara.",
  `În timpul studiilor am participat la laboratoarele de creație ale Cenaclului Literar brașovean ,,INTERVAL", publicând pentru prima dată versuri în publicația ,,Drum nou" la 14 ani.\nÎn 5 noiembrie 2012 am format la Codlea, Brașov, Cenaclul ,,Dincolo de cuvinte" , întâlnirile de suflet fiind un prilej de a etala scrierile noastre. Veneau la aceste seri de literatură iubitori de carte din întreaga Țară a Bârsei.`,
  "Dragostea de scris mi-a fost semănată de distinsa mea învățătoare Lucica Nan, suflet ales de care și azi mă leagă un respect deosebit. Apoi am continuat  îndrumată de preotul meu drag Ioan Tămaș de la Vâlcele. Mi-au fost profesori străluciți scriitorul Stelian Răducanu, academicianul  Victor Grecu, profesorul universitar Mioara Bud.",
  `În formarea mea au fost trepte : Revista Agero, Radio Codlea, Observatorul de Covasna, Cenaclul Ministerului de Interne ,,Nichita Stănescu" București, Cenaclul de Literatură și Artă ,,Luceafărul" din Giurgiu, echipele CODPRESS, ASTRA și SUFLET TRANSILVAN, Asociația Culturală ,,Eu Cred", Asociația Culturală  ART RESPECT.`,
  "Din postura de iubitoare de frumos, dar și de manager cultural, am organizat sute de evenimente și am făcut parte (împreună cu fiii Andrei și Matei și partenerul meu de viață, artistul Nica George) din echipele care au dat viață multor festivaluri din România și de peste hotare.",
  "Am iubit cărțile, ale altora și ale mele. Le sărut paginile și mă înclin în fața fiecărei idei, a fiecărei metafore, a fiecărei vibrații sau simțiri, ca și cum o mare taină ne este dezvăluită nouă, muritorilor, spre a ne arăta gustul nemuririi, spre a ne învăța să sperăm la ea.",
  "Am scris în mod special poezie de dragoste, având bucuria de a regăsi versurile mele în muzica folk a vremurilor noastre, cântate de prieteni dragi cu mare talent artistic cu care am împărțit scena în spectacole, festivaluri, lansări de carte sau chiar  evenimente caritabile. ",
  `Prima carte mi-a fost publicată de Editura ASTRA în 2014, se numește ,,File de jurnal". A doua carte a fost publicată de Editura Suflet Transilvan în 2017 , numită ,,Dincolo de cuvinte" , așa cum se numeau întâlnirile scriitorilor ținute în Casa de Cultură Codlea si în bibliotecile orașului.`,
  `În 2018, Editura SUFLET TRANSILVAN, publică al treilea volum de poezii - ,,Gânduri de bine", semnat Corina Nica.\nCartea a patra se numește ,,Terapie prin vers", prefațată de doamna Elena Moisa și Vasile Bele, publicată la Editura Izvorul Cuvântului, București. Aceasta a fost cea mai muncită carte a mea, timp de patru ani am elaborat cele 400 de poezii.`,
  `Împreună cu George Nica am colindat întreaga țară participând la tabere de creație, festivaluri, evenimente culturale, am compus cântece pe care le-am înregistrat în albumul ,,Declarație de dragoste" apărut în 2023. Pregătim un nou album, sperăm să vă placă și să ascultați cu drag muzica noastră.`,
  "Urmează cartea numărul cinci. Va fi publicată în curând. Până atunci, să ne bucurăm împreună de cântec și poezie, de sănătate, de lumină și libertate!",
  "Cu respect,\nCorina Nica.",
];

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionText = entry.target.querySelector(".about-section-text");

        if (entry.isIntersecting) {
          sectionText?.classList.add("about-section-animation");
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        sectionText?.classList.remove("about-section-animation");
      });
    });

    const elements = document.querySelectorAll(".about-section-container");

    if (elements) {
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageLayout selectedNavButton="about">
        {aboutTexts.map((aboutText) => (
          <AboutSection key={aboutText} aboutText={aboutText} />
        ))}
      </PageLayout>
      <div className="author"></div>
      <div className="button-bar">
        <a href="https://www.facebook.com/corina.nica1" target="_blank">
          <button
            className="facebook-button"
            onClick={() => console.log("ceva")}
          />
        </a>
        <a
          href="https://www.youtube.com/@corinasigeorgenica5747"
          target="_blank"
        >
          <button
            className="youtube-button"
            onClick={() => console.log("ceva")}
          />
        </a>
      </div>
    </>
  );
}
