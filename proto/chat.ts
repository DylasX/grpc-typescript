import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatServiceClient as _ChatServiceClient, ChatServiceDefinition as _ChatServiceDefinition } from './ChatService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ChatMessage: MessageTypeDefinition
  ChatService: SubtypeConstructor<typeof grpc.Client, _ChatServiceClient> & { service: _ChatServiceDefinition }
  Empty: MessageTypeDefinition
  JoinResponse: MessageTypeDefinition
  ReceiveMsgRequest: MessageTypeDefinition
  User: MessageTypeDefinition
  UserList: MessageTypeDefinition
}

