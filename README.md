# Opendatasoft  Api Node.js Wrapper

## Synopsis

This projects helps you to make HTTP requests to the opendatasoft API.


## Installation

```sh
npm install opendata-node
```

```javasctipt
var opendataclient = require('opendata-node');
```

```javasctipt
// Public API
var client = new opendataclient();
```

## Opendata API

OpenDataSoft datasets are accessible by developers through an HTTP REST API.


## API Index
Api's server address: https://public.opendatasoft.com/ or define our domaine, method GET.

## Methods

* [search](#search)




### search

**Request**

    /search/?q=q&lang=lang&rows=10&refine.modified=DATE
 Params

    q : Full-text query
    lang : 2-letters language code for linguistic text features
    rows :  Number of rows in the result (default: 10)
    refinetype :Refinements type to apply:modified,publisher,issued,language
    refine :Refinements to apply

**Response**

    {   datasetid: 'datasetid',
        metas:
             { 
                   publisher: 'publisher',
                   domain: 'public',
                   license: 'Licence Ouverte (Etalab)',
                   description: 'description data',
                   keyword: [Array],
                   title: 'title',
                   records_count: count,
                   staged: true or false,
                   data_visible: true or false,
                   visibility: 'domain',
                   modified: 'Date',
                   language: 'fr',
                   theme: 'Environnement',
                   references: 'url reference',
                   data_processed: 'Date',
                   metadata_processed: 'Date' 
            },
        has_records: true or false,
        data_visible: true or false,
        features: [Object],
        attachments: [Object],
        alternative_exports: [Object],
        fields:[Object]
      }

**Examples**
Request:
    /search/?lang=fr&q=car&rows=5
    
```javasctipt
var host="public.opendatasoft.com";
var client = new OPDBXL(host,"1.0");//#or 2.0

//Params
var lang="fr";
var q="car";
var rows="1";
var refinetype="modified";
var refine="2013";

//function Search
client.search(q,lang,rows,"","",function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);
});
```

Response:

    { datasetid: 'vehicules-commercialises',
        metas:
     { publisher: 'ADEME',
       domain: 'public',
       license: 'Licence Ouverte (Etalab)',
       description: '<p>Depuis 2001, l’ADEME acquiert tous les ans ces  données auprès de l’Union Technique de l’Automobile du motocycle et du  Cycle UTAC (en charge de l’homologation des véhicules avant leur mise en  vente) en accord avec le ministère du développement durable.</p><div><p> Pour chaque véhicule les données d’origine (transmises par l’Utac)sont les suivantes :</p> <ul><li>les consommations de carburant</li><li>les émissions de dioxyde de carbone (CO2)</li><li>les émissions des polluants de l’air (réglementés dans le cadre de la norme Euro)</li><li>l’ensemble des caractéristiques techniques des véhicules (gammes, marques, modèles, n° de CNIT, type d’énergie ...)</li></ul> <p>Sur le site Carlabelling (<a href="http://carlabelling.ademe.fr">http://carlabelling.ademe.fr</a>), L’ADEME complète ces données avec les informations suivantes :</p> <ul><li>les valeurs du bonus malus et de l’étiquette Classe Energie - CO2  (qui varient en fonction de la réglementation issue de la Loi de Finance  et de ses décrets)</li><li>les résultats d’expertises  tels le coût annuel de la consommation  de carburant sur 15 000 km Elle établit également des classements pour distinguer les véhicules  «  les plus propres en CO2 et les plus économes en énergie » (Palmarès).</li></ul> <p>L’ADEME publie chaque année : un <a href="http://www2.ademe.fr/servlet/getDoc?sort=-1&amp;cid=96&amp;m=3&amp;id=52820&amp;ref=&amp;nocache=yes&amp;p1=111">guide officiel</a> « Véhicules particuliers neufs : consommations conventionnelles de carburant et émissions de CO2 »</p> </div>',
       keyword: [Array],
       title: 'Emissions de CO2 et de polluants des véhicules commercialisés en France',
       records_count: 305701,
       staged: false,
       data_visible: true,
       visibility: 'domain',
       modified: '2015-10-27T10:19:22+00:00',
       language: 'fr',
       theme: 'Environnement',
       references: 'https://www.data.gouv.fr/fr/datasets/emissions-de-co2-et-de-polluants-des-vehicules-commercialises-en-france/',
       data_processed: '2017-03-22T09:22:12+00:00',
       metadata_processed: '2017-03-22T09:22:13+00:00' },
    has_records: true,
    data_visible: true,
    features: [ 'analyze', 'timeserie' ],
    attachments: [],
    alternative_exports: [],
    fields:
     [ [Object],
       [Object],
     ] 
 

***



## API Reference

https://docs.opendatasoft.com/api/explore/v1.html#search-api-v1

## Contributors

Anis Haboubi

## License

See [LICENSE.txt](LICENSE.txt) for more info.