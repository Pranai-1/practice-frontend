import { GetServerSidePropsContext } from "next";
import { NextAuthOptions, getServerSession } from "next-auth";

export const authoptions:NextAuthOptions={
    providers: []
}

export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext["req"];
    res: GetServerSidePropsContext["res"];
  }) => {
    return getServerSession(ctx.req, ctx.res, authoptions);
  };
  