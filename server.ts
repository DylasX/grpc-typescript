import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/chat'
import { UserList } from './proto/UserList'


const PORT = 8082
const PROTO_FILE = './proto/chat.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const grpcUsers: UserList = {
    users: []
};
const observers : any = []

function main() {
  const server = getServer()

  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Your server as started on port ${port}`)
    server.start()
  })
}

const join = (call:any, callback:any) => {
    const user = call.request;
  
    // check username already exists.
    const userExist = grpcUsers?.users?.find((_user) => _user.name == user.name);
    if (!userExist) {
      grpcUsers?.users?.push(user);
      callback(null, {
        error: 0,
        msg: "Success",
      });
      console.log(grpcUsers)
    } else {
      callback(null, { error: 1, msg: "User already exist." });
    }
  };

const receiveMsg = (call:any, callback:any) => {
    observers.push({
        call,
    });
};

const getAllUsers = (call:any, callback:any) => {
    callback(null, { users: grpcUsers?.users });
};

const sendMsg = (call:any, callback:any) => {
    const chatObj = call.request;
    observers.forEach((observer:any) => {
      observer.call.write(chatObj);
    });
    callback(null, {});
};


function getServer() {
  const server = new grpc.Server()
  server.addService(grpcObj.ChatService.service, {
    join,
    receiveMsg,
    sendMsg,
    getAllUsers
  })
  return server
}

main()