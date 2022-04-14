import Head from 'next/head'
import styles from './about.module.scss'

const About = () => {
  return ( 
    <>
      <Head>
        <title>Test | ingrii</title>
        <meta 
          name="description"
          content="Här står det info som kan synas på Google om just den här sidan"
        />
      </Head>
      <div className={styles.mediaQueries}>
        <h1 className={styles.testColor}>Testsida</h1>
        <p><strong>Här ser man hur man gör media queries.</strong></p>
        <p>Det nu vanliga hälsningsordet "hej" var tidigare bara en 
          interjektion. Ordet började först användas som hälsning av 
          medlemmarna i Götiska förbundet under tidigt 1800-tal, som 
          ansåg att ordet var vikingalikt, och menade att vikingarna 
          faktiskt kunde sagt så. Efter detta togs "hej" upp i 
          studentkretsar i Uppsala på 1870-talet, för att bli allmänt 
          spritt först på 1930-talet.
        </p>
        <p>Det togs även upp av 
          ungsocialisterna i 1900-talets början. Anton Nilson skrev 1980: 
          "Per Albin Hansson blev redaktör för det nya förbundets tidning 
          Fram. Ofta sammanträffade vi, hälsade vårt 'Hej'. 
          (Det var ungsocialisterna som tog upp det lilla nätta ordet 'hej' 
          efter Götiska förbundet, som låtit det falla i glömska, och genom 
          ungsocialisterna och ungdemokraterna bredde det lilla ordet ut sig 
          över hela landet och blev omsider ett allmänt hälsningsord.
        </p>
      </div>
    </>
   );
}
 
export default About;