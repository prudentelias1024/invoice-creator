export interface FileInterface {
  lastModifiedTime: number;
  name: string;
  size: string;
  current: {
    click: () => void;
    files: FileList;
    value: string;
    lastModifiedDate: Date;
    type: string;
  };
}