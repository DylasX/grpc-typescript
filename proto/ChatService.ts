// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatMessage as _ChatMessage, ChatMessage__Output as _ChatMessage__Output } from './ChatMessage';
import type { Empty as _Empty, Empty__Output as _Empty__Output } from './Empty';
import type { JoinResponse as _JoinResponse, JoinResponse__Output as _JoinResponse__Output } from './JoinResponse';
import type { User as _User, User__Output as _User__Output } from './User';
import type { UserList as _UserList, UserList__Output as _UserList__Output } from './UserList';

export interface ChatServiceClient extends grpc.Client {
  getAllUsers(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _Empty, callback: grpc.requestCallback<_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _Empty, callback: grpc.requestCallback<_UserList__Output>): grpc.ClientUnaryCall;
  
  join(argument: _User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _User, metadata: grpc.Metadata, callback: grpc.requestCallback<_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _User, options: grpc.CallOptions, callback: grpc.requestCallback<_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _User, callback: grpc.requestCallback<_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _User, metadata: grpc.Metadata, callback: grpc.requestCallback<_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _User, options: grpc.CallOptions, callback: grpc.requestCallback<_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _User, callback: grpc.requestCallback<_JoinResponse__Output>): grpc.ClientUnaryCall;
  
  receiveMsg(argument: _Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_ChatMessage__Output>;
  receiveMsg(argument: _Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_ChatMessage__Output>;
  receiveMsg(argument: _Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_ChatMessage__Output>;
  receiveMsg(argument: _Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_ChatMessage__Output>;
  
  sendMsg(argument: _ChatMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _ChatMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _ChatMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _ChatMessage, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _ChatMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _ChatMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _ChatMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _ChatMessage, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  getAllUsers: grpc.handleUnaryCall<_Empty__Output, _UserList>;
  
  join: grpc.handleUnaryCall<_User__Output, _JoinResponse>;
  
  receiveMsg: grpc.handleServerStreamingCall<_Empty__Output, _ChatMessage>;
  
  sendMsg: grpc.handleUnaryCall<_ChatMessage__Output, _Empty>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  getAllUsers: MethodDefinition<_Empty, _UserList, _Empty__Output, _UserList__Output>
  join: MethodDefinition<_User, _JoinResponse, _User__Output, _JoinResponse__Output>
  receiveMsg: MethodDefinition<_Empty, _ChatMessage, _Empty__Output, _ChatMessage__Output>
  sendMsg: MethodDefinition<_ChatMessage, _Empty, _ChatMessage__Output, _Empty__Output>
}
