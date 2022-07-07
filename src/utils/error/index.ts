// import {ApolloError} from '@apollo/client';

export class CustomError extends Error {
  fields: Record<string, string[]> = {};

  fromNetwork = false;

  title: string;

  constructor(error: Error, title: string) {
    super(error.message);
    this.title = title;

    // if (error instanceof ApolloError) {
    //   if (error?.networkError) {
    //     this.fromNetwork = true;
    //     return;
    //   }

    //   const graphqlError = error?.graphQLErrors?.[0] ?? undefined;
    //   if (graphqlError) {
    //     this.fields = graphqlError.extensions as Record<string, string[]>;
    //     this.message = graphqlError.message;
    //   }
    // }
  }
}
