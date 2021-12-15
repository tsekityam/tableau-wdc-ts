// Type definitions for tableauwdc 2.2
// Project: https://github.com/tableau/webdataconnector
// Definitions by: Tse Kit Yam <https://github.com/tsekityam>
// Definitions: https://github.com/tsekityam/tableauwdc-types

type ColumnInfo = {
  aggType?: aggTypeEnum;
  alias?: string;
  columnRole?: columnRoleEnum;
  columnType?: columnTypeEnum;
  dataType: dataTypeEnum;
  description?: string;
  filterable?: boolean;
  foreignKey?: any;
  geoRole?: geographicRoleEnum;
  id: string;
  numberFormat?: numberFormatEnum;
  unitsFormat?: unitsFormatEnum;
};

type DataDoneCallback = () => void;

type InitCallback = () => void;

type SchemaCallback = (
  tables: Array<TableInfo>,
  connections?: Array<StandardConnection>
) => void;

type ShutdownCallback = () => void;

type StandardConnection = {
  alias: string;
  tables: {
    id: string;
    alias: string;
  }[];
  joins: {
    left: {
      tableAlias: string;
      columnId: string;
    };
    right: {
      tableAlias: string;
      columnId: string;
    };
    joinType: "inner" | "left";
  }[];
};

type Table = {
  incrementValue: string;
  tableInfo: TableInfo;
  appendRows(rows: Array<any>): any;
};

type TableInfo = {
  columns: Array<ColumnInfo>;
  alias?: string;
  description?: string;
  id: string;
  incrementColumnId?: string;
  joinOnly?: boolean;
};

type WebDataConnector = {
  getData(table: Table, doneCallback: DataDoneCallback): void;
  getSchema(schemaCallback: SchemaCallback): void;
  init(initCallback: InitCallback): void;
  shutdown(shutdownCallback: ShutdownCallback): void;
};

declare namespace tableau {
  const aggTypeEnum: {
    avg: aggTypeEnum.avg;
    count: aggTypeEnum.count;
    count_dist: aggTypeEnum.count_dist;
    median: aggTypeEnum.median;
    sum: aggTypeEnum.sum;
  };

  const authPurposeEnum: {
    enduring: authPurposeEnum.enduring;
    ephemeral: authPurposeEnum.ephemeral;
  };

  const authTypeEnum: {
    basic: authTypeEnum.basic;
    custom: authTypeEnum.custom;
    none: authTypeEnum.none;
  };

  const columnRoleEnum: {
    dimension: columnRoleEnum.dimension;
    measure: columnRoleEnum.measure;
  };

  const columnTypeEnum: {
    continuous: columnTypeEnum.continuous;
    discrete: columnTypeEnum.discrete;
  };

  const dataTypeEnum: {
    bool: dataTypeEnum.bool;
    date: dataTypeEnum.bool;
    datetime: dataTypeEnum.datetime;
    float: dataTypeEnum.float;
    geometry: dataTypeEnum.geometry;
    int: dataTypeEnum.int;
    string: dataTypeEnum.string;
  };

  const geographicRoleEnum: {
    area_code: geographicRoleEnum.area_code;
    cbsa_msa: geographicRoleEnum.cbsa_msa;
    city: geographicRoleEnum.city;
    congressional_district: geographicRoleEnum.congressional_district;
    country_region: geographicRoleEnum.country_region;
    county: geographicRoleEnum.county;
    state_province: geographicRoleEnum.state_province;
    zip_code_postcode: geographicRoleEnum.zip_code_postcode;
  };

  const localeEnum: {
    america: localeEnum.america;
    brazil: localeEnum.brazil;
    china: localeEnum.china;
    france: localeEnum.france;
    germany: localeEnum.germany;
    japan: localeEnum.japan;
    korea: localeEnum.korea;
    spain: localeEnum.spain;
  };

  const numberFormatEnum: {
    currency: numberFormatEnum.currency;
    number: numberFormatEnum.number;
    percentage: numberFormatEnum.percentage;
    scientific: numberFormatEnum.scientific;
  };

  const phaseEnum: {
    authPhase: phaseEnum.authPhase;
    gatherDataPhase: phaseEnum.gatherDataPhase;
    interactivePhase: phaseEnum.interactivePhase;
  };

  const unitsFormatEnum: {
    billions_english: unitsFormatEnum.billions_english;
    billions_standard: unitsFormatEnum.billions_standard;
    millions: unitsFormatEnum.millions;
    thousands: unitsFormatEnum.thousands;
  };

  let authPurpose: authPurposeEnum;
  let authType: authTypeEnum;
  let connectionData: string;
  let connectionName: string;
  let locale: localeEnum;
  let password: any;
  let phase: phaseEnum;
  let platformBuildNumber: string;
  let platformEdition: string;
  let platformOs: "win" | "mac";
  let platformVersion: string;
  let username: string;
  let version: string;
  const abortForAuth: (errorMessage: string) => void;
  const abortWithError: (errorMessage: string) => void;
  const enableCookiePersistence: () => void;
  const log: (logMessage: string) => void;
  const makeConnector: () => WebDataConnector;
  const registerConnector: (connector: WebDataConnector) => void;
  const reportProgress: (progressMessage: string) => void;
  const submit: () => void;
}

declare enum aggTypeEnum {
  avg = "avg",
  count = "count",
  count_dist = "count_dist",
  median = "median",
  sum = "sum",
}

declare enum authPurposeEnum {
  enduring = "enduring",
  ephemeral = "ephemeral",
}

declare enum authTypeEnum {
  basic = "basic",
  custom = "custom",
  none = "none",
}

declare enum columnRoleEnum {
  dimension = "dimension",
  measure = "measure",
}

declare enum columnTypeEnum {
  continuous = "continuous",
  discrete = "discrete",
}

declare enum dataTypeEnum {
  bool = "bool",
  date = "date",
  datetime = "datetime",
  float = "float",
  geometry = "geometry",
  int = "int",
  string = "string",
}

declare enum geographicRoleEnum {
  area_code = "area_code",
  cbsa_msa = "cbsa_msa",
  city = "city",
  congressional_district = "congressional_district",
  country_region = "country_region",
  county = "county",
  state_province = "state_province",
  zip_code_postcode = "zip_code_postcode",
}

declare enum localeEnum {
  america = "en-us",
  brazil = "pt-br",
  china = "zh-cn",
  france = "fr-fr",
  germany = "de-de",
  japan = "ja-jp",
  korea = "ko-kr",
  spain = "es-es",
}

declare enum numberFormatEnum {
  currency = "currency",
  number = "number",
  percentage = "percentage",
  scientific = "scientific",
}

declare enum phaseEnum {
  authPhase = "authPhase",
  gatherDataPhase = "gatherDataPhase",
  interactivePhase = "interactivePhase",
}

declare enum unitsFormatEnum {
  billions_english = "billions_english",
  billions_standard = "billions_standard",
  millions = "millions",
  thousands = "thousands",
}
