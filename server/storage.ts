import { type ContactForm } from "@shared/schema";

export interface IStorage {
  saveContactMessage(message: ContactForm): Promise<void>;
}

export class MemStorage implements IStorage {
  private messages: ContactForm[];

  constructor() {
    this.messages = [];
  }

  async saveContactMessage(message: ContactForm): Promise<void> {
    this.messages.push(message);
    console.log("Contact message saved:", message);
  }
}

export const storage = new MemStorage();
