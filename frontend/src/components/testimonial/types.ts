export interface Props<T = any> {
  name: string;
  companyName: string;
  testimony: string;
  testifier: T;
}

export interface ITestifier {
  name: string;
  position: string;
  image: string;
}
