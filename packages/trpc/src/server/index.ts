
import { z } from 'zod';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
    signUp: publicProcedure
        .input(z.object({
            email: z.string(),
            password: z.string()
        }))
        .mutation(async (opts) => {
            // context
            let email = opts.input.email;
            let password = opts.input.password;

            // Do validations here
            // Do database stuff here 

            let token = "123123";
            return {
                token
            }
        }),
    createTodo: publicProcedure
        .input(z.object({
            title: z.string()
        }))
        .mutation(async (opts) => {
            return {
                id: "1"
            }
        }),
    getEndpoint: publicProcedure
        .query(() => {
                return {
                    id: "1",
                    name: 'hello'
                }
        })

});

export type AppRouter = typeof appRouter;