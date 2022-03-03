declare module "*.module.css" {
  const value: { [key: string]: any }
  export = value
}

declare module "*.svg" {
  const value: any
  export default value
}
