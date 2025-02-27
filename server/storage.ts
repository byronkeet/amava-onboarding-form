import { users, type User, type InsertUser } from "@shared/schema";
import { supabase } from "@shared/supabase-server";
import { type Property, type InsertProperty } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createProperty(property: InsertProperty): Promise<Property>;
  getProperty(id: number): Promise<Property | null>;
}

//export class MemStorage implements IStorage { //removed
//  private users: Map<number, User>;
//  currentId: number;
//
//  constructor() {
//    this.users = new Map();
//    this.currentId = 1;
//  }
//
//  async getUser(id: number): Promise<User | undefined> {
//    return this.users.get(id);
//  }
//
//  async getUserByUsername(username: string): Promise<User | undefined> {
//    return Array.from(this.users.values()).find(
//      (user) => user.username === username,
//    );
//  }
//
//  async createUser(insertUser: InsertUser): Promise<User> {
//    const id = this.currentId++;
//    const user: User = { ...insertUser, id };
//    this.users.set(id, user);
//    return user;
//  }
//}

export class SupabaseStorage implements IStorage {
  async createProperty(property: InsertProperty): Promise<Property> {
    const { data, error } = await supabase
      .from('property_onboarding')
      .insert(property)
      .select()
      .single();

    if (error) throw error;
    if (!data) throw new Error('No data returned from insert');

    return data as Property;
  }

  async getProperty(id: number): Promise<Property | null> {
    const { data, error } = await supabase
      .from('property_onboarding')
      .select()
      .eq('id', id)
      .single();

    if (error) throw error;
    return data as Property | null;
  }
  async getUser(id: number): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  async getUserByUsername(username: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  async createUser(user: InsertUser): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

export const storage = new SupabaseStorage();