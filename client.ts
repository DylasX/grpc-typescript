import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/chat'
import { User } from './proto/User'
import {ReceiveMsgRequest} from './proto/ReceiveMsgRequest'

const PORT = 8082
const PROTO_FILE = './proto/chat.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType


const client = new grpcObj.ChatService(
  `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
)

const user : User = {
    id: '1',
    name: 'Miguel'
};

client.join(user, {}, (err,response)=>{
    if(err) return console.error(err)
    console.log(response)
})

const strRequest: ReceiveMsgRequest = {}
const chatStream = client.receiveMsg(strRequest, {});
chatStream.on('data', (response)=>{
    console.log(response)
})

client.sendMsg({from:"admin",msg:"Hola"}, {}, (err,response)=>{
    if(err) return console.error(err)
})