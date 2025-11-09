export interface YamlControl {
  Control: string;
  Variant?: string;
  Properties: {
    [key: string]: any;
  };
}

export interface YamlChild {
  [key: string]: YamlControl;
}

export interface YamlScreen {
  Properties: {
    [key: string]: any;
  };
  Children: YamlChild[];
}

export interface YamlStructure {
  Screens: {
    [key: string]: YamlScreen;
  };
}