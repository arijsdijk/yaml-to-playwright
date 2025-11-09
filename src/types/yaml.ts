export interface YamlProperties {
  Visible?: boolean | string;
  [key: string]: any;
}

export interface YamlControl {
  Control: string;
  Variant?: string;
  Properties: YamlProperties;
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