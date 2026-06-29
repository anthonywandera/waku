export interface AccountProfile {
  id: string;
  accountId: string;
  profileNumber: number;
  profileName: string;
  assignedTo: string | null;
  isLocked: boolean;
}
