import mongoose from "mongoose";
import { Schema, Document } from 'mongoose';

export interface Todo extends Document {
    message: String;
}

const todoSchema: Schema<Todo> = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    }
})

export default mongoose.models.Todo || mongoose.model<Todo>('Todo', todoSchema);