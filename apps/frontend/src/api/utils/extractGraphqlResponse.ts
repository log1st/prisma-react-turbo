export const extractGraphqlResponse = <Key extends string, Response>(key: Key) => (
  (response: { [key in Key]: Response }): Response => response[key]
);
