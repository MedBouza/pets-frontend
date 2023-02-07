export type MongoDocumentType = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};
export interface IPet extends MongoDocumentType {
  name: string;
  age: number;
}
