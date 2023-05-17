import { object } from 'dot-object';

type IncludeFields = {
  [key: string]: IncludeFields | boolean;
};

export const graphqlFieldsToPrismaIncludeFields = (
  fields: string[],
): IncludeFields | null => {
  const fieldsToInclude = fields
    .filter((field) => field.startsWith('records.'))
    .map((field) => field.replace(/^records\./, ''))
    .filter((field) => field.includes('.'))
    .filter(
      (field, index, self) => !self.some((f) => f !== field && f.includes(field)),
    );

  if (!fieldsToInclude.length) {
    return null;
  }

  return object(
    fieldsToInclude.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.split('.').join('.select.')]: true,
      }),
      {},
    ),
  ) as IncludeFields;
};
