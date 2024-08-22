import { CoreOutput } from 'src/common/dtos/output.dto';

export const returnErrorOutput = (errorMessage: string): CoreOutput => {
  return {
    ok: false,
    error: errorMessage,
  };
};
