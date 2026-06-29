export interface CrunchyrollAccount {
  id: string;
  groupId: string;
  email: string;
  encryptedPassword: string;
  renewalDate: Date;
  isRenewed: boolean;
  createdAt: Date;
}
