export class Profile {
    id: string;
    name: string;
    subtitle?: string;
    synopsis?: string = null;
    description?: string = null;
    icon?: string = null;
    images?: Array<string> = [];
}