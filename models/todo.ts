import mongoose from "mongoose";
import { Schema, Document } from 'mongoose';

export interface Todo extends Document {
    message: string;
}

const todoSchema: Schema<Todo> = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    }
})

export default mongoose.models.Todo || mongoose.model<String>('Todo', todoSchema);