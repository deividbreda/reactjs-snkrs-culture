import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { fauna } from "../../../services/fauna";
import { query } from 'faunadb'

export default NextAuth({
    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),

        GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        }), 
    ], 
    
    callbacks: {
        async signIn({ user, account, profile}) {
            const { email } = user;

            try {   
                await fauna.query(
                    query.If(
                        query.Not(
                            query.Exists(
                                query.Match(
                                    query.Index('user_id_email'),
                                    query.Casefold(user.email)
                                )
                            )
                        ),
                        query.Create(
                            query.Collection('users'),
                            { data: { email }}
                        ),
                        query.Get(
                            query.Match(
                                query.Index('user_id_email'),
                                query.Casefold(user.email),
                            )
                        )
                    )
                )

                return true;
            } catch {
                return false;
            }
        }
    }
})