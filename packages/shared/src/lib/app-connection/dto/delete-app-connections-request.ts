import { Static, Type } from '@sinclair/typebox';
import { OpenOpsId } from '../../common/id-generator';

export const DeleteAppConnectionsRequest = Type.Object({
  connectionIds: Type.Array(OpenOpsId, {
    minItems: 1,
  }),
});

export type DeleteAppConnectionsRequest = Static<
  typeof DeleteAppConnectionsRequest
>;
