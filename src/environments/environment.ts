// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  community_ip:'localhost',
  community_port:'9030',
  content_ip:'localhost',
  content_port:'9100',
  content_index_port:'9101',
  agent_ip:'localhost',
  agent_port:'9050',
  agent_index_port:'9051',
  rss_connector_ip:'localhost',
  rss_connector_port:'7034',
  content_lookup_port:'9200',
  content_lookup_ip:'localhost',
  content_lookup_index_port:'9201',
  knowledge_graph_ip:'localhost',
  knowledge_graph_port:'10300'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
