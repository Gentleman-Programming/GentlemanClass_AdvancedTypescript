////////////////////////////////////
interface WhatEverType {
  property1: string;
}

interface WhatEverType2 {
  property2: number;
}

type WhatEverCorrectlyTyped = (param: any) => {
  (param: WhatEverType): string;
  (param: WhatEverType2): number;
}

const whatEver: WhatEverCorrectlyTyped = (param: any) => {
  if ("property1" in param) return param.property1;
  if ("property2" in param) return param.property2;
};

const param = {
  property1: "hello",
};
const result = whatEver(param);



//////////////////////////////////////
type Dependant<T extends { property: any }> = T['property'];

type Independant = {
  property: number;
}

const dependant: Dependant<Independant> = '1';

//////////////////////////////////////////////
enum Numbers1 {
  "NUMBER1" = "number1",
  "NUMBER2" = "number2",
}

enum Numbers2 {
  "NUMBER2" = "number2",
}

enum Numbers3 {
  "NUMBER3" = "number3",
  "NUMBER4" = "number4",
}

const mixOfNumbers = { ...Numbers1, ...Numbers2, ...Numbers3 } as const;
const mixValues = Object.values(mixOfNumbers);
type MixType = (typeof mixValues)[number];

type ENUMS = {
  [k in MixType]: any;
};


