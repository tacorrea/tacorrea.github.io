import io from 'socket.io-client';

const socket = io('wss://le-18262636.bitzonte.com',{
    path:'/stocks'
});

console.log(socket);


