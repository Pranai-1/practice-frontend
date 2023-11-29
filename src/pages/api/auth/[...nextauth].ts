import NextAuth from "next-auth/next";
import { authoptions } from "./authoptions";

export default NextAuth(authoptions);