export class Brand {
    id: string;
    name: string;
    subtitle?: string;
    synopsis?: string = null;
    description?: string = null;
    icon?: string = null;
    images?: Array<string> = [];
    link?: string = null;
}