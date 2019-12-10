import { Injectable } from '@angular/core';
import { IContentGetStatus } from '../../../app/login/interfaces/IGetStatus';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggerService } from 'src/app/common/logging/logger.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentserviceService implements IContentserviceService {
  idolDatabases : Array<string>;
  constructor(private _http:HttpClient, private logger: LoggerService) { }

  getDatabases(): Observable<Array<string>> {
    return this.getDatabasesObs().pipe(map(response => {
      this.idolDatabases = [];
      if (response.autnresponse.response == "SUCCESS")
      {
        var idolDbs = response.autnresponse.responsedata.databases.database;
        idolDbs.forEach(database => {
          this.idolDatabases.push(database.name);
        });
      }
      return this.idolDatabases;
    }));
  }

  getDatabasesObs(): Observable<IContentGetStatus> {
    let url = `http://${environment.content_ip}:${environment.content_port}/`;
    return this._http.get<IContentGetStatus>( url ,{
      params:{
        Action:'GetStatus',
        ResponseFormat:'simplejson'
      }
    });
  }
}


@Injectable()
export class ContentserviceServiceMock extends ContentserviceService implements IContentserviceService {

  getDatabasesObs(): Observable<IContentGetStatus> {
   return of({
    "autnresponse": {
    "action": "GETSTATUS",
    "response": "SUCCESS",
    "responsedata": {
    "product": "IDOL Server",
    "version": "12.4.0",
    "build": "1872665",
    "licensed_languages": "UNLIMITED",
    "indexport": "9101",
    "indexport_ssl_enabled": "false",
    "queryport": "0",
    "aciport": "9100",
    "serviceport": "9102",
    "directory": "C:\\MicroFocus\\IDOLServer-12.4.0\\content",
    "querythreads": "0",
    "acithreads": "4",
    "termsperdoc": "50",
    "suggestterms": "40",
    "documents": "8",
    "document_sections": "8",
    "committed_documents": "99953",
    "deleted_sections": "99945",
    "indexed_data_gb": "0.000223",
    "full": "false",
    "full_ratio": "0.00",
    "terms": "329298",
    "total_terms": "329298",
    "term_hashes": "1",
    "record_size": "37",
    "max_occurrences": "75030",
    "mindate": "1",
    "maxdate": "1575261128",
    "mindatestring": "00:00:01 01/01/1970",
    "maxdatestring": "04:32:08 02/12/2019",
    "ref_fields": "7",
    "ref_hashes": "430824",
    "indexqueue": {
    "indexqueuereceived": "231",
    "indexqueuecompleted": "226",
    "indexqueuequeued": "0",
    "initialid": "0"
    },
    "termcache": {
    "used_kb": "0",
    "num_terms": "0",
    "limit_kb": "0",
    "requests": "110822",
    "hits": "2302",
    "hitrate": "2"
    },
    "indexcache": {
    "used_kb": "0",
    "num_terms": "0",
    "limit_kb": "102400",
    "num_blocks": "1"
    },
    "fieldcodes": {
    "base": "200",
    "total": "200"
    },
    "databases": {
    "max_databases": "65534",
    "num_databases": "3",
    "active_databases": "3",
    "database": [
    {
    "name": "Job_Description",
    "documents": "1",
    "sections": "1",
    "internal": "false",
    "readonly": "false",
    "expiry_hours": "No Information Available",
    "expiry_action": "No Information Available"
    },
    {
    "name": "Resume",
    "documents": "4",
    "sections": "4",
    "internal": "false",
    "readonly": "false",
    "expiry_hours": "No Information Available",
    "expiry_action": "No Information Available"
    },
    {
    "name": "IDOL",
    "documents": "3",
    "sections": "3",
    "internal": "false",
    "readonly": "false",
    "expiry_hours": "No Information Available",
    "expiry_action": "No Information Available"
    }
    ]
    },
    "language_type_settings": {
    "no_of_language_types": "89",
    "language_type": [
    {
    "name": "afrikaansUTF8",
    "language": "AFRIKAANS",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "albanianUTF8",
    "language": "ALBANIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "arabicUTF8",
    "language": "ARABIC",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "armenianUTF8",
    "language": "ARMENIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "azeriUTF8",
    "language": "AZERI",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "basqueUTF8",
    "language": "BASQUE",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "belorussianUTF8",
    "language": "BELORUSSIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "bengaliUTF8",
    "language": "BENGALI",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "bosnianUTF8",
    "language": "BOSNIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "bretonUTF8",
    "language": "BRETON",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "bulgarianUTF8",
    "language": "BULGARIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "burmeseUTF8",
    "language": "BURMESE",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "catalanUTF8",
    "language": "CATALAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "chineseUTF8",
    "language": "CHINESE",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "croatianUTF8",
    "language": "CROATIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "czechUTF8",
    "language": "CZECH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "danishUTF8",
    "language": "DANISH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "dutchUTF8",
    "language": "DUTCH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "englishUTF8",
    "language": "ENGLISH",
    "encoding": "UTF8",
    "documents": "8",
    "sections": "8"
    },
    {
    "name": "esperantoUTF8",
    "language": "ESPERANTO",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "estonianUTF8",
    "language": "ESTONIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "ethiopicUTF8",
    "language": "ETHIOPIC",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "faroeseUTF8",
    "language": "FAROESE",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "finnishUTF8",
    "language": "FINNISH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "frenchUTF8",
    "language": "FRENCH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "gaelicUTF8",
    "language": "GAELIC",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "galicianUTF8",
    "language": "GALICIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "georgianUTF8",
    "language": "GEORGIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "germanUTF8",
    "language": "GERMAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "greekUTF8",
    "language": "GREEK",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "gujaratiUTF8",
    "language": "GUJARATI",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "hausaUTF8",
    "language": "HAUSA",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "hebrewUTF8",
    "language": "HEBREW",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "hindiUTF8",
    "language": "HINDI",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "hungarianUTF8",
    "language": "HUNGARIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "icelandicUTF8",
    "language": "ICELANDIC",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "indonesianUTF8",
    "language": "INDONESIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "italianUTF8",
    "language": "ITALIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "japaneseUTF8",
    "language": "JAPANESE",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "kannadaUTF8",
    "language": "KANNADA",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "kazakhUTF8",
    "language": "KAZAKH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "khmerUTF8",
    "language": "KHMER",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "koreanUTF8",
    "language": "KOREAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "kurdishUTF8",
    "language": "KURDISH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "laoUTF8",
    "language": "LAO",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "latinUTF8",
    "language": "LATIN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "latvianUTF8",
    "language": "LATVIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "lithuanianUTF8",
    "language": "LITHUANIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "luxembourgishUTF8",
    "language": "LUXEMBOURGISH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "macedonianUTF8",
    "language": "MACEDONIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "malayUTF8",
    "language": "MALAY",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "malayalamUTF8",
    "language": "MALAYALAM",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "maoriUTF8",
    "language": "MAORI",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "mongolianUTF8",
    "language": "MONGOLIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "nepaliUTF8",
    "language": "NEPALI",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "norwegianUTF8",
    "language": "NORWEGIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "oriyaUTF8",
    "language": "ORIYA",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "panjabiUTF8",
    "language": "PANJABI",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "persianUTF8",
    "language": "PERSIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "polishUTF8",
    "language": "POLISH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "portugueseUTF8",
    "language": "PORTUGUESE",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "pushtoUTF8",
    "language": "PUSHTO",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "romanianUTF8",
    "language": "ROMANIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "russianUTF8",
    "language": "RUSSIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "serbianUTF8",
    "language": "SERBIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "singhaleseUTF8",
    "language": "SINGHALESE",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "slovakUTF8",
    "language": "SLOVAK",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "slovenianUTF8",
    "language": "SLOVENIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "somaliUTF8",
    "language": "SOMALI",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "spanishUTF8",
    "language": "SPANISH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "swahiliUTF8",
    "language": "SWAHILI",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "swedishUTF8",
    "language": "SWEDISH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "tagalogUTF8",
    "language": "TAGALOG",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "tajikUTF8",
    "language": "TAJIK",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "tamilUTF8",
    "language": "TAMIL",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "tatarUTF8",
    "language": "TATAR",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "teluguUTF8",
    "language": "TELUGU",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "thaiUTF8",
    "language": "THAI",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "tibetanUTF8",
    "language": "TIBETAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "turkishUTF8",
    "language": "TURKISH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "ukrainianUTF8",
    "language": "UKRAINIAN",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "urduUTF8",
    "language": "URDU",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "uzbekUTF8",
    "language": "UZBEK",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "vietnameseUTF8",
    "language": "VIETNAMESE",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "welshUTF8",
    "language": "WELSH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "xhosaUTF8",
    "language": "XHOSA",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "yiddishUTF8",
    "language": "YIDDISH",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "zuluUTF8",
    "language": "ZULU",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    },
    {
    "name": "generalUTF8",
    "language": "GENERAL",
    "encoding": "UTF8",
    "documents": "0",
    "sections": "0"
    }
    ]
    },
    "validation": {
    "result": [
    {
    "@type": "diskindex",
    "$": "N/A"
    },
    {
    "@type": "nodetable",
    "$": "N/A"
    },
    {
    "@type": "refindex",
    "$": "N/A"
    },
    {
    "@type": "unstemmed",
    "$": "N/A"
    },
    {
    "@type": "secindex",
    "$": "N/A"
    },
    {
    "@type": "numeric",
    "$": "N/A"
    },
    {
    "@type": "geospatial",
    "$": "N/A"
    }
    ]
    },
    "compaction": {
    "last_compact_id": "N/A",
    "compact_state": "N/A"
    },
    "data_encryption": {
    "activated": "false",
    "nodetable_encrypted": "false",
    "indexqueue_encrypted": "false",
    "diskindex_encrypted": "false",
    "unstemmed_encrypted": "false",
    "geoindex_encrypted": "false"
    }
    }
    }
    } as any)
  }
}

export interface IContentserviceService {
  getDatabases(): Observable<Array<string>>;
  getDatabasesObs(): Observable<IContentGetStatus>;
}