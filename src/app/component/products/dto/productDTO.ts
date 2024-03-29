export class ProductDTO{
  private _farmer_contact: string;
  private _farmer_name: string;
  private _product_desc: string;
  private _product_img: string;
  private _product_price: string;
  private _product_title: string;
  private _status: string;
  private _fertilizer: string;

  constructor(farmer_contact: string, farmer_name: string, product_desc: string, product_img: string, product_price: string, product_title: string, status: string, fertilizer: string) {
    this._farmer_contact = farmer_contact;
    this._farmer_name = farmer_name;
    this._product_desc = product_desc;
    this._product_img = product_img;
    this._product_price = product_price;
    this._product_title = product_title;
    this._status = status;
    this._fertilizer = fertilizer;
  }

  get farmer_contact(): string {
    return this._farmer_contact;
  }

  set farmer_contact(value: string) {
    this._farmer_contact = value;
  }

  get farmer_name(): string {
    return this._farmer_name;
  }

  set farmer_name(value: string) {
    this._farmer_name = value;
  }

  get product_desc(): string {
    return this._product_desc;
  }

  set product_desc(value: string) {
    this._product_desc = value;
  }

  get product_img(): string {
    return this._product_img;
  }

  set product_img(value: string) {
    this._product_img = value;
  }

  get product_price(): string {
    return this._product_price;
  }

  set product_price(value: string) {
    this._product_price = value;
  }

  get product_title(): string {
    return this._product_title;
  }

  set product_title(value: string) {
    this._product_title = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get fertilizer(): string {
    return this._fertilizer;
  }

  set fertilizer(value: string) {
    this._fertilizer = value;
  }
}
