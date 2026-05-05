import { api } from '@/app/lib/api';
import {
  AppConnection,
  AppConnectionWithoutSensitiveData,
  DeleteAppConnectionsRequest,
  ListAppConnectionsRequestQuery,
  PatchAppConnectionRequestBody,
  SeekPage,
  UpsertAppConnectionRequestBody,
} from '@openops/shared';
import qs from 'qs';

export const appConnectionsApi = {
  list(
    request: ListAppConnectionsRequestQuery,
  ): Promise<SeekPage<AppConnectionWithoutSensitiveData>> {
    return api.get<SeekPage<AppConnectionWithoutSensitiveData>>(
      '/v1/app-connections',
      request,
    );
  },
  get(id: string): Promise<AppConnection> {
    return api.get<AppConnection>(`/v1/app-connections/${id}`);
  },
  getMetadata(): Promise<Record<string, any>> {
    return api.get<Record<string, any>>('/v1/app-connections/metadata');
  },
  patch(request: PatchAppConnectionRequestBody): Promise<AppConnection> {
    return api.patch<AppConnection>(`/v1/app-connections`, request);
  },
  upsert(request: UpsertAppConnectionRequestBody): Promise<AppConnection> {
    return api.post<AppConnection>('/v1/app-connections', request);
  },
  delete(id: string): Promise<void> {
    return api.delete<void>(`/v1/app-connections/${id}`);
  },
  deleteMany(request: DeleteAppConnectionsRequest): Promise<void> {
    const query = qs.stringify(request, { arrayFormat: 'repeat' });
    return api.delete<void>(`/v1/app-connections?${query}`);
  },
};
