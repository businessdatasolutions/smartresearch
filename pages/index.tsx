import { Toolbar } from '../components/toolbar'
import { AuditCards } from '../components/auditcards'
import styles from '../styles/index.module.scss'

function Intro(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <hr>
      </hr>
      <p className='lead'>{props.lead}</p>
      <img src="workflows-traditional.png" alt="" width="1149" height="181" role="presentation" className="img-fluid" />
      <img src="workflow.png" alt="" width="1149" height="180" role="presentation" className="img-fluid" />
      <img src="workflows-innovative.png" alt="" width="1149" height="180" role="presentation" className="img-fluid" />
    </div>
  )
}

function Paragraph(props) {
  return (
    <div>
      <h3>{props.heading}</h3>
      <p>{props.content}</p>
  </div>
  )
}

function WorkFlowTable() {
  return (
    <div>
      <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">Fase</th>
                    <th scope="col">Beschrijving</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="discovery.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Discovery</td>
                    <td>In de eerste fase vindt de begripvorming plaats. Door inzichten in de externe en interne context van de organisatie, kan het probleem beter worden begrepen, de scope van het onderzoek worden bepaald en specifieke onderzoeksvragen worden
                        geformuleerd.<br></br>Deze fase kan worden gekoppeld aan de <i>Understand-fase </i>binnen <a href="https://www.ideou.com/blogs/inspiration/what-is-design-thinking">Design Thinking</a>, waarbij de onderzoeker zich inleeft in de uitdagingen en behoeftes
                        van de vragende organisatie en tot een definitie van de onderzoeksvraag probeert te komen.</td>
                </tr>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="research.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Analysis</td>
                    <td>Nadat de onderzoeksvraag is geformuleerd, beslist de onderzoeker hoe hij het verdere onderzoek wil gaan uitvoeren. De inspiratie hiervoor heeft hij in de discovery fase opgedaan.
    
                        <br></br>In het begin van de Analysis-fase vindt intensief overleg met stakeholders plaats waarbij idee??n worden getoetst en afspraken worden gemaakt over bijvoorbeeld communicatie en milestones. Als alle stakeholders overtuigd zijn,
                        kan de onderzoeker aan het werk: data verzamelen, verwerken en uitkomsten interpreteren.
                    </td>
                </tr>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="management.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Writing</td>
                    <td>In deze fase worden alle uitkomsten van alle voorgaande fases samengevoegd tot een kennis- of discussiestuk (bijvoorbeeld een adviesrapport of een proof of concept).</td>
                </tr>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="manual.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Publication</td>
                    <td>Alle informatie omtrent het verloop van het onderzoek en de resultaten dienen te worden vastgelegd in een vorm die aansluit bij de wensen van de stakeholders. Deze wensen zijn in de vorige stap ge??nventariseerd en afspraken hierover zijn
                        samengevat in een aantal kwaliteitscriteria voor communicatie. De keuze voor de plek en vorm van publicatie hangt af van deze criteria.</td>
                </tr>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="sharing.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Outreach</td>
                    <td>Als de kwaliteit voldoende is en de stakeholders het toelaten, dient de kennis die is gegenereerd te worden gedeeld met het publiek van de HAN. Aangezien de HAN een maatschappelijke organisatie is, dient in principe iedereen die ge??nteresseerd
                        is vrij toegang te hebben.</td>
                </tr>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="scoring.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Assessment</td>
                    <td>Om de PDCA-cirkel te sluiten, beoordeelt de kritische onderzoeker het hele traject dat hij heeft doorlopen en kijkt of hij zijn eigen leerdoelen heeft behaald. Daarbij kijkt hij ook vooruit en formuleert een aantal leerpunten. Inspiratie
                        hiervoor haalt hij uit de feedback van de gebruikers van zijn materiaal.</td>
                </tr>
            </tbody>
        </table>
  </div>
  )
}



export default function Home() {
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <Intro
          heading="Kwaliteitsnormen Smart Research"
          lead="Het doel van onderzoek is waardevolle informatie te genereren m.b.t. complexe vraagstukken en duurzame oplossingsrichtingen. We defini??ren voor deze context onderzoek als het gehele proces van genereren, delen en verwerken van informatie. Door studenten
            van te voren goed te laten nadenken over dit proces en te ondersteunen bij de inrichting ervan wordt gestreefd naar een adequate kwaliteit van informatie. Dit document dient ter inspiratie voor docenten die onderzoeksprocessen van studenten begeleiden
            en beoordelen en geeft aanknopingspunten voor feedback en assessment."
        />
        <Paragraph
          heading="Onderzoeksworkflow"
          content="Onderzoek is een proces en kan worden beschreven als een aantal fases in een workflow. Aan iedere fase kunnen kwaliteitscriteria worden gekoppeld. Deze kwaliteitscriteria kunnen gaan over de input, het verwerkingsproces en de output, waarbij de kwaliteit van de output natuurlijk weer wordt bepaald door de inputcriteria van de volgende fase.

          In dit stuk hanteren we een workflow voor wetenschappelijk onderzoek (???Innovations in Scholarly Communication???, z.d.) met volgende fases:"
        />
        <WorkFlowTable />
        <Paragraph
          heading="Kwaliteitsaudit onderzoeksproces"
          content="Uiteindelijk kunnen aan iedere fase criteria worden gekoppeld, waarmee de kwaliteit van het onderzoeksproces kan worden bepaald. Omdat het een workflow betreft, is een goede eindkwaliteit per fase essentieel voor het succes van de volgende fase ('rubish in is rubish out'). De kwaliteit van de onderzoeker kan worden getest door de kwaliteit van de door hem gegenereerde uitkomsten per fase te meten. De meting kan plaats vinden door voor iedere fase bewijsmateriaal te verzamelen. In het onderstaande overzicht zijn daarom per fase een aantal auditvragen geformuleerd."
        />
        <AuditCards />
      </div>
    </div>
    
  )
}
