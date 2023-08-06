import "./Trip.css"
import TripData from "../components/TripData"
import kravice from "../images/kravice.jpg"
import prokosko from "../images/prokosko.jpg"
import hajducka from "../images/hajducka.jpg"
import una from "../images/una.jpg"


function Trip() {
    return(
        <div className="trip">
            <h1>Spaces to enjoy peace and quiet </h1>
            <div className="tripcard">
                <TripData
                image={kravice}
                heading = "Vodopad Kravice"
                text = "Na samo 40 kilometara od Mostara, nalazi se, po mišljenju mnogih, najlepša prirodna atrakcija Bosne i Hercegovine. Reč je o vodopadu Kravice na reci Trebižat. Smatran jednim od najslikovitijih mesta u Bosni, ovaj vodopad se može pohvaliti svojom veličinom sa neverovatnih 28 metara visine i 120 metara širine. Veliki broj turista svake godine poseti Bosnu i Hercegovinu upravo da bi videli ovaj dar prirode. "
                />

<TripData
                image={prokosko}
                heading = "Prokoško jezero"
                text = "Ovo ledničko jezero nalazi se na planini Vranica, u centralnoj Bosni i Hercegovini, na manje od 80 kilometara od Sarajeva. Okruženo brdima i planinskim vrhovima Prokoško jezero se formiralo na 1.636 metara nadmorske visine. Predeo u koji se jezero uklopilo iz daljine podseća na predele kakve možemo sresti u Švajcarskoj i Austriji."
                />

<TripData
                image={hajducka}
                heading = "Hajdučka vrata"
                text = "Jedan od najljepših simbola Parka prirode Blidinje jesu Hajdučka vrata. Smještena na istočnom dijelu planine Čvrsnica, predstavljaju prirodni fenomen stvaran vjekovima. To je zapravo karakteristični prsten u stijeni, a nalazi se na rubu kanjona Dive Grabovice."
                />

<TripData
                image={una}
                heading = "Štrbački buk"
                text = "Štrbački buk se sastoji iz nekoliko vodopada koji se nadovezuju, čineći magičan prizor usred guste šume. Ovaj, 40 metara širok vodopad obogaćuju brojni slapovi i brzaci koji se nastavljaju nizvodno. Tokom XX veka na obalama vodopada bili su smešteni mnogobrojni drveni mlinovi, kojih danas više nema. Međutim, ovaj prirodni fenomen danas je omiljeno mesto ljubitelja prirode, ronjenja i pecanja."
                />
            </div>
        </div>
    )
}

export default Trip