import io from "socket.io-client";
console.log("picas");
const socket = io("wss://le-18262636.bitzonte.com",{
    path:"/stocks"
});

console.log(socket);


